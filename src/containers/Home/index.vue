<template>
  <div>
    <div>
      <router-link to="/survey">概况</router-link>
    </div>
    <div>
      <router-link to="/goods">商品</router-link>
    </div>
    <div>
      <router-link to="/order">订单</router-link>
    </div>
    <div>
      <router-link to="/custom">客户</router-link>
    </div>
    <div>
      <router-link to="/market">促销</router-link>
    </div>
    <div>
      <router-link to="/asset">资产</router-link>
    </div>
    <div>
      <router-link to="/setting">设置</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "home",
  data: () => ({}),
  mounted() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>
