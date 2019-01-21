<template>
    <div id="dataChange" class="contentBox">
        <h3>Reacting to Data Changes</h3>
        <img src="../assets/data-changes.jpg" />
        <h4>Watchers</h4>
        <p>
            Watches are anonymous functions set to trigger if and only if a specific property within the data object changes.
            The "watch" propery of a component can be set as a propery of the object the component exports (similar to "data", "components", "methods", and so on). 
        </p>
        <br /><br />
        The functions within "watch" must refer to a data propery. For example, in data we have "watchMe". Within the watch object, we have the following: 
        "watchMe: function() {...}". In other words, watch is now listening to "watchMe"", and will run the specified function if/when the value of 
        "watchMe" changes. In the example below, clicking the button modifies watchMe, triggering the watcher to run its function, which in turn increments "timesChanged";
        <p id='watchMe'>{{watchMe}}</p>
        <button @click="changeWatchMe">Click to change</button>

        <p>You can choose to set a watcher to a function defined within "methods", instead of defining the fucntion directly in "watch"</p>
        <p>Vue automatically captures two parameters when a watch function is triggered. We can name these 'latest' and 'original', as defined here:</p>
        <ul>
            <li><b>Latest</b>: the value of the watched data after being updated</li>
            <li><b>Original</b>: the value of the watched data before being updated</li>
        </ul>
        <div class="testCase">
            <h4>Have a Watcher Call a Method</h4>
            <button @click="addDrink('beer')">&#x1f37a; Add a beer ($8.95) to shopping cart</button>
            <button @click="addDrink('wine')">&#127863; Add bottle of wine ($41.99) to shopping cart</button>
            <button @click="clear()">Clear cart</button>
            <p><span>Drinks in your cart: </span>{{cart.items}}</p>
            <p><span>Subtotal: </span>${{cart.subTotal}}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'DataChange',
    props: [''],
    data: function() {
        return {
            timesChanged: 1,
            watchMe: 'When my value changes, the function "changeTracker()" is run',
            cart: {
                items: [],
                subTotal: 0.00,
            },
        }
    },
    watch: {
        watchMe: function(){
            this.timesChanged++;
        },
        cart: {
            handler: function(l, o){
                this.updateSubTotal()
            },
            deep: true
        },
    },
    methods: {
        changeWatchMe: function (){
            if (this.timesChanged < 2){
                this.watchMe += '. You changed me once...'
            }
            else if (this.timesChanged == 2){
                this.watchMe += ' You changed me again!'
            }
            else{
                this.watchMe += ' You changed me ' + this.timesChanged + ' times!'
            }
        },
        updateSubTotal: function(){
            this.cart.subtotal++;
        },
        addDrink(drink){
            switch(drink){
                case 'beer': 
                    this.cart.items.push(8.95);
                    break;
                case 'wine':
                    this.cart.items.push(41.99);
                    break;
                default:
                break;
            }
            this.cart.subTotal = this.cart.items.reduce(this.getSubTotal).toFixed(2);
        },
        getSubTotal(total, drink){
            return total + drink;
        },
        clear: function(){
            this.cart.subTotal = 0.00;
            this.cart.items = [];
        }
    }
}
</script>

<style scoped>

</style>