<script>
import axios from "axios";
import { state } from "../state";

export default {
  name: "TripDetails",
  data() {
    return {
      state,
      plan: "",
      newStage: "",
      error: "",
    };
  },
  methods: {
    getCurrentPlan(url) {
      axios.get(url).then((response) => {
        // console.log(response.data);
        this.plan = response.data;
      });
    },

    addStage() {
      let plan = this.plan;
      let itinerary = this.plan.itinerary;

      if (this.newStage != "") {
        const newStage = { day: this.newStage, activities: [] };

        let updatedPlan = JSON.stringify({ plan });

        // console.log(updatedPlan);

        axios.get().then((response) => {
          this.plans = [];
          console.log(this.plans);

          axios({
            method: "post",
            url: this.state.plansApiUrl,
            data: this.plans,
          })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (response) {
              console.log(response);
            });

          this.plans = response.data;
          console.log(this.plans);

          this.plans[0].itinerary.push(newStage);

          console.log(this.plans[0].itinerary);

          // axios({
          //   method: "post",
          //   url: this.state.plansApiUrl,
          //   data: this.plans,
          // })
          //   .then(function (response) {
          //     console.log(response);
          //   })
          //   .catch(function (response) {
          //     console.log(response);
          //   });
        });
      } else {
        this.error = "You must insert a date";
        alert(this.error);
      }
      this.newStage = "";
    },
  },
  mounted() {
    // console.log(this.$route);
    this.getCurrentPlan(`${this.state.plansApiUrl}/${this.$route.params.id}`);
  },
};
</script>

<template>
  <main class="container min-vh-100">
    <h2 class="text-center">
      Here you can find details of your plan for {{ plan.destination }}!
    </h2>

    <main class="container my-4">
      <div class="row">
        <div class="col-12 col-md-6">
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

        <div class="col-12 col-md-6 overflow-y-scroll">
          <h5>Your activities</h5>

          <div class="mb-3">
            <form></form>
            <label for="day" class="form-label">New stage</label>
            <input
              type="date"
              class="form-control"
              name="day"
              id="day"
              v-model="this.newStage"
              aria-describedby="helpId"
              placeholder=""
            />
            <small id="helpId" class="form-text text-muted"
              >Add a stage to your plan</small
            >

            <button
              v-on:click="addStage(this.$route.params.id)"
              type="submit"
              class="btn btn-primary"
            >
              Add
            </button>
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

                <div class="mb-3">
                  <label for="" class="form-label">To do</label>
                  <input
                    type="text"
                    class="form-control"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder=""
                  />
                  <small id="helpId" class="form-text text-muted">Add an activity</small>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </main>
</template>

<style></style>
