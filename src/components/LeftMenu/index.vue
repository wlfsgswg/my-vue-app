<template>
  <div class="qf-components-leftmenu">
    <div class="img">
      <img
        src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2748066284,1487867772&fm=26&gp=0.jpg"
        alt=""
      />
    </div>
    <a-menu
      theme="dark"
      mode="inline"
      :selectedKeys="[focus]"
      class="menu"
      @click="handleChangeItem"
    >
      <a-menu-item v-for="item in listMenu" :key="item.key">
        <router-link :to="`/${item.key}`">
          <span class="nav-text">{{ item.title }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
import { listMenu } from "./tyle";
import { routeMatching } from "./../../utils";
import "./index.less";
export default {
  name: "left-menu",
  data: () => ({
    listMenu: [...listMenu],
    focus: "survey"
  }),
  mounted() {
    const path = routeMatching(this.$route.path);
    listMenu.map(it => {
      if (`/${it.key}` === path) this.focus = it.key;
    });
    this.$router.beforeEach((to, from, next) => {
      const path = routeMatching(to.path);
      listMenu.map(it => {
        if (`/${it.key}` === path) this.focus = it.key;
      });
      next();
    });
  },
  methods: {
    handleChangeItem(e) {
      this.focus = e.key;
    }
  }
};
</script>
