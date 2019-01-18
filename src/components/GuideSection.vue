<template>
    <div class='guideSection'>
        <h2 class="sectionTitle" @click="showContent()">{{title}}</h2>
        <div v-show="(toggler) % 2 == 0">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'GuideSection',
  props: ['title'],
  data: function() {
      return {
          toggler: 1,
      }
  },
  methods: {
      showContent: function(){
          this.toggler++;
      }
  },
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
.sectionTitle{
    cursor: pointer;
    user-select: none;
}
.sectionTitle:hover{
    cursor: pointer;
}
</style>
