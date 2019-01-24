<template>
    <div id="filters" class="contentBox">
        <h3>Filters</h3>
        <div class="infoCitation">
            <h4>Official Documentation</h4>
            <a href="https://router.vuejs.org/" target="_blank">Link to primary source</a>
        </div>
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