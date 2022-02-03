import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: () =>
            import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () =>
            import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    },
    {
        path: "/projects",
        name: "Projects",
        component: () =>
            import(/* webpackChunkName: "projects" */ "@/views/Projects.vue"),
        meta: {
            fullHeight: true,
        },
    },
    {
        path: "/projects/:id",
        name: "Project",
        component: () =>
            import(/* webpackChunkName: "projects" */ "@/views/ProjectPage.vue"),
        props: true,
        meta: {
            noPadding: true
        }
    },
    {
        path: "/contact",
        name: "Contact",
        component: () =>
            import(/* webpackChunkName: "contact" */ "@/views/Contact.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});


export default router;
