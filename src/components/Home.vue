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
    // this.state.getTrips(this.state.tripsApiUrl);
    // this.state.getPlans(this.state.plansApiUrl);
  },
};
</script>

<template>
  <main class="container">
    <div class="row">
      <div class="col-12 col-md-6">
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
                <td>{{ trip.departure_date }}/{{ trip.return_date }}</td>
                <td>
                  <router-link
                    :to="{
                      name: 'trip_details',
                      params: { id: trip.id },
                    }"
                    class="btn btn-primary"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-12 col-md-6">
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
                <td>{{ plan.departure_date }}/{{ plan.return_date }}</td>
                <td>
                  <router-link
                    :to="{
                      name: 'plan_details',
                      params: { id: plan.id },
                    }"
                    class="btn btn-success"
                  >
                    <i class="fa fa-eye" aria-hidden="true"></i>
                  </router-link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>
