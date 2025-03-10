import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import './styles/fonts.css';
import './index.css';


const app = createApp(App);
app.use(router);

app.mount("#app");