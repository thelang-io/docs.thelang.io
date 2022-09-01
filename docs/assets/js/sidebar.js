'use strict';

(function (document, window) {
  const windowUrl = window.location.href
  const sidebarSectionElements = document.querySelectorAll('.sidebar__section')

  for (let i = 0; i < sidebarSectionElements.length; i++) {
    const sidebarSectionEl = sidebarSectionElements[i]
    const sidebarSectionHeadlineEl = sidebarSectionEl.querySelector('.sidebar__section-headline')
    const sidebarSectionItemLinkElements = sidebarSectionEl.querySelectorAll('.sidebar__item-link')
    const isAlwaysExpanded = sidebarSectionEl.classList.contains('sidebar__section--always-expanded')

    for (let j = 0; j < sidebarSectionItemLinkElements.length; j++) {
      const sidebarSectionItemLinkEl = sidebarSectionItemLinkElements[j]

      if (windowUrl.startsWith(sidebarSectionItemLinkEl.href)) {
        sidebarSectionItemLinkEl.classList.add('sidebar__item-link--active')

        if (!isAlwaysExpanded) {
          sidebarSectionEl.classList.add('sidebar__section--expanded')
        }
      }
    }

    if (sidebarSectionHeadlineEl !== null && !isAlwaysExpanded) {
      sidebarSectionHeadlineEl.addEventListener('click', function (e) {
        if (e.currentTarget.parentNode.classList.contains('sidebar__section--expanded')) {
          e.currentTarget.parentNode.classList.remove('sidebar__section--expanded')
        } else {
          for (let i = 0; i < sidebarSectionElements.length; i++) {
            sidebarSectionElements[i].classList.remove('sidebar__section--expanded')
          }

          e.currentTarget.parentNode.classList.add('sidebar__section--expanded')
        }
      })
    }
  }
})(document, window)
