const routes = [
    {
        path: "/",
        name: "Initializer",
        component: Vue.defineAsyncComponent(() => loadModule("src/components/Initializer/Initializer.vue", options))
    },
    // {
    //     path: "/ingame",
    //     name: "InGame",
    //     component: Vue.defineAsyncComponent(() => loadModule("src/components/InGame/InGame.vue", options))
    // }
]

const router = VueRouter.createRouter({
    base: "/WomanCommunicationVechnyy/",
    history: VueRouter.createWebHistory(),
    routes: routes
})
