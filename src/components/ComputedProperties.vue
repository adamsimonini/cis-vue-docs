<template>
    <div id="computedProperties" class="contentBox">
        <h3>Computed Properties</h3>
        <div class="infoCitation">
            <h4>Vuejs.org</h4>
            <a href="https://vuejs.org/v2/guide/computed.html" target="_blank">Link to primary source</a>
        </div>
        <!-- <h4>sub</h4> -->
        <p>When operations happen within the template, a few problems can arise:
            <ul>
                <li>a. the operation is difficult to read, and takes time to understand it's purpose (e.g., '{ message.split('').reverse().join('') }')</li>
                <li>b. code becomes less tidy, especially if the operation is used in mutliple places</li>
                <li>c. perforamnce suffers as the operation isn't cached, and is done anew each time it's employed</li>
            </ul>
            
            Computed properties can formalize a set of operations into a single, cached value.
            By default, computed properties are 'getters', but they can also become 'setters' by becoming 'accessors'. Acessors are computed properties that can both
            get and set property values. Due to caching, computed properties provide performance boosts.
        </p>
    </div>
</template>

<script>

export default {
    name: 'ComputedProperties',
    props: [''],
    data: function() {
        return {
        }
    },
    watch: {
    },
    methods: {
    }
}
</script>

<style scoped>

</style>