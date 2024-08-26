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
              <div class="table-responsive">
                <table class="table table-primary">
                  <thead>
                    <tr>
                      <th scope="col">To do</th>
                      <th scope="col">When</th>
                      <th scope="col">Where</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="activity in stage.activities" class="">
                      <td scope="row">{{ activity.name }}</td>
                      <td>{{ activity.time }}</td>
                      <td>{{ activity.location }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </main>
</template>

<style></style>
