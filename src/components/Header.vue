<script>
import { RouterLink } from "vue-router";
import { state } from "../state";

export default {
  name: "Header",
  data() {
    return {
      state,
    };
  },

  mounted() {
    // console.log(this.$route);
    this.state.getTrips(this.state.tripsApiUrl);
    this.state.getPlans(this.state.plansApiUrl);
  },
};
</script>

<template>
  <div class="navbar my-4 gap-3 mx-3 d-flex flex-column">
    <h1>Travel Plan</h1>

    <div>
      <ul class="d-flex gap-5 list-unstyled">
        <li v-show="this.$route.name != 'add'">
          <router-link :to="{ name: 'add' }" class="btn btn-primary">
            Add a trip
          </router-link>
        </li>

        <li v-if="this.$route.path != '/'">
          <router-link :to="{ name: 'home' }" class="btn btn-warning">
            Back home
          </router-link>
        </li>

        <li v-show="this.$route.name != 'plan'">
          <router-link :to="{ name: 'plan' }" class="btn btn-success">
            Plan a trip
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
