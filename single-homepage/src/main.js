const THEMES = {
  LIGHT: {
    SRC_THEME: {
      SRC: './src/svg/alarado-icon-homepage.svg'
    },
    SRC_BTN : {
      MOON: './src/svg/Moon_fill_light.svg',
      SUN: './src/svg/Sun_fill.svg'
    },
    SRC_BTN_MENU: {
      MENU: './src/svg/menu_icon.svg',
      CLOSE: './src/svg/close_icon.svg'
    }
  },
  DARK: {
    SRC_THEME: {
      SRC: './src/svg/alarado-icon-homepage-dark.svg'
    },
    SRC_BTN: {
      MOON: './src/svg/Moon_fill.svg',
      SUN: './src/svg/Sun_fill_dark.svg'
    },
    SRC_BTN_MENU: {
      MENU: './src/svg/menu_icon_dark.svg',
      CLOSE: './src/svg/close_icon_dark.svg'
    }
  }
}

const CURRENT_THEME = {
  SRC_THEME: {
    SRC: ''
  },
  SRC_BTN: {
    MOON: '',
    SUN: ''
  },
  SRC_BTN_MENU: {
    MENU: '',
    CLOSE: ''
  }
}

const DOM = {
  $html: document.querySelector('html'),
  $img: document.querySelector('.alarado-icon'),
  $menu: document.querySelector('.show-menu'),
  $navbar: document.querySelector('.barra-nav'),
  $menuIcon: document.querySelector('.show-menu img'),
  DESKTOP: {
    $switchTheme: document.querySelector('.theme-button'),
    $moonIcon: document.querySelector('.theme-button #moon'),
    $sunIcon: document.querySelector('.theme-button #sun')
  },
  MOBILE: {
    $switchTheme: document.querySelector('.theme-button-mob'),
    $moonIcon: document.querySelector('.theme-button-mob #moon-mob'),
    $sunIcon: document.querySelector('.theme-button-mob #sun-mob')
  }
}

//  EVENT CHANGE THEME
const theme = new Event('themechanged')

const setDomTheme = () => {
  const { SRC_THEME, SRC_BTN } = CURRENT_THEME
  const { DESKTOP, MOBILE } = DOM

  DOM.$img.setAttribute('src', SRC_THEME.SRC)

  DESKTOP.$moonIcon.setAttribute('src', SRC_BTN.MOON)
  DESKTOP.$sunIcon.setAttribute('src', SRC_BTN.SUN)

  MOBILE.$moonIcon.setAttribute('src', SRC_BTN.MOON)
  MOBILE.$sunIcon.setAttribute('src', SRC_BTN.SUN)

}

const getTheme = () => {
  return DOM.$html.classList.contains('dark')
}

const setTheme = (isDark) => {
  const { DARK, LIGHT } = THEMES
  Object.assign(CURRENT_THEME, isDark ? DARK : LIGHT)
  return CURRENT_THEME
}

const setButton = (justPosition) => {
  const { $navbar, $menuIcon } = DOM
  const { SRC_BTN_MENU } = CURRENT_THEME

  console.log($navbar.style.right)
  if ($navbar.style.right === '-100%') {
    $menuIcon.setAttribute('src', SRC_BTN_MENU.CLOSE)
    if (justPosition) {
      $navbar.style.right = 0
    }
  } else if ($navbar.style.right === '0px'){
    $menuIcon.setAttribute('src', SRC_BTN_MENU.MENU)
    if (justPosition) {
      $navbar.style.right = '-100%'
    }
  }
}

//  CARGA EL DOCUMENTO Y SETEA EL TEMA
document.addEventListener('DOMContentLoaded', () => {
  DOM.$navbar.style.right = '-100%'
  setDomTheme(setTheme(getTheme()))
})


DOM.DESKTOP.$switchTheme.addEventListener('click', () => {
  DOM.$html.classList.toggle('dark')
  window.dispatchEvent(theme)
})

DOM.MOBILE.$switchTheme.addEventListener('click', () => {
  DOM.$html.classList.toggle('dark')
  window.dispatchEvent(theme)
})

DOM.$menu.addEventListener('click', () => {
  setButton(true)
})

window.addEventListener('themechanged', () => {
  setDomTheme(setTheme(getTheme()))
  const { SRC_BTN_MENU } = CURRENT_THEME
  if (window.getComputedStyle(DOM.$navbar).right === '0px') {
    DOM.$menuIcon.setAttribute('src', SRC_BTN_MENU.CLOSE)
  }
})
