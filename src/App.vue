<script>
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";

export default {
  name: "Travel Plan",
  data() {
    return {};
  },
  components: {
    Header,
  },
};
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style></style>
