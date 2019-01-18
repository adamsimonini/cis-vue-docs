<template>
  <div id='main'>
    <h1>Advanced Vue Guidebook & Sandbox</h1>
    <GuideSection class="guideSection" title="Two-Way Binding">
      <div slot="explanation">
      <h2>Bypass default event behaviour with ".prevent" modifier</h2>
        <p>v-on:click.prevent="myFunction" OR @click.prevent="myFunction" will stop the default action of the element and instead run the provided function. Check console logs.</p>
        <button style="" type="submit" @click.prevent="logThisInstead">Prevent my default</button>
        <h2>"Stop" modifier for halting event propagation (e.g., bubbling)</h2>
        <p>Can help performance. Makes code more predictable. Three elements call function "logMe()" on click, but propagation is halted so it only runs twice due to ".stop". Check console logs.</p>
        <section id="grandParent" @click="logMe()">
            <div id="parent" @click.stop="logMe()"> <!-- ".stop" will prevent grandParent from triggering its @click  -->
                <button id="button"  @click="logMe()" style="">Click me</button>
            </div>
        </section>
        <h2>"Self" triggers an event on an element only if that element is the origintator of the event</h2>
        <p>It is essentially a strong conditonal: run this event/function <b>if and only if</b> the event started on this element; 
            if the event has reached this element via propagation (e.g., through capturing or bubbling as discsused above), then simply skip it!</p>
        <h2>"Once" allows the event to be run one time, and one time only</h2>
        <p>Although the specific element's event can only be triggered once, event propagation is still handled regularly. 
            In other words, although the event for the child can only trigger once, the event will still always propagate to ancestors/descendents.</p>
        <p>These modifiers can be chained together. For example, ".stop.self" will both prevent the event from being propagated outward from the element, and will also ensure the event is not caused by propagation from another element</p>
        <img :src="modifierChart" />
      </div>
      <div slot="examples">TEST</div>
      <div slot="links">
        <a href="">video 1</a>
        <a href="">video 2</a>
        <a href="">video 3</a>
      </div>
    </GuideSection>
    <GuideSection class="guideSection" title="Event Propagation" />
    <GuideSection class="guideSection" title="Key & Mouse Modifiers" />
    <GuideSection class="guideSection" title="Conditional Rendering" />
    <GuideSection class="guideSection" title="Rendering List via Looping (v-for)" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </div>
</template>

<script>
import GuideSection from './GuideSection.vue';

export default {
  name: 'Main',
  components: {
    GuideSection,
  },  
  data: function(){
    return {
      modifierChart: '../assets/vue-modifiers.jpg',
    }
  },
}
</script>

<style scoped>
</style>
