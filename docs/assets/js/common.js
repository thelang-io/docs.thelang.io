'use strict';

(function (document, window) {
  const windowUrl = window.location.href
  const headNavItemLinkElements =
    document.querySelectorAll('.header-nav__item-link')

  for (let i = 0; i < headNavItemLinkElements.length; i++) {
    const headNavItemLinkElement = headNavItemLinkElements[i]

    if (windowUrl.startsWith(headNavItemLinkElement.href)) {
      const parent = headNavItemLinkElement.parentNode
      parent.classList.add(parent.className + '--active')
    }
  }
})(document, window)
