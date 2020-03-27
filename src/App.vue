<template>
  <div class="app">
    <router-view> </router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  mounted(){
      console.log(window.location)
  }
};
</script>
