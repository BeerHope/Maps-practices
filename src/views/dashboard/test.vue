
<template>
  <gmap-map ref="mapRef" :center="centers" :zoom="11" style="width: calc(90vw - 100px); height: calc(100vh - 100px); margin: 20px auto" @click="updateMaker">
    <gmap-marker :position="position" :draggable="true" @dragend="updateMaker"/>
  </gmap-map>
</template>
<script>
import { gmapApi } from 'vue2-google-maps'

export default {
  props: {},
  data() {
    return {
      place: null,
      position: {
        lat: 43.648509660046656,
        lng: -79.3789402652274
      }
    };
  },
  computed: {
    google: gmapApi, // 获取官方的OBject 使用官方API的时候可以用
    centers() {
      return {
        lat: this.position.lat,
        lng: this.position.lng
      }
    }
  },
  created() {
  },
  mounted() {
    this.$refs.mapRef.$mapPromise.then((map) => {
      console.log(map, 'map~~~')
      map.panTo(this.position)
    })
  },
  methods: {
    updateMaker: function(event) {
      this.position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      this.pointToAddress(this.position.lat, this.position.lng, this.pushAddress)
    },
    pushAddress(res) {
      this.$emit('mark', res, this.position)
    },
    pointToAddress(lat, lng, backcall) {
      // 实例化Geocoder服务用于解析地址
      var geocoder = new this.google.maps.Geocoder();
      // 地理反解析
      geocoder.geocode({ location: new this.google.maps.LatLng(lat, lng) }, function geoResults(results, status) {
        if (status === this.google.maps.GeocoderStatus.OK) {
          backcall(results[0].formatted_address);
        } else {
          console.log('：error ' + status);
        }
      });
    },
  }
};
</script>
<style lang="scss" scoped>
</style>
