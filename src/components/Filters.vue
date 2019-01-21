<template>
    <div id="filters" class="contentBox">
        <h3>Filters</h3>
        <div class="infoCitation">
            <h4>Plurasite</h4>
            <a href="https://app.pluralsight.com/player?course=vuejs-getting-started&author=chad-campbell&name=vuejs-getting-started-m6&clip=7" target="_blank">Link to primary source</a>
        </div>
        <p>Filtres are a special type of function intended for common text conversations. They can be used to format data into a "fixed" string (e.g., converting text to upper/lower case,
            removing special characters, and so on). Filteres can be chained together using the pipe "|" character within the mustaches. <b>Filteres are inteded to be used across views</b>, whereas
            methods are specific to an instance.
        </p>
        <input v-model="unfiltered" placeholder="Your input will be filtered"/>
        <p>Filter has been set to convert value to string, replace all special characters & numbers, and convert string to all upper case. Result: {{unfiltered | removeSpecialCharacters('--') | forceUpperCase()}}</p>
    </div>
</template>

<script>

export default {
    name: 'Filters',
    props: [''],
    data: function() {
        return {
            unfiltered: '',
        }
    },
    watch: {
    },
    methods: {
    },
    filters: {
        removeSpecialCharacters: function(value, empty){
            if (!value) { return empty; }
            value = value.toString();
            return value = value.replace(/[^a-zA-Z ]/g, "");
        },
        forceUpperCase: function(value){
            return value.toUpperCase();
        }
    }
}
</script>

<style scoped>

</style>