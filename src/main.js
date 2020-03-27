import Vue from "vue";
import { routes } from "./routes";

Vue.config.productionTip = false;

new Vue({
  data: {
    currentRoute: window.location.pathname
  },
  mounted() {
    console.log(window.location.pathname, 111);
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute];
    }
  },
  render(h) {
    return h(this.ViewComponent);
  }
}).$mount("#app");
