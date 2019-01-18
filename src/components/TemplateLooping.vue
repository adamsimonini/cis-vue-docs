<template>
    <div id="templateLooping" class="contentBox" slot="content">
        <h3>Render Lists Via Looping (v-for)</h3>
        <input type="number" v-model.number="listSize" @blur="generateList()" @enter="generateList()" placeholder="enter a number"/>
        <br /><br />
        <ol id="dynamicList" v-show="listSize > 0">
            <li v-for="items in list">
                <= list number | index number => {{num}}
            </li>
        </ol>

        <!-- v-for to generate HTML from an array of objects -->
        <p>An HTML element can be rendered via a loop by using "v-for". This allows us to write the template for the item once (e.g., ".fishBox" below).
            Then, we can loop through either an array or an object's properties from the component's data object. For arrays, the index can be accessed via an optional 
            second argument, which can be named any standard string, but is usually called "i" or "index".
        </p>
        <h3>Fish list with css grid</h3>
        <div class="fishBox" v-for="(fish, i) in fishes">
            <span>{{i}}</span>
            <span class="fishIcon">&#x1f41f;</span>
            <span>Name: <span class="fishName">{{fish.name}}</span></span>
            <span v-bind:style="{'background-color': fish.color}" class="fishColor">&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <!-- v-binding style causes the style to become jabascript that accepts two parameters ('style to be changed', 'value of the change') -->
        </div>
        
        <h3>Cities list with css flexbox</h3>
        <p>The output below is the result of template loop nesting via "v-for". The data property "locations" is an array of objects, where each object has two key-value pairings:
            <ol>
                <li>country name via "country"</li>
                <li>major cities via the array "majorCities"</li>
            </ol>
            What's more, the index value is captured while looping through the cities, and is handed to a span that then generates a medal based on the index position.
        </p>
        <div id="majorCities">
            <div class="countries" v-for="location in locations">
                <span class="countryName">{{location.country}}</span>
                <div class="cityList">
                    <span class="cityName" v-for="(majorCity, i) in location.majorCities">{{i + 1}}. {{majorCity}} <span v-html="medal[i]"></span></span>
                </div>
                <!-- v-binding style causes the style to become jabascript that accepts two parameters ('style to be changed', 'value of the change') -->
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'TemplateLooping',
  props: [''],
  data: function() {
        return {
            listSize: 0,
            listNumber: 0,
            list: [],
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
.fishColor{
    width: 30px;
    height: 30px;
    background-color: orange;
}
.fishBox{
    display: grid;
    grid-template-columns: 20px 30px 1fr 30px;
    grid-template-rows: auto;
    grid-gap: 1px;
    max-width: 300px
}
.fishName{
    font-weight: 600;
}
.cityName{
    width: 33%
}
/* .cityName:nth-child(even){
    background-color: #f9f9f9;
} */
.cityList{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #f9f9f9;
}
.countryName{
    font-weight: 900;
}
</style>