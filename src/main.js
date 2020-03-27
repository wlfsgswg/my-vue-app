import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";
Vue.use(VueRouter);
Vue.config.productionTip = false;
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
