<template>
  <div id="example-1" style="margin: 50px">
    <el-button class="btn" type="primary" v-if="state">On</el-button>
    <el-button class="btn" type="primary" v-if="!state">On</el-button>
    <transition name="list" mode="out-in">
      <el-button class="btn" type="primary" v-if="state" key="on" @click="state = !state">On</el-button>
      <el-button class="btn" type="primary" v-else key="off" @click="state = !state">Off</el-button>
    </transition>
</div>
</template>

<script>
import ExpandAll from '@/components/ExpandAll'

export default {
  computed: {

  },
  components: {
    ExpandAll
  },
  data() {
    return {
      show: true,
      state: true
    }
  }
}
</script>

<style lang="scss">
#example-1{
  .el-button+.el-button{
    margin: 0;
  }
  position: relative;
  .btn{
    display: block;
    position: absolute !important;
    left: 0;
  }
}
.list-leave-active {
  transition: all 1s;
}
.list-enter{
  opacity: 0;
}
.list-enter-to{
  // position: absolute;
}
.list-leave-to{
  opacity: 0;
  transform: translateX(30px) translateY(-40px);
}
</style>
