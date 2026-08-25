/**
 * Design tokens for the internal tool pages.
 *
 * The tools are standalone documents: they deliberately do not import
 * `global.css`, because pulling in Tailwind's base layer would restyle their own
 * chrome. That left each of them to state the palette itself, and each drifted
 * in its own direction — the component library carried fifteen hand-copied hex
 * values out of forty-one, and the guest-welcome index ran a near-miss palette
 * where five of six values were close to the brand but not equal to it.
 *
 * This module is the one bridge. `?raw` hands the stylesheet over as text
 * without injecting it, and Vite resolves the path at bundle time — reading it
 * from disk with `import.meta.url` works in the dev server and fails in a build,
 * where the compiled module no longer sits beside the source.
 */
import globalCss from '../../styles/global.css?raw';

const themeBlock = /@theme\s*\{([\s\S]*?)\n\}/.exec(globalCss)?.[1] ?? '';

const declarations = [...themeBlock.matchAll(/(--(?:color|font)-[a-z0-9-]+):\s*([^;]+);/g)].map(
  ([, name, value]) => [name, value.trim()] as const
);

if (declarations.length === 0) {
  throw new Error(
    'Internal tools: no design tokens found in src/styles/global.css. The @theme block moved or changed shape.'
  );
}

/** Every colour and font token the design system declares, by name. */
export const designTokens = Object.fromEntries(declarations) as Record<string, string>;

/**
 * The tokens as CSS declarations, ready to drop inside a `:root` block.
 *
 * @param indent - leading whitespace per line, to match the host stylesheet.
 * @param extra - tool-local values that are deliberately outside the system.
 */
export function designTokenCss(indent = '  ', extra: Record<string, string> = {}): string {
  return [...declarations, ...Object.entries(extra)]
    .map(([name, value]) => `${indent}${name}: ${value};`)
    .join('\n');
}

/** A `:root` block carrying the system tokens plus any tool-local additions. */
export function designTokenRoot(indent = '  ', extra: Record<string, string> = {}): string {
  return `:root {\n${designTokenCss(indent, extra)}\n}`;
}
