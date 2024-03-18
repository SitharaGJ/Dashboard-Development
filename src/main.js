// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'vuetify/dist/vuetify.min.css';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import VueApexCharts from "vue3-apexcharts";

const app = createApp(App);

app.use(VueApexCharts);
app.use(store);
app.use(router);



app.use(vuetify);

app.mount('#app');
