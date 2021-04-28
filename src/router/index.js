import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Index.vue";
import SecretCounter from "../pages/SecretCounter.vue";
import Tutorial from "../pages/Tutorial.vue";
import TutorialLaunching from "../pages/TutorialLaunching.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/secret-counter",
    name: "SecretCounter",
    component: SecretCounter,
  },
  {
    path: "/tutorial",
    name: "Tutorial",
    component: Tutorial,
  },
  {
    path: "/tutorial-launching",
    name: "TutorialLaunching",
    component: TutorialLaunching,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
