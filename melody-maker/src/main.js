import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { BootstrapVue } from "bootstrap-vue";
import Vuelidate from "vuelidate";
import store from "./store";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
export const bus = new Vue();

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
export const eventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
