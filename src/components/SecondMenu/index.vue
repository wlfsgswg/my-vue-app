<template>
  <div class="qf-components-secondmenu">
    <a-menu
      mode="inline"
      :openKeys="openKeys"
      @openChange="onOpenChange"
      class="menu"
    >
      <template v-for="it in routes.item">
        <a-menu-item v-if="!it.item || it.item.length === 0" :key="it.name">
          {{ it.name }}
        </a-menu-item>
        <a-sub-menu
          v-if="it.item && it.item.length && it.item.length !== 0"
          :key="it.name"
        >
          <span slot="title"> {{ it.name }}</span>
          <a-menu-item v-for="item in it.item" :key="item.name">{{
            item.name
          }}</a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>

<script>
import "./index.less";
export default {
  name: "second-menu",
  props: {
    routes: Object
  },
  data: () => ({
    rootSubmenuKeys: [],
    openKeys: []
  }),
  mounted() {
    let arr = [];
    this.routes.item.map(it => {
      if (it.item && it.item.length) arr.push(it.name);
    });
    this.openKeys = arr;
    this.rootSubmenuKeys = arr;
  },
  methods: {
    onOpenChange(openKeys) {
        console.log(openKeys)
      const latestOpenKey = openKeys.find(
        key => this.openKeys.indexOf(key) === -1
      );
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.openKeys = openKeys;
      } 
      else {
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      }
    }
  }
};
</script>
