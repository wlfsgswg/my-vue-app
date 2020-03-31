import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./routes/routes";
import "./less/common.less";
// 有关antdUi组件
import "ant-design-vue/dist/antd.css";
import Antd from "ant-design-vue";
Vue.use(Antd);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
