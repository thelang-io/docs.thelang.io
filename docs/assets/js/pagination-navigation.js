'use strict';

(function (document, window) {
  const windowUrl = window.location.href
  const sidebarEl = document.querySelector('.sidebar')
  const pageLayoutContentEl = document.querySelector('.page-layout__content')

  if (sidebarEl === null || pageLayoutContentEl === null) {
    return
  }

  function isNil (test) {
    return typeof test === 'undefined' || test === null
  }

  function toTitleCase (str) {
    return str.replace(/\w\S*/g, (s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
  }

  function paginationNavigation (prevHref, prevTitle, nextHref, nextTitle) {
    const prevHTML = isNil(prevHref) ? '' : (
      '<a class="pagination-navigation__button pagination-navigation__button--left" href="' + prevHref + '">' +
      '<i class="pagination-navigation__arrow fa-solid fa-caret-left"></i>' +
      '<div class="pagination-navigation__body">' +
      '<div class="pagination-navigation__headline">Previous</div>' +
      '<div class="pagination-navigation__subtitle">' + prevTitle + '</div>' +
      '</div>' +
      '</a>'
    )

    const nextHTML = isNil(nextHref) ? '' : (
      '<a class="pagination-navigation__button pagination-navigation__button--right" href="' + nextHref + '">' +
      '<div class="pagination-navigation__body">' +
      '<div class="pagination-navigation__headline">Next</div>' +
      '<div class="pagination-navigation__subtitle">' + nextTitle + '</div>' +
      '</div>' +
      '<i class="pagination-navigation__arrow fa-solid fa-caret-right"></i>' +
      '</a>'
    )

    const wrapperEl = document.createElement('div')
    wrapperEl.innerHTML = '<div class="pagination-navigation">' + prevHTML + nextHTML + '</div>'
    pageLayoutContentEl.appendChild(wrapperEl.children[0])
  }

  const sidebarItemLinkElements = document.querySelectorAll('.sidebar__item-link')

  for (let i = 0; i < sidebarItemLinkElements.length; i++) {
    const sidebarItemLinkEl = sidebarItemLinkElements[i]

    if (windowUrl.startsWith(sidebarItemLinkEl.href)) {
      const sidebarItemEl = sidebarItemLinkEl.parentNode
      let prevHref = null
      let prevTitle = null
      let nextHref = null
      let nextTitle = null

      if (sidebarItemEl.previousElementSibling === null) {
        const sectionItemsEl = sidebarItemEl.parentNode

        if (sectionItemsEl !== null) {
          const sectionEl = sectionItemsEl.parentNode

          if (sectionEl !== null) {
            const sectionHeadlineEl = sectionEl.querySelector('.sidebar__section-headline')

            if (sectionHeadlineEl !== null) {
              prevHref = sectionEl.getAttribute('data-href')
              prevTitle = toTitleCase(sectionHeadlineEl.innerText)
            }
          }
        }
      } else {
        const prevItemLinkEl = sidebarItemEl.previousElementSibling.querySelector('.sidebar__item-link')

        prevHref = prevItemLinkEl.href
        prevTitle = prevItemLinkEl.innerText
      }

      if (sidebarItemEl.nextElementSibling === null) {
        const sectionItemsEl = sidebarItemEl.parentNode

        if (sectionItemsEl !== null) {
          const sectionEl = sectionItemsEl.parentNode

          if (sectionEl !== null && sectionEl.nextElementSibling !== null) {
            const nextSectionEl = sectionEl.nextElementSibling
            const nextSectionHeadlineEl = nextSectionEl.querySelector('.sidebar__section-headline')

            if (nextSectionHeadlineEl !== null) {
              nextHref = nextSectionEl.getAttribute('data-href')
              nextTitle = toTitleCase(nextSectionHeadlineEl.innerText)
            }
          }
        }
      } else {
        const nextItemLinkEl = sidebarItemEl.nextElementSibling.querySelector('.sidebar__item-link')

        nextHref = nextItemLinkEl.href
        nextTitle = nextItemLinkEl.innerText
      }

      if (prevHref !== null || nextHref !== null) {
        paginationNavigation(prevHref, prevTitle, nextHref, nextTitle)
      }

      break
    }
  }
})(document, window)
