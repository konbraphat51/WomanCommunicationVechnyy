<template>
    <div id="TextSetter">
        TextSetter
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'TextSetter',
        components: {
            //"COMPONENT": Vue.defineAsyncComponent(() => loadModule("PATH.vue", options))
        },
        data(){
            return {
                text: "",
                seperation_symbols: []
            }
        },
        methods:{
            GetData(){
                return {
                    text: this.text,
                    seperation_symbols: this.seperation_symbols
                }
            }
        }
    })
</script>