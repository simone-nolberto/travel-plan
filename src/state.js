import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    userInput: '',
    past_trips: [],
    plans: [],
    check: true,
    tripsApiUrl: 'http://localhost:3000/past_trips',
    plansApiUrl: 'http://localhost:3000/plans',

    getTrips(url) {
        axios.get(url)
            .then(response => {
                // console.log(response.data);
                this.past_trips = response.data;
                // console.log(this.past_trips);
            })
    },

    getPlans(url) {
        axios.get(url)
            .then(response => {
                // console.log(response.data);
                this.plans = response.data;
                // console.log(this.plans);
            })
    },

})