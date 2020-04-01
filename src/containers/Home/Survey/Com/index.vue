<template>
  <div>
    <div>{{ num }}</div>
    <div class="p-t-30">
      <a-button type="dashed" @click="handleChange1(9)">Dashed</a-button>
    </div>
    <div class="p-t-30">
      <a-button type="danger" @click="handleChange2(1)">Danger</a-button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data: () => ({}),
  components: {},
  mounted() {
    this.studyforEach();
  },
  methods: {
    ...mapMutations({
      handleChange1: "add",
      handleChange2: "min"
    }),
    studyforEach() {
      const arr = [1, 2, 3];
      const brr = [];
      arr.map((a, b, c) => {
        setTimeout(() => {
          a * 10;
          {
            b, c;
          }
          brr.push(a * 10);
        }, 0);
      });
      console.log(brr);
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
