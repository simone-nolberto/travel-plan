<script>
import axios from "axios";
import { state } from "../state";

export default {
  name: "TripDetails",
  data() {
    return {
      state,
      trip: "",
    };
  },
  methods: {
    getCurrentTrip(url) {
      axios.get(url).then((response) => {
        // console.log(response.data);
        this.trip = response.data;
      });
    },
  },
  mounted() {
    console.log(this.$route);
    this.getCurrentTrip(`${this.state.tripsApiUrl}/${this.$route.params.id}`);
  },
};
</script>

<template>
  <main class="container">
    <h2 class="text-center">
      Here you can find details about your trip to {{ trip.destination }}
    </h2>

    <main class="container my-4">
      <div class="row">
        <div class="col-12 col-md-6">
          <div>
            <h5>
              You made this trip from {{ trip.departure_date }} to {{ trip.return_date }},
              with:
              <ul>
                <li v-for="participant in trip.participants">{{ participant }}</li>
              </ul>
            </h5>
          </div>
        </div>

        <div class="col-12 col-md-6">
          <h5>Your activities</h5>

          <ul>
            <li v-for="stage in trip.itinerary">
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
