<template>
    <div id="twoWay" class="contentBox" slot="content">
        <h3>Bypass default event behaviour with ".prevent" modifier</h3>
          <p>v-on:click.prevent="myFunction" OR @click.prevent="myFunction" will stop the default action of the element and instead run the provided function. Check console logs.</p>
          <button style="" type="submit" @click.prevent="logThisInstead">Prevent my default</button>
          <h2>"Stop" modifier for halting event propagation (e.g., bubbling)</h2>
          <p>Can help performance. Makes code more predictable. Three elements call function "logMe()" on click, but the click's propagation is halted due to ".stop". It only runs twice. Check console logs.</p>
          <section id="grandParent" @click="logMe()">
              <div id="parent" @click.stop="logMe()"> <!-- ".stop" will prevent grandParent from triggering its @click  -->
                  <button id="button"  @click="logMe()" style="">Click me</button>
              </div>
          </section>
          <h3>"Self" triggers an event on an element only if that element is the origintator of the event</h3>
          <p>It is essentially a strong conditonal: run this event/function <b>if and only if</b> the event started on this element; 
              if the event has reached this element via propagation (e.g., through capturing or bubbling as discsused above), then simply skip it!</p>
          <h3>"Once" allows the event to be run one time, and one time only</h3>
          <p>Although the specific element's event can only be triggered once, event propagation is still handled regularly. 
              In other words, although the event for the child can only trigger once, the event will still always propagate to ancestors/descendents.</p>
          <p>These modifiers can be chained together. For example, ".stop.self" will both prevent the event from being propagated outward from the element, and will also ensure the event is not caused by propagation from another element</p>
          <img src="../assets/vue-modifiers.jpg" />
    </div>
</template>

<script>

export default {
  name: 'TwoWayBinding',
  props: [''],
  data: function() {
        return {
        }
  },
  methods: {
        logThisInstead: function(){
            console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)", "color: limegreen;" );
        },
        logMe: function(){
            console.log(this);
        },
    }
}
</script>

<style scoped>

</style>