<template>
  <div>
    <div>order</div>
    <div>
      <SecondMenu :routes=order />
    </div>
  </div>
</template>

<script>
import { order } from "./../../../routes/pageroutes";
import { SecondMenu } from "./../../../components";
export default {
  data: () => ({
    order
  }),
  components: {
    SecondMenu
  },
  mounted() {},
  methods: {},
  watch: {},
  computed: {}
};
</script>
