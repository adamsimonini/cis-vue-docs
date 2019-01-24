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
</style>