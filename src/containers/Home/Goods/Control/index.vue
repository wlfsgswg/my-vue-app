<template>
  <div :style="{ color: 'red', fontSize: '18px' }">{{ num }} 哈哈</div>
</template>

<script>
import "./index.less";
export default {
  data: () => ({}),
  components: {},
  mounted() {},
  methods: {},
  watch: {},
  computed: {
    num() {
      return this.$store.state.count;
    }
  }
};
// 样式直接：style="{}"双引号里面直接放style对象即可
</script>
