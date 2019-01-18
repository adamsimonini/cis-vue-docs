<template>
    <div id="conditionalRendering" class="contentBox" slot="content">
        <h3>Conditional rendering directives</h3>
        <!-- v-show sets the CSS display property, as opposed to junking the element; and the element is always rendered -->
        <p>V-cloak, along with the appropriate css, can hide the placeholder for a variable from showing up when the Vue app is taking a long time to load (e.g., over a slow network connection</p>
        <p v-cloak>I'm only visible when the instance of Vue has fully loaded</p>
        <p>v-if & v-else evalues truthiness of an assertion (e.g., "1 == 1"). Note, each time the value changes, <b>the element and all child nodes are destoryed and re-created</b> 
            which can affect performance. Also noteworthly, the element is not automatically rendered with v-if; it's only rendered when the assertion evaluates to truthy</p>
        <button 
            class="toggle-button"
            @click="toggleValue"
            v-if="(toggler % 2 == 0)">
            Even {{toggler}}
        </button>
        <button 
            class="toggle-button"
            @click="toggleValue"
            v-if="(toggler % 2 == 1)">
            Odd {{toggler}}
        </button>
        <span v-show="(toggler % 2 == 1)">Using v-show, I only show when the toggler is set to 'odd'</span>
        <p>For content that needs to be toggled on/off continually, v-show is best. If the element never changes after being shown, v-if is best (as it may not be rendered at runtime, and so can incrase efficiency)</p>
    </div>
</template>

<script>

export default {
  name: 'TemplateLooping',
  props: [''],
  data: function() {
        return {
            toggler: 2,
        }
  },
  methods: {
        toggleValue: function(){
            this.toggler++;
        },
        logThisInstead: function(){
            console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)", "color: limegreen;");
        },
        logMe: function(){
            console.log(this);
        },
    }
}
</script>

<style scoped>

</style>