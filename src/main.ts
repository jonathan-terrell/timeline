import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import type { PersonConfig } from './stores/main';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

export const buildFullName = (event: PersonConfig): string => `${event.lastName}, ${event.firstName}`;
