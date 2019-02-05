<template>
    <div id="componentFrameworks" class="contentBox">
        <h3>List of Frameworks</h3>
        <div class="frameworkRow" v-for="framework in list" v-bind:key="framework.id">
            <span><b>{{framework.name}}</b></span>
            <span>{{framework.layout}}</span>
            <a :href="framework.url" target="_blank">Product Website</a>
            <a :href="framework.github" target="_blank">Git Repo</a>
            <span>{{framework.support}}</span>
        </div>

        <h3>DevExpress</h3>
        <h4>Data Binding</h4>
        <a href="https://codesandbox.io/s/w6371j7z48">Data Grid in Vue:</a>
        <a href="https://codesandbox.io/s/6vkn4zknjw">Custom Data Source</a>
        <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService/Vue/Light/">Web API Services</a>
        <a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/SignalRService/Vue/Light/">Realtime Data</a>
        <h4>Paging & Scrolling</h4>
        <a href="https://codesandbox.io/s/53323vk09l">Remote Virtual Scrolling</a>
        <h4>Editing</h4>
        <a href="https://codesandbox.io/s/13n5lmymp3">Editing a row</a>
        <a href="https://codesandbox.io/s/wrmqq8m95">Batch editing</a>
    </div>
</template>

<script>

export default {
    name: 'ComponentFrameworks',
    props: [''],
    data: function() {
        return {
            list: [
                {name: 'Vueify', layout:'--', url: 'https://vuetifyjs.com/en/', github: 'https://github.com/vuetifyjs/vuetify', support: 'Tidelift: $1,500/month for 25 developers'},
                {name: "Quasar", layout: "responsive grid", url: 'https://quasar-framework.org/', github: 'https://github.com/quasarframework/quasar', support: 'n/a'},
                {name: "DevExtreme (by DevExpress)", layout: "responsive grid", url: 'https://js.devexpress.com/', github: 'https://github.com/DevExpress/DevExtreme', support: "DevExtreme Subscription: $700/year per developer"},
                {name: "Teleric", layout: "responsive grid", url: 'https://www.telerik.com/kendo-vue-ui', support: 'DevCraft: $1,500/year per developer'},
                {name: "Buefy", layout: "responsive grid", url: 'https://buefy.github.io/documentation/table', github: 'https://github.com/buefy/buefy', support: 'n/a'},
            ]
        }
    },
    watch: {
    },
    methods: {
    }
}
</script>

<style scoped>
div span{
    margin: 0 5px;
}
div a{
    margin: 0 5px;
}
.frameworkRow{
    margin: 10px 0;
    display: flex;
    justify-content: flex-start;
}
#componentFrameworks{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}
</style>