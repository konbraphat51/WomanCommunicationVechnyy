<template>
    <div id="NGWordSetter">
        <div class="DropZone" @drop="ReadFile">
            <p>Drop here</p>
            <input type="file" @change="ReadFileByInput"/>
        </div>
    </div>
</template>

<script>
    export default Vue.defineComponent({
        name: 'NGWordSetter',
        components: {
            //"COMPONENT": Vue.defineAsyncComponent(() => loadModule("PATH.vue", options))
        },
        data(){
            return {
                words: []
            }
        },
        methods:{
            GetData(){
                return {
                    words: this.words
                }
            },
            ReadFileByInput(event){
                const file = event.target.files[0]; // 選択されたファイル
                if (file) {
                    let _this = this
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const content = e.target.result; // ファイルの内容
                        const lines = content.split(/\r\n|\r|\n/); // 改行で分割
                        _this.words = lines; // 改行区切りの文字列の配列
                        console.log(_this.words)
                    };
                    reader.readAsText(file); // ファイルの内容をテキストとして読み込む
                }
            }
        }
    })
</script>

<style>
    .DropZone {
        border: 5px solid blue;
        width: 200px;
        height: 100px;
    }
</style>