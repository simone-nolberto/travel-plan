import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import AddTrip from './components/AddTrip.vue';
import PlanTrip from './components/PlanTrip.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/addtrip',
            name: 'add',
            component: AddTrip,
        },
        {
            path: '/plantrip',
            name: 'plan',
            component: PlanTrip,
        },

    ]
});
export { router };