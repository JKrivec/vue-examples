import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Example1View from "@/views/Example1View.vue";
import Example2View from "@/views/Example2View.vue";
import Example3View from "@/views/Example3View.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        // {
        //   path: '/about',
        //   name: 'about',
        //   // route level code-splitting
        //   // this generates a separate chunk (About.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import('@/views/AboutView.vue'),
        // },
        {
            path: "/example1",
            name: "Example 1",
            component: Example1View,
        },
        {
            path: "/example2",
            name: "Example 2",
            component: Example2View,
        },
        {
            path: "/example3",
            name: "Example 3",
            component: Example3View,
        },
    ],
});

export default router;
