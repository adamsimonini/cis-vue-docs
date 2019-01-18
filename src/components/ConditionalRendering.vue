<template>
    <div id="conditionalRendering" class="contentBox" slot="content">
        <!-- v-for to generate HTML from an array of objects -->
        <h3>Fish list with css grid</h3>
        <div class="fishBox" v-for="(fish, i) in fishes">
            <span>{{i}}</span>
            <span class="fishIcon">&#x1f41f;</span>
            <span>Name: <span class="fishName">{{fish.name}}</span></span>
            <span v-bind:style="{'background-color': fish.color}" class="fishColor">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <!-- v-binding style causes the style to become jabascript that accepts two parameters ('style to be changed', 'value of the change') -->
        </div>

        <h3>Cities list with css flexbox</h3>
        <div id="majorCities">
            <div class="countries" v-for="location in locations">
                <span class="countryName">{{location.country}}</span>
                <div class="cityList">
                    <span class="cityName" v-for="(majorCity, i) in location.majorCities">{{i + 1}} {{majorCity}} <span v-html="medal[i]"></span></span>
                </div>
                <!-- v-binding style causes the style to become jabascript that accepts two parameters ('style to be changed', 'value of the change') -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TwoWayBinding',
  props: [''],
  data: function() {
        return {
            fishes: [
                {name: 'Goldfish', color: 'orange'},
                {name: 'Deepwater Redfish', color: 'pink'},
                {name: 'Carp', color: 'yellow'},
                {name: 'Iridescent Shark', color: 'black'},
                {name: 'Siamese', color: 'blue'},
                {name: 'Southern Platyfish', color: 'teal'},
            ],
            locations: [
                {   
                    country: 'Canada',
                    majorCities: ['Toronto', 'Montreal', 'Vancouver']
                },
                {   
                    country: 'Mexico',
                    majorCities: ['Mexico City', 'Ecatepec', 'Guadalajara']
                },
                {   
                    country: 'USA',
                    majorCities: ['New York', 'Los Angeles', 'Chicago']
                },
            ],
            medal: ['&#x1f947;', '&#x1f948', '&#x1f949'],
        }
  },
  methods: {
        logThisInstead: function(){
            console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)", "color: limegreen;");
        },
        logMe: function(){
            console.log(this);
        },
    }
}
</script>

<style scoped>

</style>