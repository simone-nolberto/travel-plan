import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import AddTrip from './components/AddTrip.vue';
import PlanTrip from './components/PlanTrip.vue';
import TripDetails from './components/TripDetails.vue';
import PlanDetails from './components/PlanDetails.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/add_trip',
            name: 'add',
            component: AddTrip,
        },
        {
            path: '/plan_trip',
            name: 'plan',
            component: PlanTrip,
        },
        {
            path: '/trip_details/:id',
            name: 'trip_details',
            component: TripDetails,
        },
        {
            path: '/plan_details/:id',
            name: 'plan_details',
            component: PlanDetails,
        },

    ]
});
export { router };