import '@/assets/main.scss';
import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import type { PersonConfig } from './stores/main';
import router from './router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');

export const buildFullName = (event: PersonConfig): string => `${event.lastName}, ${event.firstName} ${event.middleNames ? ` ${event.middleNames}` : ''}`;
export const dateDiffDays = (from: Date | undefined, to: Date | undefined): number => (from && to ? Math.round((to.getTime() - from.getTime()) / (24 * 60 * 60 * 60)) : -1);
export const formatDate = (date: Date | undefined): string => (date ? `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}` : '');
