import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./index";

Vue.use(VueRouter);
// router
const router = new VueRouter({
  // 如果不设置会优先采用锚点路由，采用此方式，需要后台配nginx把所有页面指向index.html
  // mode: "history",
  routes // (缩写) 相当于 routes: routes
});
// 路由守卫
let routerArr = [];
router.beforeEach((to, from, next) => {
  routerArr.push(to.path);
  // console.log(routerArr);
  next();
});

export { router };
