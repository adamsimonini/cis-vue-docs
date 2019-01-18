<template>
    <div class='guideSection'>
        <h2>{{title}}</h2>
        <section>
            <div class="guide-explanation">
                <slot name="explanation"></slot>
            </div>
            <div class="guide-examples">
                <slot name="examples"></slot>
            </div>
            <div class="guide-links">
                <slot name="links"></slot>
            </div>
        </section>
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
