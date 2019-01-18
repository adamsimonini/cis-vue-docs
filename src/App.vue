<template>
  <div id="app">
    <section class='gutter'></section>
    <Main />
    <section class='gutter'></section>
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main,
  },
}

</script>

<style src="./css/styles.css"></style>