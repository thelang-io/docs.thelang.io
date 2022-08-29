'use strict';

(function (document, window) {
  const windowUrl = window.location.href
  const sidebarSectionElements = document.querySelectorAll('.sidebar__section')

  for (let i = 0; i < sidebarSectionElements.length; i++) {
    const sidebarSectionEl = sidebarSectionElements[i]
    const sidebarSectionItemLinkElements = sidebarSectionEl.querySelectorAll('.sidebar__item-link')

    for (let j = 0; j < sidebarSectionItemLinkElements.length; j++) {
      const sidebarSectionItemLinkEl = sidebarSectionItemLinkElements[j]

      if (windowUrl.startsWith(sidebarSectionItemLinkEl.href)) {
        sidebarSectionItemLinkEl.classList.add('sidebar__item-link--active')
        sidebarSectionEl.classList.add('sidebar__section--expanded')
      }
    }

    sidebarSectionEl.addEventListener('click', function (e) {
      if (e.currentTarget.classList.contains('sidebar__section--expanded')) {
        e.currentTarget.classList.remove('sidebar__section--expanded')
      } else {
        for (let i = 0; i < sidebarSectionElements.length; i++) {
          sidebarSectionElements[i].classList.remove('sidebar__section--expanded')
        }

        e.currentTarget.classList.add('sidebar__section--expanded')
      }
    })
  }
})(document, window)
