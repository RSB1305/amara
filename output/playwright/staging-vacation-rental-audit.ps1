$ErrorActionPreference = 'Stop'

$baseUrl = 'https://amara-staging.pages.dev'
$slugs = @(
  'la-amara-farah',
  'la-amara-lounis',
  'la-amara-zaid',
  'la-amara-maha',
  'la-amara-playa',
  'la-amara-family-and-surf'
)

function Get-Utf8Html($url) {
  $client = [System.Net.WebClient]::new()
  $bytes = $client.DownloadData($url)
  [System.Text.Encoding]::UTF8.GetString($bytes)
}

$results = foreach ($slug in $slugs) {
  $url = "$baseUrl/$slug/"
  $response = Invoke-WebRequest -UseBasicParsing -Uri $url -TimeoutSec 30
  $html = Get-Utf8Html $url

  $canonical = ''
  if ($html -match '<link\s+rel="canonical"\s+href="([^"]+)"') {
    $canonical = $Matches[1]
  }

  $jsonLdMatches = [regex]::Matches($html, '<script type="application/ld\+json">(?<json>.*?)</script>', 'Singleline')
  $rentalNode = $null
  foreach ($match in $jsonLdMatches) {
    $parsed = $match.Groups['json'].Value | ConvertFrom-Json
    $nodes = @($parsed)
    if ($parsed.'@graph') {
      $nodes = @($parsed.'@graph')
    }
    foreach ($node in $nodes) {
      if ($node.'@type' -eq 'VacationRental') {
        $rentalNode = $node
      }
    }
  }

  [pscustomobject]@{
    Slug = $slug
    Status = [int]$response.StatusCode
    Canonical = $canonical
    HasVacationRental = [bool]$rentalNode
    Identifier = if ($rentalNode) { $rentalNode.identifier } else { '' }
    SchemaImageCount = if ($rentalNode -and $rentalNode.image) { @($rentalNode.image).Count } else { 0 }
    Occupancy = if ($rentalNode -and $rentalNode.containsPlace) { $rentalNode.containsPlace.occupancy.value } else { $null }
  }
}

$sitemapIndex = Get-Utf8Html "$baseUrl/sitemap-index.xml"

$audit = [pscustomobject]@{
  Pages = $results
  SitemapIndexHasProductionHost = $sitemapIndex.Contains('https://amara-lodging.es')
  SitemapIndexHasStagingHost = $sitemapIndex.Contains($baseUrl)
}

$audit | ConvertTo-Json -Depth 8
