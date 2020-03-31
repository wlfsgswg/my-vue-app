<template>
  <div>
    {{ num }}
  </div>
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
</script>
