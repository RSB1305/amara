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

/**
 * A page renders one header; guard anyway so a repeated import cannot bind twice.
 * The guard is module-private on purpose — the header's DOM contract must not gain
 * a runtime attribute, and a global would leak the same state onto window.
 */
const initializedNavigationRoots = new WeakSet<HTMLElement>();

function initGlobalNavigation(): void {
  const header = document.querySelector<HTMLElement>('[data-am-navigation]');
  if (!header) return;

  if (initializedNavigationRoots.has(header)) return;
  initializedNavigationRoots.add(header);

  const menuTrigger = header.querySelector<HTMLElement>('[data-am-menu-trigger]');
  const mobileMenu = header.querySelector<HTMLElement>('[data-am-mobile-menu]');
  const language = header.querySelector<HTMLElement>('[data-am-language]');
  const languageTrigger = header.querySelector<HTMLElement>('[data-am-language-trigger]');
  const desktopGroups = Array.from(header.querySelectorAll<HTMLElement>('.am-nav__group'));
  const desktopQuery = window.matchMedia(DESKTOP_QUERY);
  const hasContextNavigation = header.hasAttribute('data-am-navigation-contextual');
  const hasOverlayAppearance = header.getAttribute('data-am-navigation-appearance') === 'overlay';
  const interactionRoot = header.closest<HTMLElement>('[data-am-interaction-root]');

  let mobileInertRecords: InertRecord[] = [];
  let mobileBackgroundIsInert = false;
  let scrollFrameRequested = false;

  const collectMobileInertTargets = (): HTMLElement[] => {
    const targets: HTMLElement[] = [];
    const addTarget = (element: HTMLElement | null) => {
      if (element && !targets.includes(element)) targets.push(element);
    };

    addTarget(header.querySelector<HTMLElement>('.am-nav__brand'));
    addTarget(header.querySelector<HTMLElement>('.am-nav__center'));
    addTarget(header.querySelector<HTMLElement>('.am-nav__slot--experience-access'));
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

  const closeLanguage = (): void => {
    setLanguageOpen(false);
    language?.removeAttribute('data-activation-open');
    language?.removeAttribute('data-hover-suppressed');
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
    if (mobileMenu.classList.contains('am-nav-mobile--contextual')) {
      mobileMenu.hidden = false;
      mobileMenu.toggleAttribute('data-am-contextual-closed', !open);
    } else {
      mobileMenu.hidden = !open;
    }
    menuTrigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    const nextLabel = open
      ? menuTrigger.getAttribute('data-label-close')
      : menuTrigger.getAttribute('data-label-open');
    if (nextLabel !== null) menuTrigger.setAttribute('aria-label', nextLabel);
    document.documentElement.classList.toggle('am-nav-lock', open);
    closeLanguage();
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

      if (desktopQuery.matches) {
        if (language.hasAttribute('data-activation-open')) {
          const suppressHover = language.matches(':hover');
          closeLanguage();
          if (suppressHover) language.setAttribute('data-hover-suppressed', 'true');
          return;
        }

        language.setAttribute('data-activation-open', 'true');
        language.removeAttribute('data-hover-suppressed');
        setLanguageOpen(true);
        return;
      }

      setLanguageOpen(languageTrigger.getAttribute('aria-expanded') !== 'true');
    });

    language.addEventListener('pointerenter', () => {
      if (!desktopQuery.matches || language.hasAttribute('data-hover-suppressed')) return;
      if (!language.hasAttribute('data-activation-open')) setLanguageOpen(true);
    });

    language.addEventListener('pointerleave', () => {
      language.removeAttribute('data-hover-suppressed');
      if (!desktopQuery.matches || language.hasAttribute('data-activation-open')) return;
      setLanguageOpen(false);
    });
  }

  document.addEventListener('click', (event) => {
    const target = event.target;
    if (language && target instanceof Node && language.contains(target)) return;
    closeLanguage();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (languageTrigger && languageTrigger.getAttribute('aria-expanded') === 'true') {
      closeLanguage();
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

  const syncScrollState = (): void => {
    scrollFrameRequested = false;
    if (hasOverlayAppearance) {
      header.setAttribute('data-am-overlay-scrolled', window.scrollY > 32 ? 'true' : 'false');
    }
    const hidden = hasContextNavigation && desktopQuery.matches && window.scrollY > 64;
    const wasHidden = header.getAttribute('data-am-scroll-hidden') === 'true';
    if (hidden === wasHidden) return;

    header.setAttribute('data-am-scroll-hidden', hidden ? 'true' : 'false');
    if (hidden) {
      closeDesktopGroups();
      closeLanguage();
    }
  };

  const requestScrollSync = (): void => {
    if (scrollFrameRequested) return;
    scrollFrameRequested = true;
    window.requestAnimationFrame(syncScrollState);
  };

  window.addEventListener('scroll', requestScrollSync, { passive: true });

  const handleDesktopChange = (event: MediaQueryListEvent): void => {
    if (event.matches) setMenuOpen(false);
    closeDesktopGroups();
    syncScrollState();
  };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener('change', handleDesktopChange);
  syncScrollState();
}

initGlobalNavigation();
