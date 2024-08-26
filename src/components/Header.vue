<script>
import { RouterLink } from "vue-router";

export default {
  name: "Header",
  data() {
    return {};
  },
};
</script>

<template>
  <header>
    <div class="navbar my-4 gap-3 mx-3 d-flex flex-column">
      <h1>Travel Plan</h1>

      <div class="right-buttons">
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
    </div>
  </header>
</template>

<style></style>
