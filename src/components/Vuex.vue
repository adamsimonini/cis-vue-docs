<template>
    <div id="filters" class="contentBox">
        <h3>Filters</h3>
        <div class="infoCitation">
            <h4>Vuex Official Documentation</h4>
            <a href="https://vuex.vuejs.org/guide/state.html" target="_blank">Link to primary source</a>
        </div>
        <p>Vuex is a statemanagement system, which enables state along with functions that mutate state, to be accessible by all components. With it, we can decouple our components from the application's
            API logic. To use Vuex, we cause the Vue instance to "use" an instance of Vuex. Many of the properties used by Vuex are the same kinds of properties available to us
            within the context of a single component, including:
        </p>

        <p>Every Vuex app has a "store". A "store" is basically a container that holds your application state. There are two things that make a Vuex store different from a plain global object: </p>
        <ol>
            <li>Vuex stores are reactive. When Vue components retrieve state from it, they will reactively and efficiently update if the store's state changes.</li>
            <li>You cannot directly mutate the store's state. The only way to change a store's state is by explicitly committing mutations. This ensures every state change leaves a track-able record, and enables tooling that helps us better understand our applications.</li>
        </ol>
        <h4>Other Important Concepts</h4>
        <ul>
            <li><span><b>state: </b>Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the "single source of truth". This also means usually you will have only one store for each application. A single state tree makes it straightforward to locate a specific piece of state, and allows us to easily take snapshots of the current app state for debugging purposes.</span></li>
            <br />
            <li><span><b>getter: </b></span>You can think of them as computed properties for stores. Like computed properties, a getter's result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed. Getters will receive the state as their 1st argument</li>
            <br />
            <li><span><b>mutations: </b>The only way to actually change state in a Vuex store is by committing a mutation. Vuex mutations are very similar to events: each mutation has a string type and a handler. The handler function is where we perform actual state modifications, and it will receive the state as the first argument. Further, you can pass an additional argument to the mutation, which is called it's payload - usually an object. Mutations have to be synchronous.</span></li>
            <br />
            <li><span><b>actions: </b>Commit mutations, and do not mutate state directly. Actions can contain arbitrary asynchronous operations. Action handlers receive a context object which exposes the same set of methods/properties on the store instance, so you can call context.commit to commit a mutation, or access the state and getters via context.state and context.getters. We can even call other actions with context.dispatch. </span></li>
        </ul>
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
    },
}
</script>

<style scoped>

</style>