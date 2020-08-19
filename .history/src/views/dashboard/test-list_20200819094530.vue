<template>
  <div class="list-container">
    <transition-group>
      <el-card class="list-item" v-for="item in list" :key="item.id">
        {{item.name}}
      </el-card>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          id: 1,
          name: '大梦想家',
        },
        {
          id: 2,
          name: '大梦想家',
        },
        {
          id: 3,
          name: '大梦想家',
        },
        {
          id: 4,
          name: '大梦想家',
        },
        {
          id: 5,
          name: '大梦想家',
        },
        {
          id: 6,
          name: '大梦想家',
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.list-container{
  padding:0 10px;
}
.list-item{
  width: 400px;
  height: 300px;
  margin: 10px;
  // float: left;
}
</style>
