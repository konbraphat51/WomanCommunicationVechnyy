<template>
    <div id="Initializer">
        <NGWordSetter />
        <TextSetter />

        <button id="PlayButton">Play</button>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'Initializer',
        components: {
            "TextSetter": Vue.defineAsyncComponent(() => loadModule("src/components/Initializer/TextSetter/TextSetter.vue", options)),
            "NGWordSetter": Vue.defineAsyncComponent(() => loadModule("src/components/Initializer/NGWordSetter/NGWordSetter.vue", options))
        },
    })
</script>
