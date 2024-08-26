<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
  data() {
    return {};
  },

  mounted() {
    console.log(this.$route);
  },
};
</script>

<template>
  <div class="navbar my-4 gap-3 mx-3 d-flex flex-column">
    <h1>Travel Plan</h1>

    <div v-if="(this.$route.path = '/')">
      <ul class="d-flex gap-5 list-unstyled">
        <li>
          <router-link :to="{ name: 'add' }" class="btn btn-primary">
            Add a trip
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'plan' }" class="btn btn-success">
            Plan a trip
          </router-link>
        </li>
      </ul>
    </div>

    <div v-else-if="(this.$route.name = 'add')">
      <ul class="d-flex gap-5 list-unstyled">
        <li>
          <router-link :to="{ name: 'home' }" class="btn btn-warning">
            Back Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'plan' }" class="btn btn-success">
            Plan a trip
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
