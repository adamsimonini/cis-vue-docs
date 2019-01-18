<template>
    <div class='guideSection'>
        <h2>{{title}}</h2>
        <slot name="content"></slot>
    </div>
</template>

<script>
export default {
  name: 'GuideSection',
  props: ['title'],
  data: function() {
      return {

      }
  }
}
</script>

<style scoped>
.guide-links{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: red;
  font-weight: 900;
}

.guideSection section{
    margin-left: 5%;
}
</style>
