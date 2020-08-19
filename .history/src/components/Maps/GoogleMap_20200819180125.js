import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCInBkwHs8tyobAOOVAX-pqAtZK-1CDQmY',
    libraries: 'places',
    region: 'VI', // 这个地区自己定
    language: 'en' // 这个语言自己定
  },
  installComponents: true
})
