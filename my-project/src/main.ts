import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import PrimeVue from "primevue/config";
import './styles/fonts.css';
import './index.css';
import Aura from '@primeuix/themes/aura';


const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount("#app");