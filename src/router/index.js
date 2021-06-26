import Vue from 'vue'
import Router from 'vue-router'
import index from "./modules/index.js"
Vue.use(Router)

export default new Router({
  routes: [
    ...index
  ]
})
