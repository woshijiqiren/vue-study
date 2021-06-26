<template>
  <div class="main">
    <h1>老八最爱</h1>
    <h2>老八菜单</h2>
    <el-tabs type="border-card">
      <el-tab-pane label="样式">
        <div
          v-for="(item,index) in loadpages"
          :key="index"
          @click="toPage(item)"
          :style="'background:'+colors[getRandom()]"
          class="meun"
        >{{item.name}}</div>
      </el-tab-pane>
      <el-tab-pane label="逻辑">
        <div
          v-for="(item,index) in loadjs"
          :key="'js'+index"
          @click="toPage(item)"
          :style="'background:'+colors[getRandom()]"
          class="meun"
        >{{item.name}}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
//颜色数据
import { colors } from '@/libs/color.js'
//逻辑菜单静态数据
import { loadjs } from '@/libs/loadjs.js'
//页面菜单静态数据
import { loadpages } from '@/libs/loadpages.js'
export default {
  name: 'main',
  data() {
    return {
      loadpages: loadpages,
      loadjs: loadjs,
      colors: colors,
    }
  },
  methods: {
    //跳转相应页面
    toPage(item) {
      this.$router.push({ name: item.path })
    },
    //随机颜色
    getRandom() {
      return parseInt(Math.random() * this.colors.length)
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
}
.meun {
  width: 100%;
  height: 36px;
  line-height: 36px;
  font-size: 24px;
}
</style>
