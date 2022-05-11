import Vue from "vue";
import VueRouter from "vue-router";
import About from "/src/views/About.vue"
import MelodyCard from "../components/MelodyCard.vue"
import Title from "../components/Title.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/",
    components: {
      default: MelodyCard,
      title: Title
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;