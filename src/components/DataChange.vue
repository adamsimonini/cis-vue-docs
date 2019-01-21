<template>
    <div id="dataChange" class="contentBox">
        <h3>Reacting to Data Changes</h3>
        <img src="../assets/data-changes.jpg" />
        <h4>Watchers</h4>
            Watches are anonymous functions set to trigger if and only if a specific property within the data object changes.
            The "watch" propery of a component can be set as a propery of the object the component exports (similar to "data", "components", "methods", and so on). 
            <br /><br />
            The functions within "watch" must refer to a data propery. For example, in data we have "watchMe". Within the watch object, we have the following: 
            "watchMe: function() {...}". In other words, watch is now listening to "watchMe"", and will run the specified function if/when the value of 
            "watchMe" changes. In the example below, clicking the button modifies watchMe, triggering the watcher to run its function, which in turn increments "timesChanged";
            <p id='watchMe'>{{watchMe}}</p>
            <button @click="changeWatchMe">Click to change</button>

            <p>You can choose to set a watcher to a function defined within "methods", instead of defining the fucntion directly in "watch"</p>
            <p>Vue automatically captures two parameters when a watch function is triggered. We can name these 'latest' and 'original'</p>
            <ul>
                <li><b>Latest</b>: the value the data being watched has been updated to</li>
                <li><b>Original</b>: the value the data being watched has been updated to</li>
            </ul>
    </div>
</template>

<script>

export default {
    name: 'DataChange',
    props: [''],
    data: function() {
        return {
            timesChanged: 1,
            watchMe: 'When my value changes, the function "changeTracker()" is run',
        }
    },
    watch: {
        watchMe: function(){
            this.timesChanged++;
        },
    },
    methods: {
        changeWatchMe: function (){
            if (this.timesChanged < 2) {
                this.watchMe += '. You changed me once...'
            }
            else if (this.timesChanged == 2){
                this.watchMe += ' You changed me again!'
            }
            else {
                this.watchMe += ' You changed me ' + this.timesChanged + ' times!'
            }
        }
    }
}
</script>

<style scoped>

</style>