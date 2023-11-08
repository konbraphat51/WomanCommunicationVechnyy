<template>
    <div id="app">
        <router-view @startPlay="StartPlay"></router-view>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'App',
        components: {
            //"COMPONENT": Vue.defineAsyncComponent(() => loadModule("PATH.vue", options))
        },
        data(){
            return {
                target_text : "",
                ng_words : [],
                seperation_symbols : []
            }
        },
        methods:{
            StartPlay(ng_words, text_data){
                this.ng_words = ng_words
                this.target_text = text_data.text
                this.seperation_symbols = text_data.seperation_symbols
            }
        }
    })
</script>

<style>
</style>
