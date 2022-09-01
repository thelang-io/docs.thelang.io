'use strict';

(function (document, window) {
  const windowUrl = window.location.href
  const headerNavItemLinkElements = document.querySelectorAll('.header-nav__item-link')

  for (let i = 0; i < headerNavItemLinkElements.length; i++) {
    const headerNavItemLinkEl = headerNavItemLinkElements[i]

    if (windowUrl.startsWith(headerNavItemLinkEl.href)) {
      const headerNavItemEl = headerNavItemLinkEl.parentNode
      headerNavItemEl.classList.add(headerNavItemEl.className + '--active')
    }
  }

  const headerNavEl = document.querySelector('.header-nav')
  const headerMobileEl = document.getElementById('headerMobile')
  const headerMobileCloseEl = document.getElementById('headerMobileClose')
  const headerToggleEl = document.getElementById('headerToggle')

  if (headerNavEl !== null && headerMobileEl !== null && headerMobileCloseEl !== null && headerToggleEl !== null) {
    headerToggleEl.addEventListener('click', function () {
      headerMobileEl.style.display = 'flex'
      document.body.style.overflow = 'hidden'
    })

    headerMobileCloseEl.addEventListener('click', function () {
      headerMobileEl.style.display = ''
      document.body.style.overflow = ''
    })
  }
})(document, window)
