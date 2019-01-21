<template>
    <div id="arrays" class="contentBox">
        <div class="infoCitation">
            <h4>Plurasite</h4>
            <p>Module 6: Conditional Rendering and Rendering of Lists</p>
            <a href="https://app.pluralsight.com/player?course=vuejs-getting-started&author=chad-campbell&name=vuejs-getting-started-m5&clip=9" target="_blank">Link to primary source</a>
        </div>
        <p>
            <b>sort()</b> will treat the array's content as strings, and sort them in alphabetical, or string-numeric order. This can be a problem, as 11.1 comes before 2, and 33 comes before 9
            the sort function can be overridden like so: 
            <br/><br />
            
            this.myArray.sort(function(v1, v2){
                return v1 - v2;
            });

            <br /><br />

            Conditions of the 3 possible returned values:
            <ul>
                <li><b>Negative Value Returned:</b> first parameter comes before second parameter</li>
                <li><b>Negative Value Returned:</b> there should be no change in order</li>
                <li><b>Positive Value Returned:</b> first parameter comes after second parameter</li>
            </ul>
            <b>reverse()</b> purely changes the direction of an array, and by itself applies no sorting. An unsorted, reversed array will be just that.
            <br /><br />
            <b>push()</b> adds an element to the end of the array, and then returns the array length
            <br /><br />
            <b>pop()</b> removes the last element of an array, and returns that element
            <br /><br />
            <b>unshift()</b> adds an element to the beginning of the array, and then returns the array length
            <br /><br />
            <b>shift()</b> removes the first element of an array, and returns that element
            <br /><br />
            <b>splice(1, 2, 3)</b> add and remove items to and from an array, where parameter one describes where the splicing should start, 
            and parameter 2 describes how many items should be removed from that location. Splice returns the removed items as an array. 
            The optional 3rd parameter will then add an element to the array.
            <br /><br />
            **Vue cannot deted updates to individual array elements**
        </p>
        <img src="../assets/array-mutation.jpg" />
    </div>
</template>

<script>

export default {
  name: 'Arrays',
  props: [''],
  data: function() {
        return {
        }
  },
  methods: {
      generateList: function(){
        },
    }
}
</script>

<style scoped>

</style>