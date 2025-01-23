import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import PrimeVue from "primevue/config";
import './styles/fonts.css';
import './index.css';


createApp(App).use(router).use(PrimeVue).mount("#app");
