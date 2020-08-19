import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    // key: 'AIzaSyBLha8IKkvohyn382gBXEVUhL9fODM5h-Q', 无水印
    key: 'AIzaSyCInBkwHs8tyobAOOVAX-pqAtZK-1CDQmY', // 带水印
    libraries: 'places',
    region: 'VI', // 这个地区自己定
    language: 'en' // 这个语言自己定
  },
  installComponents: true
})
