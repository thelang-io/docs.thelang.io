'use strict';

(function (document, window) {
  const windowUrl = window.location.href
  const headerNavItemLinkElements =
    document.querySelectorAll('.header-nav__item-link')

  for (let i = 0; i < headerNavItemLinkElements.length; i++) {
    const headerNavItemLinkElement = headerNavItemLinkElements[i]

    if (windowUrl.startsWith(headerNavItemLinkElement.href)) {
      const parent = headerNavItemLinkElement.parentNode
      parent.classList.add(parent.className + '--active')
    }
  }

  const headerNavEl = document.querySelector('.header-nav')
  const headerMobileEl = document.getElementById('headerMobile')
  const headerMobileBodyEl = document.getElementById('headerMobileBody')
  const headerMobileCloseEl = document.getElementById('headerMobileClose')
  const headerToggleEl = document.getElementById('headerToggle')

  if (
    headerNavEl !== null &&
    headerMobileEl !== null &&
    headerMobileBodyEl !== null &&
    headerMobileCloseEl !== null &&
    headerToggleEl !== null
  ) {
    headerToggleEl.addEventListener('click', function () {
      headerMobileEl.style.display = 'flex'
      document.body.style.overflow = 'hidden'
    })

    headerMobileCloseEl.addEventListener('click', function () {
      headerMobileEl.style.display = ''
      document.body.style.overflow = ''
    })

    headerMobileBodyEl.appendChild(headerNavEl.cloneNode(true))
  }
})(document, window)
