import Vue from 'vue'
import axios, { AxiosInstance } from 'axios'
import UniversalSocialauth from 'universal-social-auth'

Vue.config.productionTip = false

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosInstance
    $Oauth: UniversalSocialauth
  }
}

const options = {
  providers: {
    // apple: {
    //   nonce: '**************',
    //   state: '**************',
    //   clientId: '**************',
    //   redirectUri: 'https://myapp.com/auth/github/callback'
    // },
    github: {
      clientId: '78bfc07e1f25b5e22c26',
      redirectUri: 'https://diadal.com.ng/auth/github/callback',
    },
    twitch: {
      clientId: 'qi4vbk30uuvuqigcd5ioq3egxf67m8',
      redirectUri: 'https://diadal.com.ng/auth/twitch/callback',
    },
    // google: {
    //   clientId: '***************',
    //   redirectUri: 'https://myapp.com/auth/google/callback'
    // },
    // facebook: {
    //   clientId: '************',
    //   redirectUri: 'https://myapp.com/auth/facebook/callback'
    // },
    // twitter: {
    //   url: 'https://myapp.com/auth/twitter',
    //   clientId: '********',
    //   redirectUri: 'https://myapp.com/auth/twitter/callback'
    // }
  },
}

const Oauth = new UniversalSocialauth(axios, options)

Vue.prototype.$axios = axios
Vue.prototype.$Oauth = Oauth

// new Vue({
//   render: h => h(App),
// }).$mount('#app')
