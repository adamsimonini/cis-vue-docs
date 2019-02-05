<template>
    <div id="filters" class="contentBox">
        <h3>VSCode Extensions</h3>
        <div class="infoCitation">
            <h4>Plurasite</h4>
            <a href="https://app.pluralsight.com/player?course=vue-cli-developing-faster&author=john-papa&name=33b9c570-ebce-490d-8d62-fcbe4ac1cbfa&clip=6" target="_blank">Link to primary source</a>
        </div>
        <h4>Debugger for Chrome</h4>
        <p>With a little setup, this extension allows you to perform browser debugging within VSCode itself. 
            You can set break points, view the call stack, and explain the state of a given compoent. It seems pretty powerful.</p>
        <img src="../assets/vscode-chome-debug.jpg" />
        <h4>Prettier</h4>
        <p>Beautifies text so that all files between all the developers have a standardized, clean look.</p>
        <h4>Vetur</h4>
        <p>Enables VSCode to understand the .vue extension, and apply styling as well as definition lookup capabilitie.s</p>
        <h4>Vue VSCode Snippets</h4>
        <p>Allows for hotkey creation of various vue elements (e.g., "vbase" for complonent boilerplate, and "vdata" for the creation of the data object).</p>
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