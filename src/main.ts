import '@/assets/main.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import type { EventConfig } from './stores/main';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

export const buildFullName = (event: EventConfig): string => `${event.lastName}, ${event.firstName}`;
