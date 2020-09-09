import {createApp} from "vue"
import App from "./App.vue"
import fetch from "./fetch"

fetch(() => {
    createApp(App).mount("#app");
});
