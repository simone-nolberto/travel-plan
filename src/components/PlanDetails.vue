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
      Here you can find details of your plan for {{ plan.destination }}!
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
          <div class="block-header d-flex gap-5 align-items-center">
            <h5>Your activities</h5>

            <button class="btn btn-success">Add a stage to your plan</button>
          </div>

          <ul>
            <li v-for="stage in plan.itinerary">
              <strong>{{ stage.day }}</strong>
              <div class="table-responsive">
                <table class="table table-success">
                  <thead>
                    <tr>
                      <th scope="col">To do</th>
                      <th scope="col">When</th>
                      <th scope="col">Where</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="activity in stage.activities" class="">
                      <td scope="row">{{ activity.name }}</td>
                      <td>{{ activity.time }}</td>
                      <td>{{ activity.location }}</td>

                      <td class="d-flex gap-2">
                        <button class="btn btn-primary">
                          <i class="fa-solid fa-check"></i>
                        </button>
                        <button class="btn btn-danger">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button class="btn btn-success">Add an activity to this day</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </main>
</template>

<style></style>
