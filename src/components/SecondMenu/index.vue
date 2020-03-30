<template>
  <div class="qf-components-secondmenu">
    111
  </div>
</template>

<script>
import "./index.less";
export default {
  name: "second-menu",
  props:{
      routes:Object
  },
  data: () => ({}),
  mounted() {
      console.log(this.routes)
  },
  methods: {}
};
</script>
