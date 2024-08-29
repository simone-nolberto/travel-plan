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
      newActivityName: "",
      newActivityTime: "",
      newActivityLocation: "",
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
      // let plan = this.plan;

      // console.log(this.plan.itinerary.length);

      if (this.newStage != "") {
        const newStageToAdd = {
          stage_id: this.plan.itinerary.length + 1,
          day: this.newStage,
          activities: [],
        };
        this.plan.itinerary.push(newStageToAdd);
        console.log(this.plan);

        axios({
          method: "PUT",
          url: `${this.state.plansApiUrl}/${this.$route.params.id}`,
          data: this.plan,
          content_type: JSON,
        })
          .then(function (response) {
            console.log(response, url);
          })
          .catch(function (response) {
            console.log(response);
          });
      } else {
        this.error = "You must insert a date";
        alert(this.error);
      }
      this.newStage = "";
    },

    addActivity(stage) {
      let stageToUpdate = stage;

      if (
        this.newActivityName != "" &&
        this.newActivityTime != "" &&
        this.newActivityLocation != ""
      ) {
        const newActivityToAdd = {
          activity_id: this.plan.itinerary.length + 1,
          name: this.newActivityName,
          time: this.newActivityTime,
          location: this.newActivityLocation,
        };

        console.log(stageToUpdate);

        console.log(newActivityToAdd);

        // stage.push(newActivityToAdd);

        // console.log(stage);

        // this.plan.itinerary[stage.stage_id].push(newActivityToAdd);
        // console.log(this.plan);

        // axios({
        //   method: "PUT",
        //   url: `${this.state.plansApiUrl}/${this.$route.params.id}`,
        //   data: this.newActivityToAdd,
        //   content_type: JSON,
        // })
        //   .then(function (response) {
        //     console.log(response, url);
        //   })
        //   .catch(function (response) {
        //     console.log(response);
        //   });
      } else {
        this.error = "You must specify name, location and time of the new activity";
        alert(this.error);
      }
      // this.newActivityName = "";
      // this.newActivityTime = "";
      // this.newActivityLocation = "";
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

          <form>
            <div class="mb-3">
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
          </form>

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
                  <label for="activity_name" class="form-label">To do</label>
                  <input
                    type="text"
                    class="form-control"
                    name="activity_name"
                    id="activity_name"
                    v-model="this.newActivityName"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                  <small id="helpId" class="form-text text-muted"
                    >What do you want to do?</small
                  >
                </div>
                <div class="mb-3">
                  <label for="activity_time" class="form-label">When</label>
                  <input
                    type="time"
                    class="form-control"
                    name="activity_time"
                    id="activity_time"
                    v-model="this.newActivityTime"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                  <small id="helpId" class="form-text text-muted">When?</small>
                </div>

                <div class="mb-3">
                  <label for="activity_location" class="form-label">Where is it?</label>
                  <input
                    type="text"
                    class="form-control"
                    name="activity_location"
                    id="activity_location"
                    v-model="this.newActivityLocation"
                    aria-describedby="helpId"
                    placeholder=""
                  />
                  <small id="helpId" class="form-text text-muted">Where?</small>
                </div>

                <button
                  v-on:click="addActivity(stage)"
                  type="submit"
                  class="btn btn-primary"
                >
                  Add
                </button>

                <form></form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  </main>
</template>

<style></style>
