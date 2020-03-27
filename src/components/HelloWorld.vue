<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <div>{{name}}</div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data: () => ({
    name: "w"
  })
};
</script>
