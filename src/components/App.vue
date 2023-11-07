<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'App',
        components: {
            //"COMPONENT": Vue.defineAsyncComponent(() => loadModule("PATH.vue", options))
        },
    })
</script>

<style>
</style>
