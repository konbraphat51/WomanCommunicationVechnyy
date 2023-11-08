<template>
    <div id="Initializer">
        <NGWordSetter ref="ws"/>
        <TextSetter ref="ts"/>

        <button id="PlayButton" @click="StartPlay">Play</button>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'Initializer',
        components: {
            "TextSetter": Vue.defineAsyncComponent(() => loadModule("src/components/Initializer/TextSetter/TextSetter.vue", options)),
            "NGWordSetter": Vue.defineAsyncComponent(() => loadModule("src/components/Initializer/NGWordSetter/NGWordSetter.vue", options))
        },
        methods: {
            StartPlay() {
                const words = this.$refs["ws"].GetData().words
                
                const text_data = this.$refs["ts"].GetData()

                this.$emit("startPlay", words, text_data)
            }
        }
    })
</script>