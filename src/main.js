import { createApp } from 'vue'; // Gunakan createApp dari 'vue'
import App from './App.vue';
import router from './router';
import './assets/css/main.css';

import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle'


const app = createApp(App);

app.use(router).use(bootstrap);

app.mount('#app');