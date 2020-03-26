import Vue from 'vue'
import Vuex from 'vuex'
import store from 'store'
import AntDesignDarkTheme from '@/components/kit-vendors/antd/themes/themeDark'
import AntDesignLightTheme from '@/components/kit-vendors/antd/themes/themeLight'

Vue.use(Vuex)

const STORED_SETTINGS = storedSettings => {
  const settings = {}
  Object.keys(storedSettings).forEach(key => {
    const item = store.get(`app.settings.${key}`)
    settings[key] = typeof item !== 'undefined' ? item : storedSettings[key]
  })
  return settings
}

export default {
  state: {
    ...STORED_SETTINGS({
      authProvider: 'firebase', // firebase, jwt
      logo: 'Clean UI Pro',
      locale: 'en-US',
      isSidebarOpen: false,
      isSupportChatOpen: false,
      isMobileView: false,
      isMobileMenuOpen: false,
      isMenuCollapsed: false,
      menuLayoutType: 'left', // left, top, nomenu
      routerAnimation: 'slide-fadein-up', // none, slide-fadein-up, slide-fadein-right, fadein, zoom-fadein
      menuColor: 'white', // white, dark, gray
      theme: 'light', // light, dark
      authPagesColor: 'white', // white, gray, image
      primaryColor: '#4b7cf3',
      leftMenuWidth: 256,
      isMenuUnfixed: false,
      isMenuShadow: false,
      isTopbarFixed: false,
      isGrayTopbar: false,
      isContentMaxWidth: false,
      isAppMaxWidth: false,
      isGrayBackground: false,
      isCardShadow: true,
      isSquaredBorders: false,
      isBorderless: false,
    }),
  },
  mutations: {
    CHANGE_SETTING(state, payload) {
      window.localStorage.setItem(`app.settings.${payload.setting}`, payload.value)
      state[payload.setting] = payload.value
    },
    SETUP_URL_SETTINGS(state, payload) {
      let queryParams = payload
      let keys = false
      if (payload.redirect) {
        const str = payload.redirect
        const subs = str.substring(str.indexOf('?') + 1)
        if (str.indexOf('?') >= 0) {
          queryParams = JSON.parse('{"' + decodeURI(subs).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}')
        }
      }
      delete queryParams.redirect
      keys = Object.keys(queryParams)
      if (keys.length) {
        keys.forEach(key => {
          let value
          switch (queryParams[key]) {
            case 'false':
              value = false
              break
            case 'true':
              value = true
              break
            default:
              value = queryParams[key]
              break
          }
          if (key in state) { state[key] = value }
        })
      }
    },
    SET_PRIMARY_COLOR(state, payload) {
      const { color } = payload
      const addStyles = () => {
        const styleElement = document.querySelector('#primaryColor')
        if (styleElement) {
          styleElement.remove()
        }
        const body = document.querySelector('body')
        const styleEl = document.createElement('style')
        const css = document.createTextNode(`:root { --kit-color-primary: ${color};}`)
        styleEl.setAttribute('id', 'primaryColor')
        styleEl.appendChild(css)
        body.appendChild(styleEl)
      }
      addStyles()
      state.primaryColor = color
      store.set('app.settings.primaryColor', color)
    },
    TOGGLE_THEME(state) {
      const currentTheme = state.theme
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light'
      const toggleTheme = () => {
        if (nextTheme === 'light') {
          document.querySelector('body').classList.remove('kit__dark')
          window.less.modifyVars(AntDesignLightTheme)
        } else {
          document.querySelector('body').classList.add('kit__dark')
          window.less.modifyVars(AntDesignDarkTheme)
          state.menuColor = 'dark'
        }
      }
      toggleTheme()
      state.theme = nextTheme
      store.set('app.settings.theme', nextTheme)
    },
    INIT_THEME(state) {
      // set primary color on app load
      const primaryColor = () => {
        const color = store.get('app.settings.primaryColor')
        if (color) {
          const addStyles = () => {
            const styleElement = document.querySelector('#primaryColor')
            if (styleElement) {
              styleElement.remove()
            }
            const body = document.querySelector('body')
            const styleEl = document.createElement('style')
            const css = document.createTextNode(`:root { --kit-color-primary: ${color};}`)
            styleEl.setAttribute('id', 'primaryColor')
            styleEl.appendChild(css)
            body.appendChild(styleEl)
          }
          addStyles()
          state.primaryColor = color
        }
      }
      primaryColor()

      // set primary color on app load
      const initTheme = () => {
        const theme = store.get('app.settings.theme')
        if (theme === 'dark') {
          document.querySelector('body').classList.add('kit__dark')
          global.window.less.modifyVars(AntDesignDarkTheme)
        } else {
          global.window.less.modifyVars(AntDesignLightTheme)
        }
      }
      initTheme()
    },
  },
  actions: {},
  getters: {
    state: state => state,
  },
}
