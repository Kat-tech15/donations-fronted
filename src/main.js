import { createApp } from 'vue';
import './style.css';
import './assets/global.css';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import vuetify from './plugins/vuetify';
import './assets/styles.css';
//import 'tailwindcss/tailwind.css';
import router from './router';
import axios from 'axios';


axios.defaults.baseURL = 'http://localhost:127.0.0.1:8000/api';

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.mount('#app')
