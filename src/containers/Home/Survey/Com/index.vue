<template>
  <div>
    <div>{{ num }}</div>
    <div class="p-t-30">
      <a-button type="dashed" @click="handleChange1">Dashed</a-button>
    </div>
    <div class="p-t-30">
      <a-button type="danger" @click="handleChange2">Danger</a-button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  components: {},
  mounted() {},
  methods: {
    handleChange1() {
      this.$store.commit("add",9);
    },
    handleChange2() {
      this.$store.commit("min",1);
    }
  },
  watch: {},
  computed: {
    num() {
      return this.$store.state.count;
    }
  }
};
</script>
