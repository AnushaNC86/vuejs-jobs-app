import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import JobView from "@/views/JobView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import JobDetails from "@/views/JobDetails.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobView from "@/views/EditJobView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobView,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: JobDetails,
    },
    {
      path: "/jobs/add",
      name: "add-job",
      component: AddJobView,
    },
    {
      path: "/jobs/edit/:id",
      name: "edit-job",

      component: EditJobView,
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundView,
    },
  ],
});

export default router;
