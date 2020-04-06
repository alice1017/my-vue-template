import Vue from "vue";
{{#useVuex}}
import store from "./store";
{{/useVuex}}
{{#useBuefy}}
import Buefy from "buefy";
{{/useBuefy}}
import App from "./App.vue";
{{#useBuefy}}
import "buefy/dist/buefy.css";
{{/useBuefy}}

Vue.config.devtools = true;
{{#useBuefy}}
Vue.use(Buefy);
{{/useBuefy}}

const app = new Vue({
    el: "#vueapp",
{{#useVuex}}
    store,
{{/useVuex}}
    render: h => h(App)
});
window.app = app;
