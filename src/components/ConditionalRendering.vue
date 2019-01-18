<template>
    <div id="conditionalRendering" class="contentBox" slot="content">
        <h3>Conditional rendering directives</h3>
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
        <!-- v-show sets the CSS display property, as opposed to junking the element; and the element is always rendered -->
        <span v-show="(toggler % 2 == 1)">Using v-show, I only show when the toggler is set to 'odd'</span>
        <p>For content that needs to be toggled on/off continually, v-show is best. If the element never changes after being shown, v-if is best (as it may not be rendered at runtime, and so can incrase efficiency)</p>
        <h3>Render Lists Via Looping (v-for)</h3>
        <input type="number" v-model.number="listSize" @blur="generateList()" @enter="generateList()" placeholder="enter a number"/>
        <br /><br />
        <ol id="dynamicList" v-show="listSize > 0">
            <li v-for="items in list">
                <= list number | index number => {{num}}
            </li>
        </ol>
    </div>
</template>

<script>

export default {
  name: 'TemplateLooping',
  props: [''],
  data: function() {
        return {
            toggler: 2,
            listSize: 0,
            listNumber: 0,
            list: [],
        }
  },
  methods: {
        toggleValue: function(){
            this.toggler++;
        },
        generateList: function(){
            for(var i=0; i < this.listSize; i++ ){
                this.listNumber++;
                this.list[i] = i;
            }
        },
    }
}
</script>

<style scoped>

</style>