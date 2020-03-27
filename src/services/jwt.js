import store from '@/store'
import router from '@/router'
import lstore from 'store'

const FAKE_JWT =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoZW9ybml0aG9sb2dpc3QiLCJzdXJuYW1lIjoiQm9uZCIsIm5hbWUiOiJKYW1lcyBCb25kIiwiaWF0Ijo5NDY2ODQ4MDB9.uOP6fIf8dhgb7As5D0a4z6EjaXsudQgrKWj8PmoWFd0'
const FAKE_USERS = [
  {
    uid: 36254,
    email: 'admin@mediatec.org',
    avatar: '',
    password: 'cleanui',
  },
]

// fake fetch API service which return user data and JWT token
const fakeFetch = (url, params) => {
  switch (url) {
    case 'api/login':
      return new Promise((resolve, reject) => {
        resolve({
          headers: '',
          jwt: FAKE_JWT,
          data: FAKE_USERS[0],
        })
      })
    case 'api/currentUser':
      return new Promise((resolve, reject) => {
        resolve({
          headers: '',
          jwt: FAKE_JWT,
          data: FAKE_USERS[0],
        })
      })
    case 'api/logout':
      return new Promise((resolve, reject) => {
        resolve(true)
      })
    default:
      return null
  }
}

export default {
  install: (Vue, options) => {
    Vue.prototype.$jwtAuth = {
      login: async (email, password) => {
        const user = {
          email,
          password,
        }
        fakeFetch('api/login', { // replace this with real fetch() method
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ user }),
        })
          // .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              return false
            } else {
              lstore.set('jwt.token', data.jwt)
              loadCurrentAccount()
            }
          })
      },
      logout: async () => {
        const jwt = lstore.get('jwt.token')
        fakeFetch('api/logout', { // replace this with real fetch() method
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({ jwt }),
        })
          // .then(resp => resp.json())
          .then(data => {
            if (data.message) {
              return false
            } else {
              lstore.remove('jwt.token')
              router.push('/auth/login')
              store.commit('UPDATE_USER', { user: null })
              return true
            }
          })
      },
    }

    const loadCurrentAccount = () => {
      const jwt = lstore.get('jwt.token')
      if (!jwt) {
        return
      }
      fakeFetch('api/currentUser', { // replace this with real fetch() method
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ jwt }),
      })
        // .then(resp => resp.json())
        .then(data => {
          if (data.message) {
            return false
          } else {
            const _user = data.data ? {
              ...data.data,
              role: 'admin',
            } : data.data
            store.commit('UPDATE_USER', { user: _user })
          }
        })
    }
    loadCurrentAccount()
  },
}
