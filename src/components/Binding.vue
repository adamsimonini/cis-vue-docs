<template>
    <div id="conditionalRendering" class="contentBox">
        <p>Reference video course can be found on Plurasight <a href="https://app.pluralsight.com/player?course=vuejs-getting-started"><b>here</b></a></p>
        <div v-once>{{once}}</div> <!-- v-once directive tells virtual dome to skip updating, & helps to optimize Vue performance -->
        <h3>Inject HTML from a javascript string into an element</h3>
        <div v-html="myHtml"></div>  <!-- v-html directive outputs binding as HTML - can be a security risk if dynamically generated -->
        <h3>Pass a class from javascript to element</h3>
        <h3 v-bind:class="doubleBlue">This element has received the class "doubleBlue" from the this component's "data" function</h3> <!-- v-bind is required for binding a class -->

        <h2>Conditional binding css class via a bool, and image source binding</h2>
        <!-- One way to conditionally apply a css class -->
        <h3 id="colorBox" v-bind:class="{pinkBox: boolean }">Click below</h3>
        <button @click='boxColor()'>Change color</button>
        <p>This works by toggling the truthiness of the variable 'boolean', for which the class "pinkBox" class is bound</p>
        <br />

        <h2>Binding With Forms</h2>
        <!-- COLLECTING DATA VIA THE V-MODEL DIRECTIVE -->
        <input v-model="userInput" placeholder="I replicate your input" />
        <span>You input the following: {{userInput}}</span>
        <br/><br />
        <textarea v-model="textArea"></textarea>
        <span>The text area contains the following: {{textArea}}</span>
        <br />
        <div id=pain-box class="width-box">
            <div class="pain-area">
                <label for="pain-arms">Arms</label>
                <input 
                    id="pain-arms"
                    type="checkbox" 
                    value="Arms"
                    v-model="pain"
                />
            </div>
            <div class="pain-area">
                <label for="pain-legs">Legs</label>
                <input 
                    type="checkbox" 
                    value="Legs"
                    v-model="pain"
                />

            </div>
            <div class="pain-area">
                <label for="pain-torso">Torso</label>
                <input 
                    type="checkbox" 
                    value="Torso"
                    v-model="pain"
                />
            </div>
            <div class="pain-area">
                <label for="pain-torso">Neck or Head</label>
                <input 
                    type="checkbox" 
                    value="Head or neck"
                    v-model="pain"
                />
            </div>
        </div>
        <br />
        <span>
            You feel pain in the following areas: {{pain}}
        </span>
        <br /><br />
        <div class="width-box">
            <div class="radio-option">
                <label>Male</label>
                <input 
                type="radio"
                value="Male"
                v-model="gender"
                />
            </div>
            <div class="radio-option">
                <label>Female</label>
                <input 
                type="radio"
                value="Female"
                v-model="gender"
                />
            </div>
            <div class="radio-option">
                <label>Transgender</label>
                <input 
                type="radio"
                value="Transgender"
                v-model="gender"
                />
            </div>
            <div class="radio-option">
                <label>Other</label>
                <input 
                type="radio"
                value="Other"
                v-model="gender"
                />
            </div>
        </div>
        <p>Selected {{gender}}</p>
        <br />
        <!-- A select can have it's binding declaired within it, which binds its child options to the data -->
        <select 
            v-model="dropdown"
        >
            <option value="Never">Never</option>
            <option value="Sometimes">Sometimes</option>
            <option value="Often">Often</option>
        </select>
        <p>Dropdown value: {{dropdown}}</p>

        <p class="subtitle">Trim Modifier</p>
        <p>v-model.trim will trim all leading and trailing white space</p>
        <!-- Built-in Data Modifiers, which are used to describe the behaviour of a binding, & which can be chained together -->
        <input v-model.trim="trimmedInput" placeholder="Trim leading/trailing whitespace" /> <!-- .trim removes leading and trailing whitespace -->
        <p>This is your input, trimmed: {{trimmedInput}}</p>

        <p class="subtitle">Number Modifier</p>
        <input v-model.number="numericInput" placeholder="I only accept numbers" /> <!-- .number attempts to use Javascript's parseFloat function on the input; it trims, and will work if at least the first character is a number -->
        <p>This is your input, "numerified": {{numericInput}}</p>

        <p class="subtitle">Lazy Loading Binding Values</p>
        <!-- 
            onInput event: fires after each time input is modified (e.g., each time a new character is added)
            onChange event: fires when the element loses focus
        -->
        <input v-model.lazy="lazyBinding" placeholder="" /> <!-- .number attempts to use Javascript's parseFloat function; it trims and will work if at least the first character is a number -->
        <p>I will lazily bind (i.e., update only once focus is lost) your input here: {{lazyBinding}}</p>
        <button v-on:click="fillInOn">Fill above inputs (using the "v-on" directive)</button>
        <button @click="fillInAt">Fill above inputs (using "@" directive)</button>
        <br /><br />
    </div>
</template>

<script>

export default {
  name: 'TemplateLooping',
  props: [''],
  data: function() {
        return {
            once: 'After being generated, this content promises to never change!',
            myHtml: '<button onclick=alert("injected_HTML")>Injected button</button>',
            imagePointer: 'images/coke.png',
            cokeImage: {
                maxWidth: '100px',
            },
            doubleBlue : 'doubleBlue',
            boolean: true,
            userInput: '',
            textArea: '',
            pain: [],
            gender: '',
            dropdown: 'Never',
            trimmedInput: '',
            numericInput: '',
            lazyBinding: '',
        }
  },
  methods: {
      boxColor: function(){
          this.boolean ? this.boolean = false : this.boolean = true;
      },
    fillInOn: function(e){
            // the last parameter within an event handler is the event object that triggered the event
            // within a method, "this" is bound to the Vue instance
            this.userInput = 'Do not attempt';
            this.textArea = 'to adjust your TV';
            this.pain= ['Arms', 'Legs'];
            this.gender= "Male"
            this.dropdown = 'Sometimes';
            console.log("An " + e + " event was fired!")
        },
        fillInAt: function(e){
            // the last parameter within an event handler is the event object that triggered the event
            // within a method, "this" is bound to the Vue instance
            this.userInput = 'We are the champions';
            this.textArea = 'my friend!';
            this.pain= ['Torso'];
            this.gender= "Female"
            this.dropdown = 'Often';
            console.log("An " + e + " event was fired!")
        },
    }
}
</script>

<style scoped>

</style>