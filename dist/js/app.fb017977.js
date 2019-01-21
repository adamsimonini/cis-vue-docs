(function(e){function t(t){for(var a,o,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)o=s[d],i[o]&&p.push(i[o][0]),i[o]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(p.length)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(a=!1)}a&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},i={app:0},r=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1fa5":function(e,t,n){},4171:function(e,t,n){"use strict";var a=n("f132"),i=n.n(a);i.a},"427a":function(e,t,n){"use strict";var a=n("ffc8"),i=n.n(a);i.a},5223:function(e,t,n){"use strict";var a=n("1fa5"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"gutter"}),n("Main"),n("section",{staticClass:"gutter"})],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"main"}},[n("h1",[e._v("Advanced's Vue Guidebook & Sandbox")]),n("h2",[e._v("Displayed via Conditional Rendering")]),n("div",[n("GuideSection",{staticClass:"guideSection",attrs:{title:"Event Propagation"}},[n("Propagation",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Conditional Rendering"}},[n("ConditionalRendering",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Rendering List via Looping (v-for)"}},[n("TemplateLooping",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Array Mutation"}},[n("Arrays",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Reacting to Data Changes (watchers)"}},[n("DataChange",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Computed Properties"}},[n("ComputedProperties",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Filters"}},[n("Filters",{attrs:{slot:"content"},slot:"content"})],1)],1),n("h2",[e._v("Displayed via Routing")]),n("div",[n("router-link",{staticClass:"routerLink",attrs:{to:"/binding"}},[n("h2",[e._v("Data Binding & Two-Way Binding")])]),n("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[n("span",[e._v("Close")])]),n("router-view")],1)])},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"guideSection"},[n("h2",{staticClass:"sectionTitle",on:{click:function(t){e.showContent()}}},[e._v(e._s(e.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.toggler%2==0,expression:"(toggler) % 2 == 0"}]},[e._t("content")],2)])},c=[],u={name:"GuideSection",props:["title"],data:function(){return{toggler:1}},methods:{showContent:function(){this.toggler++}}},d=u,p=(n("8689"),n("2877")),h=Object(p["a"])(d,l,c,!1,null,"a8d19566",null);h.options.__file="GuideSection.vue";var v=h.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contentBox",attrs:{id:"twoWay"}},[a("h3",[e._v('Bypass default event behaviour with ".prevent" modifier')]),a("p",[e._v('v-on:click.prevent="myFunction" OR @click.prevent="myFunction" will stop the default action of the element and instead run the provided function. Check console logs.')]),a("button",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.logThisInstead(t)}}},[e._v("Prevent my default")]),a("h2",[e._v('"Stop" modifier for halting event propagation (e.g., bubbling)')]),a("p",[e._v('Can help performance. Makes code more predictable. Three elements call function "logMe()" on click, but the click\'s propagation is halted due to ".stop". It only runs twice. Check console logs.')]),a("section",{attrs:{id:"grandParent"},on:{click:function(t){e.logMe()}}},[a("div",{attrs:{id:"parent"},on:{click:function(t){t.stopPropagation(),e.logMe()}}},[a("button",{attrs:{id:"button"},on:{click:function(t){e.logMe()}}},[e._v("Click me")])])]),a("h3",[e._v('"Self" triggers an event on an element only if that element is the origintator of the event')]),e._m(0),a("h3",[e._v('"Once" allows the event to be run one time, and one time only')]),a("p",[e._v("Although the specific element's event can only be triggered once, event propagation is still handled regularly. \n        In other words, although the event for the child can only trigger once, the event will still always propagate to ancestors/descendents.")]),a("p",[e._v('These modifiers can be chained together. For example, ".stop.self" will both prevent the event from being propagated outward from the element, and will also ensure the event is not caused by propagation from another element')]),a("img",{attrs:{src:n("fe4f")}}),a("div",{staticClass:"width-box"},[a("div",{on:{click:function(t){e.bubbleClick("parent")}}},[a("button",{on:{click:function(t){e.bubbleClick("child")}}},[e._v("Event Bubbling")]),a("p",[e._v("Events propagate up from descendants to ancestor")])]),a("div",{on:{"!click":function(t){e.captureClick("parent")}}},[a("button",{on:{click:function(t){e.captureClick("child")}}},[e._v("Event Capturing")]),a("p",[e._v("Events propagate down from ancestor to descendants")])]),a("div",{staticStyle:{"align-self":"flex-start"}},[a("button",{on:{click:function(t){e.clearText()}}},[e._v("Clear")])])]),a("br"),a("div",{attrs:{id:"buttonOutput"}})])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("It is essentially a strong conditonal: run this event/function "),n("b",[e._v("if and only if")]),e._v(" the event started on this element; \n        if the event has reached this element via propagation (e.g., through capturing or bubbling as discsused above), then simply skip it!")])}],g={name:"Propogation",props:[""],data:function(){return{}},methods:{logThisInstead:function(){console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)","color: limegreen;")},logMe:function(){console.log(this)},captureClick:function(e){buttonOutput.innerHTML+="<span class='parentFirst'>Parent listener was triggered first, and child after. </span>","parent"==e?console.log("%c parent listener was triggered first","color: white; font-size: 16px;"):console.log("%c child was triggered after","color: pink")},bubbleClick:function(e){buttonOutput.innerHTML+="<span class='childFirst'>Child listener was triggered first, and parent after. </span>","parent"==e?console.log("%c parent was triggered after","color: white; font-size: 16px;"):console.log("%c child listener was triggered first","color: yellow;")},clearText:function(){buttonOutput.innerHTML=""}}},b=g,_=Object(p["a"])(b,m,f,!1,null,"740b86d2",null);_.options.__file="Propagation.vue";var y=_.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"templateLooping"}},[n("h3",[e._v("Render Lists Via Looping (v-for)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.listSize,expression:"listSize",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"enter a number"},domProps:{value:e.listSize},on:{blur:[function(t){e.generateList()},function(t){e.$forceUpdate()}],enter:function(t){e.generateList()},input:function(t){t.target.composing||(e.listSize=e._n(t.target.value))}}}),n("br"),n("br"),n("ol",{directives:[{name:"show",rawName:"v-show",value:e.listSize>0,expression:"listSize > 0"}],attrs:{id:"dynamicList"}},e._l(e.list,function(t){return n("li",[e._v("\n            <= list number | index number => "+e._s(e.num)+"\n        ")])}),0),n("h3",[e._v("Fish list with css grid")]),n("p",[e._v('An HTML element can be rendered via a loop by using "v-for". This allows us to write the template for the item once (e.g., ".fishBox" below).\n        Then, we can loop through either an array or an object\'s properties from the component\'s data object. For arrays, the index can be accessed via an optional \n        second argument, which can be named any standard string, but is usually called "i" or "index".\n    ')]),e._l(e.fishes,function(t,a){return n("div",{staticClass:"fishBox"},[n("span",[e._v(e._s(a))]),n("span",{staticClass:"fishIcon"},[e._v("🐟")]),n("span",[e._v("Name: "),n("span",{staticClass:"fishName"},[e._v(e._s(t.name))])]),n("span",{staticClass:"fishColor",style:{"background-color":t.color}},[e._v("    ")])])}),n("h3",[e._v("Cities list with css flexbox")]),e._m(0),n("div",{attrs:{id:"majorCities"}},e._l(e.locations,function(t){return n("div",{staticClass:"countries"},[n("span",{staticClass:"countryName"},[e._v(e._s(t.country))]),n("div",{staticClass:"cityList"},e._l(t.majorCities,function(t,a){return n("span",{staticClass:"cityName"},[e._v(e._s(a+1)+". "+e._s(t)+" "),n("span",{domProps:{innerHTML:e._s(e.medal[a])}})])}),0)])}),0)],2)},C=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('The output below is the result of template loop nesting via "v-for". The data property "locations" is an array of objects, where each object has two key-value pairings:\n        '),n("ol",[n("li",[e._v('country name via "country"')]),n("li",[e._v('major cities via the array "majorCities"')])]),e._v("\n        What's more, the index value is captured while looping through the cities, and is handed to a span that then generates a medal based on the index position.\n    ")])}],k={name:"TemplateLooping",props:[""],data:function(){return{listSize:0,listNumber:0,list:[],fishes:[{name:"Goldfish",color:"orange"},{name:"Deepwater Redfish",color:"pink"},{name:"Carp",color:"yellow"},{name:"Iridescent Shark",color:"black"},{name:"Siamese",color:"blue"},{name:"Southern Platyfish",color:"teal"}],locations:[{country:"Canada",majorCities:["Toronto","Montreal","Vancouver"]},{country:"Mexico",majorCities:["Mexico City","Ecatepec","Guadalajara"]},{country:"USA",majorCities:["New York","Los Angeles","Chicago"]}],medal:["&#x1f947;","&#x1f948","&#x1f949"]}},methods:{generateList:function(){for(var e=0;e<this.listSize;e++)this.listNumber++,this.list[e]=e}}},x=k,T=(n("4171"),Object(p["a"])(x,w,C,!1,null,"7a5c205a",null));T.options.__file="TemplateLooping.vue";var j=T.exports,A=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"conditionalRendering"}},[n("h3",[e._v("Conditional rendering directives")]),n("p",[e._v("V-cloak, along with the appropriate css, can hide the placeholder for a variable from showing up when the Vue app is taking a long time to load (e.g., over a slow network connection")]),n("p",{},[e._v("I'm only visible when the instance of Vue has fully loaded")]),e._m(0),e.toggler%2==0?n("button",{staticClass:"toggle-button",on:{click:e.toggleValue}},[e._v("\n        Even "+e._s(e.toggler)+"\n    ")]):e._e(),e.toggler%2==1?n("button",{staticClass:"toggle-button",on:{click:e.toggleValue}},[e._v("\n        Odd "+e._s(e.toggler)+"\n    ")]):e._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:e.toggler%2==1,expression:"(toggler % 2 == 1)"}]},[e._v("Using v-show, I only show when the toggler is set to 'odd'")]),n("p",[e._v("For content that needs to be toggled on/off continually, v-show is best. If the element never changes after being shown, v-if is best (as it may not be rendered at runtime, and so can incrase efficiency)")])])},S=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('v-if & v-else evalues truthiness of an assertion (e.g., "1 == 1"). Note, each time the value changes, '),n("b",[e._v("the element and all child nodes are destoryed and re-created")]),e._v(" \n        which can affect performance. Also noteworthly, the element is not automatically rendered with v-if; it's only rendered when the assertion evaluates to truthy")])}],M={name:"TemplateLooping",props:[""],data:function(){return{toggler:2}},methods:{toggleValue:function(){this.toggler++},logThisInstead:function(){console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)","color: limegreen;")},logMe:function(){console.log(this)}}},P=M,I=Object(p["a"])(P,A,S,!1,null,"5df1117d",null);I.options.__file="ConditionalRendering.vue";var L=I.exports,O=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},N=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contentBox",attrs:{id:"arrays"}},[a("div",{staticClass:"infoCitation"},[a("h4",[e._v("Plurasite")]),a("p",[e._v("Module 6: Conditional Rendering and Rendering of Lists")]),a("a",{attrs:{href:"https://app.pluralsight.com/player?course=vuejs-getting-started&author=chad-campbell&name=vuejs-getting-started-m5&clip=9",target:"_blank"}},[e._v("Link to primary source")])]),a("p",[a("b",[e._v("sort()")]),e._v(" will treat the array's content as strings, and sort them in alphabetical, or string-numeric order. This can be a problem, as 11.1 comes before 2, and 33 comes before 9\n        the sort function can be overridden like so: \n        "),a("br"),a("br"),e._v("\n        \n        this.myArray.sort(function(v1, v2){\n            return v1 - v2;\n        });\n\n        "),a("br"),a("br"),e._v("\n\n        Conditions of the 3 possible returned values:\n        "),a("ul",[a("li",[a("b",[e._v("Negative Value Returned:")]),e._v(" first parameter comes before second parameter")]),a("li",[a("b",[e._v("Negative Value Returned:")]),e._v(" there should be no change in order")]),a("li",[a("b",[e._v("Positive Value Returned:")]),e._v(" first parameter comes after second parameter")])]),a("b",[e._v("reverse()")]),e._v(" purely changes the direction of an array, and by itself applies no sorting. An unsorted, reversed array will be just that.\n        "),a("br"),a("br"),a("b",[e._v("push()")]),e._v(" adds an element to the end of the array, and then returns the array length\n        "),a("br"),a("br"),a("b",[e._v("pop()")]),e._v(" removes the last element of an array, and returns that element\n        "),a("br"),a("br"),a("b",[e._v("unshift()")]),e._v(" adds an element to the beginning of the array, and then returns the array length\n        "),a("br"),a("br"),a("b",[e._v("shift()")]),e._v(" removes the first element of an array, and returns that element\n        "),a("br"),a("br"),a("b",[e._v("splice(1, 2, 3)")]),e._v(" add and remove items to and from an array, where parameter one describes where the splicing should start, \n        and parameter 2 describes how many items should be removed from that location. Splice returns the removed items as an array. \n        The optional 3rd parameter will then add an element to the array.\n        "),a("br"),a("br"),e._v("\n        **Vue cannot deted updates to individual array elements**\n    ")]),a("img",{attrs:{src:n("f86c")}})])}],B={name:"Arrays",props:[""],data:function(){return{}},methods:{generateList:function(){}}},F=B,E=Object(p["a"])(F,O,N,!1,null,"3384bbcf",null);E.options.__file="Arrays.vue";var $=E.exports,z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"contentBox",attrs:{id:"dataChange"}},[e._m(0),a("h3",[e._v("Watchers")]),a("img",{attrs:{src:n("9674")}}),a("p",[e._v('\n        Watchers are anonymous functions set to trigger if and only if a specific property within the data object changes.\n        The "watch" propery is a sibling of other exported properties (e.g., "data", "components", "methods", and so on). \n    ')]),a("div",{staticClass:"testCase"},[e._v('\n        The functions within "watch" must refer to a data propery. For example, in data we have "watchMe". Within the watch object, we have the following: \n        "watchMe: function() {...}". In other words, watch is now listening to "watchMe"", and will run the specified function if/when the value of \n        "watchMe" changes. In the example below, clicking the button modifies watchMe, triggering the watcher to run its function, which in turn increments "timesChanged";\n        '),a("p",{attrs:{id:"watchMe"}},[e._v(e._s(e.watchMe))]),a("button",{on:{click:e.changeWatchMe}},[e._v("Click to change")])]),a("p",[e._v('You can choose to set a watcher to a function defined within "methods", instead of defining the fucntion directly in "watch"')]),a("p",[e._v("Vue automatically captures two parameters when a watch function is triggered. We can name these 'latest' and 'original', as defined here:")]),e._m(1),a("div",{staticClass:"testCase"},[a("h4",[e._v("Have a Watcher Call a Method")]),a("button",{on:{click:function(t){e.addDrink("beer")}}},[e._v("🍺 Add a beer ($8.95) to shopping cart")]),a("button",{on:{click:function(t){e.addDrink("wine")}}},[e._v("🍷 Add bottle of wine ($41.99) to shopping cart")]),a("button",{on:{click:function(t){e.clear()}}},[e._v("Clear cart")]),a("p",[a("span",[e._v("Drinks in your cart: ")]),e._v(e._s(e.cart.items.toString()))]),a("p",[a("span",[e._v("Subtotal: ")]),e._v("$"+e._s(e.cart.subTotal))])]),a("h4",[e._v("Adjust Watcher Monitoring Depth")]),a("p",[e._v("\n        By default watchers have a 'shallow' minitoring depth, meaning they take a snapshot of the object, and check to see if the keys are changed, added, or deleted. \n        However, they don't by default monitor the values of those keys. This can be adjusted by setting \"deep: true\" to the watcher. This affects performance, and should be used\n        intelligently.\n    ")])])},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"infoCitation"},[n("h4",[e._v("Plurasite")]),n("p",[e._v("Module 7: Reacting to Data Changes")]),n("a",{attrs:{href:"https://app.pluralsight.com/player?course=vuejs-getting-started&author=chad-campbell&name=vuejs-getting-started-m6&clip=1",target:"_blank"}},[e._v("Link to primary source")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("b",[e._v("Latest")]),e._v(": the value of the watched data after being updated")]),n("li",[n("b",[e._v("Original")]),e._v(": the value of the watched data before being updated")])])}],D={name:"DataChange",props:[""],data:function(){return{timesChanged:1,watchMe:'When my value changes, the function "changeTracker()" is run',cart:{items:[],subTotal:0}}},watch:{watchMe:function(){this.timesChanged++},cart:{handler:function(e,t){this.updateSubTotal()},deep:!0}},methods:{changeWatchMe:function(){this.timesChanged<2?this.watchMe+=". You changed me once...":2==this.timesChanged?this.watchMe+=" You changed me again!":this.watchMe+=" You changed me "+this.timesChanged+" times!"},updateSubTotal:function(){this.cart.subtotal++},addDrink:function(e){switch(e){case"beer":this.cart.items.push(8.95);break;case"wine":this.cart.items.push(41.99);break;default:break}this.cart.subTotal=this.cart.items.reduce(this.getSubTotal).toFixed(2)},getSubTotal:function(e,t){return e+t},clear:function(){this.cart.subTotal=0,this.cart.items=[]}}},H=D,V=Object(p["a"])(H,z,R,!1,null,"89bf22f4",null);V.options.__file="DataChange.vue";var W=V.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},U=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"computedProperties"}},[n("h3",[e._v("Computed Properties")]),n("div",{staticClass:"infoCitation"},[n("h4",[e._v("Vuejs.org")]),n("a",{attrs:{href:"https://vuejs.org/v2/guide/computed.html",target:"_blank"}},[e._v("Link to primary source")])]),n("p",[e._v("When operations happen within the template, a few problems can arise:\n        "),n("ul",[n("li",[e._v("a. the operation is difficult to read, and takes time to understand it's purpose (e.g., '{ message.split('').reverse().join('') }')")]),n("li",[e._v("b. code becomes less tidy, especially if the operation is used in mutliple places")]),n("li",[e._v("c. perforamnce suffers as the operation isn't cached, and is done anew each time it's employed")])]),e._v("\n        \n        Computed properties can formalize a set of operations into a single, cached value.\n        By default, computed properties are 'getters', but they can also become 'setters' by becoming 'accessors'. Acessors are computed properties that can both\n        get and set property values. Due to caching, computed properties provide performance boosts.\n    ")])])}],Y={name:"ComputedProperties",props:[""],data:function(){return{}},watch:{},methods:{}},q=Y,J=Object(p["a"])(q,G,U,!1,null,"327fbf96",null);J.options.__file="ComputedProperties.vue";var Z=J.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"filters"}},[n("h3",[e._v("Filters")]),e._m(0),e._m(1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.unfiltered,expression:"unfiltered"}],attrs:{placeholder:"Your input will be filtered"},domProps:{value:e.unfiltered},on:{input:function(t){t.target.composing||(e.unfiltered=t.target.value)}}}),n("p",[e._v("Filter has been set to convert value to string, replace all special characters & numbers, and convert string to all upper case. Result: "+e._s(e._f("forceUpperCase")(e._f("removeSpecialCharacters")(e.unfiltered,"--"))))])])},Q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"infoCitation"},[n("h4",[e._v("Plurasite")]),n("a",{attrs:{href:"https://app.pluralsight.com/player?course=vuejs-getting-started&author=chad-campbell&name=vuejs-getting-started-m6&clip=7",target:"_blank"}},[e._v("Link to primary source")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('Filtres are a special type of function intended for common text conversations. They can be used to format data into a "fixed" string (e.g., converting text to upper/lower case,\n        removing special characters, and so on). Filteres can be chained together using the pipe "|" character within the mustaches. '),n("b",[e._v("Filteres are inteded to be used across views")]),e._v(", whereas\n        methods are specific to an instance.\n    ")])}],X=(n("a481"),n("6b54"),{name:"Filters",props:[""],data:function(){return{unfiltered:""}},watch:{},methods:{},filters:{removeSpecialCharacters:function(e,t){return e?(e=e.toString(),e.replace(/[^a-zA-Z ]/g,"")):t},forceUpperCase:function(e){return e.toUpperCase()}}}),ee=X,te=Object(p["a"])(ee,K,Q,!1,null,"7f89c8de",null);te.options.__file="Filters.vue";var ne=te.exports,ae={name:"Main",components:{GuideSection:v,Propagation:y,TemplateLooping:j,ConditionalRendering:L,Arrays:$,DataChange:W,ComputedProperties:Z,Filters:ne},data:function(){return{modifierChart:"../assets/vue-modifiers.jpg"}}},ie=ae,re=(n("427a"),Object(p["a"])(ie,o,s,!1,null,"f0c0e930",null));re.options.__file="Main.vue";var oe=re.exports,se={name:"App",components:{Main:oe}},le=se,ce=(n("5223"),Object(p["a"])(le,i,r,!1,null,null,null));ce.options.__file="App.vue";var ue=ce.exports,de=n("8c4f"),pe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"conditionalRendering"}},[e._m(0),e._m(1),n("h3",[e._v("Inject HTML from a javascript string into an element")]),n("div",{domProps:{innerHTML:e._s(e.myHtml)}}),n("h3",[e._v("Pass a class from javascript to element")]),n("h3",{class:e.doubleBlue},[e._v('This element has received the class "doubleBlue" from the this component\'s "data" function')]),n("h2",[e._v("Conditional binding css class via a bool, and image source binding")]),n("h3",{class:{pinkBox:e.boolean},attrs:{id:"colorBox"}},[e._v("Click below")]),n("button",{on:{click:function(t){e.boxColor()}}},[e._v("Change color")]),n("p",[e._v("This works by toggling the truthiness of the variable 'boolean', for which the class \"pinkBox\" class is bound")]),n("br"),n("h2",[e._v("Binding With Forms")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput,expression:"userInput"}],attrs:{placeholder:"I replicate your input"},domProps:{value:e.userInput},on:{input:function(t){t.target.composing||(e.userInput=t.target.value)}}}),n("span",[e._v("You input the following: "+e._s(e.userInput))]),n("br"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textArea,expression:"textArea"}],domProps:{value:e.textArea},on:{input:function(t){t.target.composing||(e.textArea=t.target.value)}}}),n("span",[e._v("The text area contains the following: "+e._s(e.textArea))]),n("br"),n("div",{staticClass:"width-box",attrs:{id:"pain-box"}},[n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-arms"}},[e._v("Arms")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{id:"pain-arms",type:"checkbox",value:"Arms"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Arms")>-1:e.pain},on:{change:function(t){var n=e.pain,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r="Arms",o=e._i(n,r);a.checked?o<0&&(e.pain=n.concat([r])):o>-1&&(e.pain=n.slice(0,o).concat(n.slice(o+1)))}else e.pain=i}}})]),n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-legs"}},[e._v("Legs")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{type:"checkbox",value:"Legs"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Legs")>-1:e.pain},on:{change:function(t){var n=e.pain,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r="Legs",o=e._i(n,r);a.checked?o<0&&(e.pain=n.concat([r])):o>-1&&(e.pain=n.slice(0,o).concat(n.slice(o+1)))}else e.pain=i}}})]),n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-torso"}},[e._v("Torso")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{type:"checkbox",value:"Torso"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Torso")>-1:e.pain},on:{change:function(t){var n=e.pain,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r="Torso",o=e._i(n,r);a.checked?o<0&&(e.pain=n.concat([r])):o>-1&&(e.pain=n.slice(0,o).concat(n.slice(o+1)))}else e.pain=i}}})]),n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-torso"}},[e._v("Neck or Head")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{type:"checkbox",value:"Head or neck"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Head or neck")>-1:e.pain},on:{change:function(t){var n=e.pain,a=t.target,i=!!a.checked;if(Array.isArray(n)){var r="Head or neck",o=e._i(n,r);a.checked?o<0&&(e.pain=n.concat([r])):o>-1&&(e.pain=n.slice(0,o).concat(n.slice(o+1)))}else e.pain=i}}})])]),n("br"),n("span",[e._v("\n        You feel pain in the following areas: "+e._s(e.pain)+"\n    ")]),n("br"),n("br"),n("div",{staticClass:"width-box"},[n("div",{staticClass:"radio-option"},[n("label",[e._v("Male")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Male"},domProps:{checked:e._q(e.gender,"Male")},on:{change:function(t){e.gender="Male"}}})]),n("div",{staticClass:"radio-option"},[n("label",[e._v("Female")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Female"},domProps:{checked:e._q(e.gender,"Female")},on:{change:function(t){e.gender="Female"}}})]),n("div",{staticClass:"radio-option"},[n("label",[e._v("Transgender")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Transgender"},domProps:{checked:e._q(e.gender,"Transgender")},on:{change:function(t){e.gender="Transgender"}}})]),n("div",{staticClass:"radio-option"},[n("label",[e._v("Other")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Other"},domProps:{checked:e._q(e.gender,"Other")},on:{change:function(t){e.gender="Other"}}})])]),n("p",[e._v("Selected "+e._s(e.gender))]),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:e.dropdown,expression:"dropdown"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.dropdown=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Never"}},[e._v("Never")]),n("option",{attrs:{value:"Sometimes"}},[e._v("Sometimes")]),n("option",{attrs:{value:"Often"}},[e._v("Often")])]),n("p",[e._v("Dropdown value: "+e._s(e.dropdown))]),n("p",{staticClass:"subtitle"},[e._v("Trim Modifier")]),n("p",[e._v("v-model.trim will trim all leading and trailing white space")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.trimmedInput,expression:"trimmedInput",modifiers:{trim:!0}}],attrs:{placeholder:"Trim leading/trailing whitespace"},domProps:{value:e.trimmedInput},on:{input:function(t){t.target.composing||(e.trimmedInput=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),n("p",[e._v("This is your input, trimmed: "+e._s(e.trimmedInput))]),n("p",{staticClass:"subtitle"},[e._v("Number Modifier")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numericInput,expression:"numericInput",modifiers:{number:!0}}],attrs:{placeholder:"I only accept numbers"},domProps:{value:e.numericInput},on:{input:function(t){t.target.composing||(e.numericInput=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("p",[e._v('This is your input, "numerified": '+e._s(e.numericInput))]),n("p",{staticClass:"subtitle"},[e._v("Lazy Loading Binding Values")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.lazyBinding,expression:"lazyBinding",modifiers:{lazy:!0}}],attrs:{placeholder:""},domProps:{value:e.lazyBinding},on:{change:function(t){e.lazyBinding=t.target.value}}}),n("p",[e._v("I will lazily bind (i.e., update only once focus is lost) your input here: "+e._s(e.lazyBinding))]),n("button",{on:{click:e.fillInOn}},[e._v('Fill above inputs (using the "v-on" directive)')]),n("button",{on:{click:e.fillInAt}},[e._v('Fill above inputs (using "@" directive)')]),n("br"),n("br")])},he=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Reference video course can be found on Plurasight "),n("a",{attrs:{href:"https://app.pluralsight.com/player?course=vuejs-getting-started"}},[n("b",[e._v("here")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.once))])}],ve={name:"TemplateLooping",props:[""],data:function(){return{once:"After being generated, this content promises to never change!",myHtml:'<button onclick=alert("injected_HTML")>Injected button</button>',imagePointer:"images/coke.png",cokeImage:{maxWidth:"100px"},doubleBlue:"doubleBlue",boolean:!0,userInput:"",textArea:"",pain:[],gender:"",dropdown:"Never",trimmedInput:"",numericInput:"",lazyBinding:""}},methods:{boxColor:function(){this.boolean?this.boolean=!1:this.boolean=!0},fillInOn:function(e){this.userInput="Do not attempt",this.textArea="to adjust your TV",this.pain=["Arms","Legs"],this.gender="Male",this.dropdown="Sometimes",console.log("An "+e+" event was fired!")},fillInAt:function(e){this.userInput="We are the champions",this.textArea="my friend!",this.pain=["Torso"],this.gender="Female",this.dropdown="Often",console.log("An "+e+" event was fired!")}}},me=ve,fe=Object(p["a"])(me,pe,he,!1,null,"bd3a7862",null);fe.options.__file="Binding.vue";var ge=fe.exports;a["a"].use(de["a"]);var be=[{path:"/binding",component:ge}],_e=new de["a"]({routes:be,mode:"history"});a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(ue)},router:_e,data:{chart:"../assets/vue-modifiers.jpg"}}).$mount("#app")},8689:function(e,t,n){"use strict";var a=n("90ff"),i=n.n(a);i.a},"90ff":function(e,t,n){},9674:function(e,t,n){e.exports=n.p+"img/data-changes.9c48d4aa.jpg"},f132:function(e,t,n){},f86c:function(e,t,n){e.exports=n.p+"img/array-mutation.ba01bb16.jpg"},fe4f:function(e,t,n){e.exports=n.p+"img/vue-modifiers.6373c83e.jpg"},ffc8:function(e,t,n){}});
//# sourceMappingURL=app.fb017977.js.map