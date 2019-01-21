<template>
  <main id='main'>
    <h1>Advanced's Vue Guidebook & Sandbox</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2>Displayed via Conditional Rendering</h2>
    <div>
        <GuideSection class="guideSection" title="Event Propagation">
            <Propagation slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Conditional Rendering">
            <ConditionalRendering slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Rendering List via Looping (v-for)">
            <TemplateLooping slot="content" />
        </GuideSection>
    </div>
    <h2>Displayed via Routing</h2>
    <div>
        <router-link class="routerLink" to="/binding">
            <h2>Two-Way Binding</h2>
        </router-link>
        <router-link class="routerLink" to="/">
            <span>Close</span>
        </router-link>
        <router-view></router-view>
    </div>
    <!-- <GuideSection class="guideSection" title="Event Propagation">
    
    </GuideSection>
    <GuideSection class="guideSection" title="Key & Mouse Modifiers">
    
    </GuideSection> -->
  </main>
</template>

<script>
import GuideSection from './GuideSection.vue';
import Propagation from './Propagation.vue';
import TemplateLooping from './TemplateLooping.vue';
import ConditionalRendering from './ConditionalRendering.vue';

export default {
  name: 'Main',
  components: {
    GuideSection,
    Propagation,
    TemplateLooping,
    ConditionalRendering,
  },  
  data: function(){
    return {
      modifierChart: '../assets/vue-modifiers.jpg',
    }
  },
}
</script>

<style scoped>
#main > div {
  border-left: 1px solid var(--primaryColor);
  padding-left: 5%;
}
</style>
