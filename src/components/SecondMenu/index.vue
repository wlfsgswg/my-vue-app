<template>
  <div class="qf-components-secondmenu">
    <div class="clearfix">
      <div v-if="routes.item">
        <div class="l-left menu-left">
          <div class="l-left-title">{{ routes.name }}</div>
          <a-menu
            mode="inline"
            :openKeys="openKeys"
            :selectedKeys="focusKey"
            @openChange="onOpenChange"
            @click="handleChangeItem"
            class="menu"
          >
            <template v-for="it in routes.item">
              <a-menu-item
                v-if="!it.item || it.item.length === 0"
                :key="it.name"
              >
                <router-link :to="`/${it.key}`">
                  {{ it.name }}
                </router-link>
              </a-menu-item>

              <a-sub-menu
                v-if="it.item && it.item.length && it.item.length !== 0"
                :key="it.name"
              >
                <span slot="title"> {{ it.name }}</span>
                <a-menu-item v-for="item in it.item" :key="item.name">
                  <router-link :to="`/${item.key}`">
                    {{ item.name }}
                  </router-link>
                </a-menu-item>
              </a-sub-menu>
            </template>
          </a-menu>
        </div>
      </div>
      <div
        class="second-content l-left"
        :style="!this.openKeys.length && 'width:100%'"
      >
        <div class="second-content-header clearfix">
          <div class="l-left">{{focusKey[0]}}</div>
          <div class="r-right clearfix">
            <div class="l-left p-r-10">
              <div class="count-img"></div>
            </div>
            <div class="l-left">测试账号123</div>
          </div>
        </div>
        <div class="second-content-container p-t-10 p-l-10 p-r-10 ">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "./index.less";
import { routeMatching } from "./../../utils";
export default {
  name: "second-menu",
  props: {
    routes: Object
  },
  data: () => ({
    openKeys:[], //收缩栏展开项
    focusKey: []
  }),
  mounted() {
    const path = routeMatching(this.$route.path, 2);
    let arr = [];
    this.routes.item &&
      this.routes.item.map(it => {
        //把所有带子集的menu展开
        if (it.item && it.item.length) arr.push(it.name);
        //比对路由和哪个子集匹配，如果匹配设置选中focusKey

        // 只是一级路由的情况
        if (!it.item && path === `/${it.key}`) this.focusKey = [it.name];
        // 二级路由的情况
        if (it.item && it.item.length) {
          it.item.map(items => {
            if (path === `/${items.key}`) this.focusKey = [items.name];
          });
        }
        // 无论是一级路由还是二级路由，匹配不上时选择第一个路由进行容错
        // this.routes.item && this.routes.item[0].key
        const firstRoute =
          this.routes.item && this.routes.item[0].key
            ? this.routes.item[0].name
            : this.routes.item[0].item[0].name;
        if (!this.focusKey.length) this.focusKey = [firstRoute];
      });
    this.openKeys = arr;
  },
  methods: {
    onOpenChange(e) {
      this.openKeys = e;
    },
    handleChangeItem(e) {
      this.focusKey = [e.key];
    }
  }
};
</script>
