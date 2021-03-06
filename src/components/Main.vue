<template>
  <main id='main'>
    <h1>Advanced's Vue Guidebook & Sandbox</h1>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h2>Displayed via Conditional Rendering</h2>
    <div>
        <GuideSection class="guideSection" title="UI Framework Comparison">
            <ComponentFrameworks slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Event Propagation">
            <Propagation slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Conditional Rendering">
            <ConditionalRendering slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Rendering List via Looping (v-for)">
            <TemplateLooping slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Array Mutation">
            <Arrays slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Reacting to Data Changes (watchers)">
            <DataChange slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Computed Properties">
            <ComputedProperties slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Filters">
            <Filters slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Vue CLI">
            <VueCLI slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Vue Router">
            <VueRouter slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Vuex">
            <Vuex slot="content" />
        </GuideSection>
        <GuideSection class="guideSection" title="Dynamic Component">
            <dynamic-component slot="content" />
        </GuideSection>
    </div>
    <h2>Displayed via Routing</h2>
    <div>
        <router-link class="routerLink" to="/binding">
            <h2>Data Binding & Two-Way Binding</h2>
        </router-link>
        <router-link class="routerLink" to="/">
            <span>Close</span>
        </router-link>
        <router-view></router-view>
    </div>
    <h2>VSCode Extensions & Tooling</h2>
    <div>
        <GuideSection class="guideSection" title="VSCode Extensions">
            <Extensions slot="content" />
        </GuideSection>
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
import Arrays from './Arrays.vue';
import DataChange from './DataChange.vue';
import ComputedProperties from './ComputedProperties.vue';
import Filters from './Filters.vue';
import VueCLI from './VueCLI.vue';
import ComponentFrameworks from './ComponentFrameworks.vue';
import VueRouter from './VueRouter.vue';
import Vuex from './Vuex.vue';
import Extensions from './Extensions.vue';
import DynamicComponent from './DynamicComponent.vue';

export default {
  name: 'Main',
  components: {
    GuideSection,
    Propagation,
    TemplateLooping,
    ConditionalRendering,
    Arrays,
    DataChange,
    ComputedProperties,
    Filters,
    VueCLI,
    ComponentFrameworks,
    VueRouter,
    Vuex,
    Extensions,
    DynamicComponent,
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
h1{
    font-family: 'Permanent Marker', cursive;
    font-size: 3rem;
    color: var(--primaryColor);
    font-weight: 300;
}
</style>
