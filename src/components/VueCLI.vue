<template>
    <div id="cli" class="contentBox">
        <div class="infoCitation">
            <h4>Plurasight - Developing Faster with the Vue CLI</h4>
            <a href="https://app.pluralsight.com/player?course=vue-cli-developing-faster&author=john-papa&name=546502f1-09dc-4554-8075-60d05626c9e0&clip=0" target="_blank">Link to primary source</a>
        </div>
        <p><span class="terminalText">npm run serve</span> - serves up the unoptimized, development version of the website which will show Vue errors, and which supports the Vue developer tool plugin & hot reloading</p>
        <p><span class="terminalText">npm run build</span> - creates production-ready files in the "dist" folder which are minimized and optimized for production (& doesn't support Vue dev tools)</p>
        <p><span class="terminalText">npx http-server</span> - cd into "dist" folder, then run this command in order to serve up the production-ready files</p>
        <p><span class="terminalText">cat package.json</span> - can view the content of package.json to see which scripts are available and so on</p>
        <p><span class="terminalText">vue add</span> - install a plugin to a project</p>
        <h4>Vue CLI GUI</h4>
        <p><span class="terminalText">vue ui</span> - run in root directory to see a GUI for the CLI. You can do the following: </p>
        <ul>
            <li>after importing a project, you can actively run and analyze the app in its constituent parts, with metrics on various hypothetical speeds (e.g., 3G-Fast, 3G-Slow, & Global)</li>
            <li>modify configurations (e.g., ESLint settings)</li>
            <li>check, add, & remove plugins</li>
            <li>check, add, & remove dependencies (e.g., vue-router)</li>
            <li>set and remove ports</li>
        </ul>
        <img src="../assets/cli-speed.jpg" />
        <img src="../assets/cli-gui.jpg" />
        <div class="infoCitation">
            <h4>Official Vue CLI Docs</h4>
            <a href="https://cli.vuejs.org/" target="_blank">Link to primary source</a>
        </div>
        <p>With the CLI, presets for creating apps can be customized, saved, and shared (e.g., sharing via github)</p>
    </div>
</template>

<script>

export default {
  name: 'Cli',
  props: [''],
  data: function() {
        return {
        }
  },
  methods: {
      generateList: function(){
        },
    }
}
</script>

<style scoped>
.terminalText{
    background-color: #e6e6e6;
    color: var(--secondaryColor);
    padding: 2px 5px;
}
</style>