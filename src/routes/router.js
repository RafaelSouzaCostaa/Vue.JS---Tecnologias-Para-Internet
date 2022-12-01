import { createRouter, createWebHistory } from "vue-router";

import ScreenHome from "../view/HomePage.vue";
import Screen1Atividade20 from "../view/Screen1Atividade20.vue";
import Screen2Atividade20 from "../view/Screen2Atividade20.vue";
import Screen3Atividade20 from "../view/Screen3Atividade20.vue";

const routes = [
    { path: "/", name: "home", component: ScreenHome },
    {
        path: "/screen1_atividade20",
        name: "screen1_atividade20",
        component: Screen1Atividade20,
    },
    {
        path: "/screen2_atividade20",
        name: "screen2_atividade20",
        component: Screen2Atividade20,
    },
    {
        path: "/screen3_atividade20",
        name: "screen3_atividade20",
        component: Screen3Atividade20,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
