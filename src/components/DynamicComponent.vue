<template>
    <div class="full-row float-left">
        <div class="full-row float-left">
            <p>Dynamic component allows you to specify the name of the component you want to load into an element.
                Below example keeps the component names in an array and dynamically outputs the components using a for loop.</p>
            <p>
                Vue.Draggable is also added in this example to allow dragging the components in different orders.
            </p>
            <div class="infoCitation">
                <h4>Vue.Draggable Documentation</h4>
                <a href="https://github.com/SortableJS/Vue.Draggable" target="_blank">Link to primary source</a>
            </div>
        </div>
        <draggable v-model="dynamicComponents" @start="drag=true" @end="drag=false">
            <div class="float-left" v-for="dc in dynamicComponents" v-bind:key="dc.name">
                <component v-bind:is="dc.name"></component>
            </div>
        </draggable>
        <div class="full-row float-left">
            <h3>Underlying Array</h3>
            {{dynamicComponents}}
        </div>
    </div>
</template>

<script>
import DynamicOne from './DynamicComponents/DynamicOne.vue';
import DynamicTwo from './DynamicComponents/DynamicTwo.vue';
import DynamicThree from './DynamicComponents/DynamicThree.vue';
import draggable from 'vuedraggable'

export default {
    data: function() {
        return {
            dynamicComponents: [
                { name: 'DynamicOne' },
                { name: 'DynamicTwo' },
                { name: 'DynamicThree' }
            ]
        }
    },
    components: {
        DynamicOne: DynamicOne,
        DynamicTwo: DynamicTwo,
        DynamicThree: DynamicThree,
        draggable
    }
}
</script>

<style scoped>
    .full-row {
        width: 100%;
    }
    .float-left {
        float: left;
        margin-right: 8px;
    }
</style>
