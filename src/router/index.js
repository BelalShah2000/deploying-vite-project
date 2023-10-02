import { createRouter, createWebHistory } from "vue-router";
import List from "../components/student/List.vue";
import Add from "../components/student/Add.vue";
import View from "../components/student/View.vue";
import Edit from "../components/student/Edit.vue";
import pageNotFound from "../assets/views/pageNotFound.vue";

const routes = [
  {
    path: "/",
    name: "List",
    component: List,
  },
  {
    path: "/Edit/:id",
    name: "Edit",
    component: Edit,
  },
  {
    path: "/Add",
    name: "Add",
    component: Add,
  },
  {
    path: "/View/:id",
    name: "View",
    component: View,
  }, 

  {
    path: "/:pathMatch(.*)*", 
    name: "notFound",
    component: pageNotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

export default router;
