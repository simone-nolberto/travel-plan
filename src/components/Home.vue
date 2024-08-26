<script>
import axios from "axios";
import { state } from "../state";

export default {
  name: "Home",
  data() {
    return {
      state,
    };
  },
  mounted() {
    this.state.getTrips(this.state.tripsApiUrl);
    this.state.getPlans(this.state.plansApiUrl);
  },
};
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col">
        <div>
          <div class="mb-3">
            <label for="" class="form-label">Trip or vacation</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="New York"
            />
            <small id="helpId" class="form-text text-muted"
              >Type here the trip you want to find</small
            >
          </div>
        </div>

        <div class="table-responsive rounded">
          <table class="table table-primary">
            <thead>
              <tr>
                <th scope="col">Where have you been?</th>
                <th scope="col">When?</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="trip in state.past_trips" class="">
                <td scope="row">{{ trip.destination }}</td>
                <td>from {{ trip.departure_date }} to {{ trip.return_date }}</td>
                <td>Open <i class="fa fa-eye" aria-hidden="true"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col">
        <div>
          <div class="mb-3">
            <label for="" class="form-label">Plan</label>
            <input
              type="text"
              class="form-control"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="New York"
            />
            <small id="helpId" class="form-text text-muted"
              >Type here the plan you want to find</small
            >
          </div>
        </div>

        <div class="table-responsive rounded">
          <table class="table table-success">
            <thead>
              <tr>
                <th scope="col">Where would you like to go?</th>
                <th scope="col">When?</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="plan in state.plans" class="">
                <td scope="row">{{ plan.destination }}</td>
                <td>from {{ plan.departure_date }} to {{ plan.return_date }}</td>
                <td>Open <i class="fa fa-eye" aria-hidden="true"></i></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
