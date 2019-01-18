<template>
  <main id='main'>
    <h1>Advanced Vue Guidebook & Sandbox</h1>
    <GuideSection class="guideSection" title="Two-Way Binding">
        <TwoWayBinding slot="content" />
    </GuideSection>
    <GuideSection class="guideSection" title="Event Propagation" />
    <GuideSection class="guideSection" title="Key & Mouse Modifiers" />
    <GuideSection class="guideSection" title="Conditional Rendering" />
    <GuideSection class="guideSection" title="Rendering List via Looping (v-for)" />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  </main>
</template>

<script>
import GuideSection from './GuideSection.vue';
import TwoWayBinding from './TwoWayBinding.vue';

export default {
  name: 'Main',
  components: {
    GuideSection,
    TwoWayBinding,
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
