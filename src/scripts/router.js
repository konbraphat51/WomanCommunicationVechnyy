const router = VueRouter.createRouter({
    mode:"hash",
    history: VueRouter.createWebHashHistory(),
    routes: [
        {
            path: "/",
            name: "Initializer",
            component: Vue.defineAsyncComponent(() => loadModule("src/components/Initializer/Initializer.vue", options))    //Initializer
        }
    ]
})