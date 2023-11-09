import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import GridView from '../views/GridView.vue';
import VisView from '../views/VisView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/grid', name: 'grid', component: GridView },
        { path: '/vis', name: 'vis', component: VisView }
    ]
});

export default router;
