import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
import "./less/common.less";

// 有关antdUi组件
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
Vue.use(Antd);

Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
