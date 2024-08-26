<script>
import axios from "axios";
import { state } from "../state";

export default {
  name: "TripDetails",
  data() {
    return {
      state,
      plan: "",
    };
  },
  methods: {
    getCurrentPlan(url) {
      axios.get(url).then((response) => {
        // console.log(response.data);
        this.plan = response.data;
      });
    },
  },
  mounted() {
    console.log(this.$route);
    this.getCurrentPlan(`${this.state.plansApiUrl}/${this.$route.params.id}`);
  },
};
</script>

<template>
  <main class="container">
    <h2 class="text-center">
      Here you can find details about your plan to visit {{ plan.destination }}
    </h2>

    <main class="container my-4">
      <div class="row">
        <div class="col">
          <div>
            <h5>
              The trip is set from {{ plan.departure_date }} to {{ plan.return_date }},
              with:
              <ul>
                <li v-for="participant in plan.participants">{{ participant }}</li>
              </ul>
            </h5>
          </div>
        </div>

        <div class="col">
          <h5>Your activities</h5>

          <ul>
            <li v-for="stage in plan.itinerary">
              <strong>{{ stage.day }}</strong>
              <ul>
                <li v-for="activity in stage.activities">
                  {{ activity.name }}, at {{ activity.time }}
                </li>
              </ul>
            </li>
          </ul>

          <h5>Take a look at what you've done on the map</h5>
        </div>
      </div>
    </main>
  </main>
</template>

<style></style>
