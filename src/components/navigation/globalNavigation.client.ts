/**
 * AMARA global navigation — client interaction controller
 *
 * Architectural intent:
 * One controller owns every interactive state in the header: desktop groups, the
 * language menu and the mobile panel. They are deliberately not split apart,
 * because Escape priority, mutual closing and the shared document-level
 * listeners only stay consistent while a single owner holds them.
 *
 * Native DOM only, scoped to the [data-am-navigation] root.
 */

type InertRecord = { element: HTMLElement; wasInert: boolean };

const DESKTOP_QUERY = '(min-width: 1024px)';

function initGlobalNavigation(): void {
  const header = document.querySelector<HTMLElement>('[data-am-navigation]');
  if (!header) return;

  // A page renders one header; guard anyway so a repeated import cannot bind twice.
  if (header.dataset.amNavigationReady === 'true') return;
  header.dataset.amNavigationReady = 'true';

  const menuTrigger = header.querySelector<HTMLElement>('[data-am-menu-trigger]');
  const mobileMenu = header.querySelector<HTMLElement>('[data-am-mobile-menu]');
  const language = header.querySelector<HTMLElement>('[data-am-language]');
  const languageTrigger = header.querySelector<HTMLElement>('[data-am-language-trigger]');
  const desktopGroups = Array.from(header.querySelectorAll<HTMLElement>('.am-nav__group'));
  const desktopQuery = window.matchMedia(DESKTOP_QUERY);
  const interactionRoot = header.closest<HTMLElement>('[data-am-interaction-root]');

  let mobileInertRecords: InertRecord[] = [];
  let mobileBackgroundIsInert = false;

  const collectMobileInertTargets = (): HTMLElement[] => {
    const targets: HTMLElement[] = [];
    const addTarget = (element: HTMLElement | null) => {
      if (element && !targets.includes(element)) targets.push(element);
    };

    addTarget(header.querySelector<HTMLElement>('.am-nav__brand'));
    addTarget(header.querySelector<HTMLElement>('.am-nav__center'));
    addTarget(header.querySelector<HTMLElement>('.am-nav__slot--language'));
    addTarget(header.querySelector<HTMLElement>('.am-nav__slot--cta'));

    let activeBranch: HTMLElement = header;
    while (interactionRoot && activeBranch !== interactionRoot) {
      const parent = activeBranch.parentElement;
      if (!parent) break;

      for (const sibling of Array.from(parent.children)) {
        if (sibling !== activeBranch && sibling.tagName !== 'SCRIPT') {
          addTarget(sibling as HTMLElement);
        }
      }

      activeBranch = parent;
    }

    return targets;
  };

  const setMobileBackgroundInert = (inert: boolean): void => {
    if (inert) {
      if (mobileBackgroundIsInert) return;
      mobileInertRecords = collectMobileInertTargets().map((element) => ({
        element,
        wasInert: element.inert
      }));
      for (const record of mobileInertRecords) {
        record.element.inert = true;
      }
      mobileBackgroundIsInert = true;
      return;
    }

    if (!mobileBackgroundIsInert) return;
    for (const record of mobileInertRecords) {
      record.element.inert = record.wasInert;
    }
    mobileInertRecords = [];
    mobileBackgroundIsInert = false;
  };

  const setLanguageOpen = (open: boolean): void => {
    if (!language || !languageTrigger) return;
    language.setAttribute('data-open', open ? 'true' : 'false');
    languageTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  const setDesktopGroupExpanded = (group: HTMLElement, expanded: boolean): void => {
    const trigger = group.querySelector<HTMLElement>('.am-nav__group-trigger');
    const dropdown = group.querySelector<HTMLElement>('.am-nav__dropdown');
    if (expanded) {
      group.setAttribute('data-open', 'true');
    } else {
      group.removeAttribute('data-open');
      group.removeAttribute('data-activation-open');
    }
    if (trigger) trigger.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    if (dropdown) dropdown.inert = !expanded;
  };

  const closeDesktopGroups = (exceptGroup?: HTMLElement): void => {
    for (const group of desktopGroups) {
      if (group === exceptGroup) continue;
      setDesktopGroupExpanded(group, false);
      group.removeAttribute('data-hover-suppressed');
    }
  };

  const openDesktopGroup = (group: HTMLElement, activated: boolean): void => {
    closeDesktopGroups(group);
    group.removeAttribute('data-hover-suppressed');
    if (activated) {
      group.setAttribute('data-activation-open', 'true');
    } else {
      group.removeAttribute('data-activation-open');
    }
    setDesktopGroupExpanded(group, true);
  };

  closeDesktopGroups();

  for (const group of desktopGroups) {
    const trigger = group.querySelector<HTMLElement>('.am-nav__group-trigger');

    group.addEventListener('pointerenter', () => {
      if (!desktopQuery.matches || group.hasAttribute('data-hover-suppressed')) return;
      if (group.hasAttribute('data-activation-open')) return;
      openDesktopGroup(group, false);
    });

    group.addEventListener('pointerleave', () => {
      group.removeAttribute('data-hover-suppressed');
      if (!desktopQuery.matches) {
        setDesktopGroupExpanded(group, false);
        return;
      }
      if (group.hasAttribute('data-activation-open')) return;
      if (group.contains(document.activeElement)) return;
      setDesktopGroupExpanded(group, false);
    });

    if (trigger) {
      trigger.addEventListener('click', () => {
        if (!desktopQuery.matches) return;
        if (group.hasAttribute('data-activation-open')) {
          const suppressHover = group.matches(':hover');
          setDesktopGroupExpanded(group, false);
          if (suppressHover) group.setAttribute('data-hover-suppressed', 'true');
          return;
        }
        openDesktopGroup(group, true);
      });
    }

    group.addEventListener('focusout', (event) => {
      const nextTarget = event.relatedTarget;
      if (nextTarget instanceof Node && group.contains(nextTarget)) return;
      setDesktopGroupExpanded(group, false);
    });
  }

  const setMenuOpen = (open: boolean): void => {
    if (!menuTrigger || !mobileMenu) return;
    mobileMenu.hidden = !open;
    menuTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    const nextLabel = open
      ? menuTrigger.getAttribute('data-label-close')
      : menuTrigger.getAttribute('data-label-open');
    if (nextLabel !== null) menuTrigger.setAttribute('aria-label', nextLabel);
    document.documentElement.classList.toggle('am-nav-lock', open);
    setLanguageOpen(false);
    setMobileBackgroundInert(open);

    if (open) {
      const firstControl = mobileMenu.querySelector<HTMLElement>('summary, a');
      if (firstControl) firstControl.focus();
    }
  };

  if (menuTrigger && mobileMenu) {
    menuTrigger.addEventListener('click', () => {
      setMenuOpen(menuTrigger.getAttribute('aria-expanded') !== 'true');
    });

    mobileMenu.addEventListener('click', (event) => {
      const target = event.target;
      if (target instanceof Element && target.closest('a')) setMenuOpen(false);
    });
  }

  if (language && languageTrigger) {
    languageTrigger.addEventListener('click', (event) => {
      event.stopPropagation();
      setLanguageOpen(languageTrigger.getAttribute('aria-expanded') !== 'true');
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (language && target instanceof Node && language.contains(target)) return;
    setLanguageOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (languageTrigger && languageTrigger.getAttribute('aria-expanded') === 'true') {
      setLanguageOpen(false);
      languageTrigger.focus();
      return;
    }
    if (menuTrigger && menuTrigger.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuTrigger.focus();
      return;
    }
    const expandedDesktopGroup = header.querySelector<HTMLElement>(
      '.am-nav__group[data-open="true"]'
    );
    if (expandedDesktopGroup) {
      const openDesktopTrigger = expandedDesktopGroup.querySelector<HTMLElement>(
        '.am-nav__group-trigger'
      );
      setDesktopGroupExpanded(expandedDesktopGroup, false);
      expandedDesktopGroup.removeAttribute('data-hover-suppressed');
      if (openDesktopTrigger) openDesktopTrigger.focus();
    }
  });

  const handleDesktopChange = (event: MediaQueryListEvent): void => {
    if (event.matches) setMenuOpen(false);
    closeDesktopGroups();
  };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', handleDesktopChange);
}

initGlobalNavigation();
