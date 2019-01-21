(function(e){function t(t){for(var i,r,s=t[0],l=t[1],c=t[2],d=0,p=[];d<s.length;d++)r=s[d],o[r]&&p.push(o[r][0]),o[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,s=1;s<n.length;s++){var l=n[s];0!==o[l]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},o={app:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1fa5":function(e,t,n){},"45af":function(e,t,n){"use strict";var i=n("7910"),o=n.n(i);o.a},5223:function(e,t,n){"use strict";var i=n("1fa5"),o=n.n(i);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("section",{staticClass:"gutter"}),n("Main"),n("section",{staticClass:"gutter"})],1)},a=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",{attrs:{id:"main"}},[n("h1",[e._v("Advanced's Vue Guidebook & Sandbox")]),n("h2",[e._v("Displayed via Conditional Rendering")]),n("div",[n("GuideSection",{staticClass:"guideSection",attrs:{title:"Event Propagation"}},[n("Propagation",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Conditional Rendering"}},[n("ConditionalRendering",{attrs:{slot:"content"},slot:"content"})],1),n("GuideSection",{staticClass:"guideSection",attrs:{title:"Rendering List via Looping (v-for)"}},[n("TemplateLooping",{attrs:{slot:"content"},slot:"content"})],1)],1),n("h2",[e._v("Displayed via Routing")]),n("div",[n("router-link",{staticClass:"routerLink",attrs:{to:"/binding"}},[n("h2",[e._v("Two-Way Binding")])]),n("router-link",{staticClass:"routerLink",attrs:{to:"/"}},[n("span",[e._v("Close")])]),n("router-view")],1)])},s=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"guideSection"},[n("h2",{staticClass:"sectionTitle",on:{click:function(t){e.showContent()}}},[e._v(e._s(e.title))]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.toggler%2==0,expression:"(toggler) % 2 == 0"}]},[e._t("content")],2)])},c=[],u={name:"GuideSection",props:["title"],data:function(){return{toggler:1}},methods:{showContent:function(){this.toggler++}}},d=u,p=(n("8689"),n("2877")),v=Object(p["a"])(d,l,c,!1,null,"a8d19566",null);v.options.__file="GuideSection.vue";var m=v.exports,h=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"contentBox",attrs:{id:"twoWay"}},[i("h3",[e._v('Bypass default event behaviour with ".prevent" modifier')]),i("p",[e._v('v-on:click.prevent="myFunction" OR @click.prevent="myFunction" will stop the default action of the element and instead run the provided function. Check console logs.')]),i("button",{attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.logThisInstead(t)}}},[e._v("Prevent my default")]),i("h2",[e._v('"Stop" modifier for halting event propagation (e.g., bubbling)')]),i("p",[e._v('Can help performance. Makes code more predictable. Three elements call function "logMe()" on click, but the click\'s propagation is halted due to ".stop". It only runs twice. Check console logs.')]),i("section",{attrs:{id:"grandParent"},on:{click:function(t){e.logMe()}}},[i("div",{attrs:{id:"parent"},on:{click:function(t){t.stopPropagation(),e.logMe()}}},[i("button",{attrs:{id:"button"},on:{click:function(t){e.logMe()}}},[e._v("Click me")])])]),i("h3",[e._v('"Self" triggers an event on an element only if that element is the origintator of the event')]),e._m(0),i("h3",[e._v('"Once" allows the event to be run one time, and one time only')]),i("p",[e._v("Although the specific element's event can only be triggered once, event propagation is still handled regularly. \n        In other words, although the event for the child can only trigger once, the event will still always propagate to ancestors/descendents.")]),i("p",[e._v('These modifiers can be chained together. For example, ".stop.self" will both prevent the event from being propagated outward from the element, and will also ensure the event is not caused by propagation from another element')]),i("img",{attrs:{src:n("fe4f")}}),i("div",{staticClass:"width-box"},[i("div",{on:{click:function(t){e.bubbleClick("parent")}}},[i("button",{on:{click:function(t){e.bubbleClick("child")}}},[e._v("Event Bubbling")]),i("p",[e._v("Events propagate up from descendants to ancestor")])]),i("div",{on:{"!click":function(t){e.captureClick("parent")}}},[i("button",{on:{click:function(t){e.captureClick("child")}}},[e._v("Event Capturing")]),i("p",[e._v("Events propagate down from ancestor to descendants")])]),i("div",{staticStyle:{"align-self":"flex-start"}},[i("button",{on:{click:function(t){e.clearText()}}},[e._v("Clear")])])]),i("br"),i("div",{attrs:{id:"buttonOutput"}})])},f=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("It is essentially a strong conditonal: run this event/function "),n("b",[e._v("if and only if")]),e._v(" the event started on this element; \n        if the event has reached this element via propagation (e.g., through capturing or bubbling as discsused above), then simply skip it!")])}],g={name:"Propogation",props:[""],data:function(){return{}},methods:{logThisInstead:function(){console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)","color: limegreen;")},logMe:function(){console.log(this)},captureClick:function(e){buttonOutput.innerHTML+="<span class='parentFirst'>Parent listener was triggered first, and child after. </span>","parent"==e?console.log("%c parent listener was triggered first","color: white; font-size: 16px;"):console.log("%c child was triggered after","color: pink")},bubbleClick:function(e){buttonOutput.innerHTML+="<span class='childFirst'>Child listener was triggered first, and parent after. </span>","parent"==e?console.log("%c parent was triggered after","color: white; font-size: 16px;"):console.log("%c child listener was triggered first","color: yellow;")},clearText:function(){buttonOutput.innerHTML=""}}},_=g,b=Object(p["a"])(_,h,f,!1,null,"740b86d2",null);b.options.__file="Propagation.vue";var y=b.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"templateLooping"}},[n("h3",[e._v("Render Lists Via Looping (v-for)")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.listSize,expression:"listSize",modifiers:{number:!0}}],attrs:{type:"number",placeholder:"enter a number"},domProps:{value:e.listSize},on:{blur:[function(t){e.generateList()},function(t){e.$forceUpdate()}],enter:function(t){e.generateList()},input:function(t){t.target.composing||(e.listSize=e._n(t.target.value))}}}),n("br"),n("br"),n("ol",{directives:[{name:"show",rawName:"v-show",value:e.listSize>0,expression:"listSize > 0"}],attrs:{id:"dynamicList"}},e._l(e.list,function(t){return n("li",[e._v("\n            <= list number | index number => "+e._s(e.num)+"\n        ")])}),0),n("p",[e._v('An HTML element can be rendered via a loop by using "v-for". This allows us to write the template for the item once (e.g., ".fishBox" below).\n        Then, we can loop through either an array or an object\'s properties from the component\'s data object. For arrays, the index can be accessed via an optional \n        second argument, which can be named any standard string, but is usually called "i" or "index".\n    ')]),n("h3",[e._v("Fish list with css grid")]),e._l(e.fishes,function(t,i){return n("div",{staticClass:"fishBox"},[n("span",[e._v(e._s(i))]),n("span",{staticClass:"fishIcon"},[e._v("🐟")]),n("span",[e._v("Name: "),n("span",{staticClass:"fishName"},[e._v(e._s(t.name))])]),n("span",{staticClass:"fishColor",style:{"background-color":t.color}},[e._v("    ")])])}),n("h3",[e._v("Cities list with css flexbox")]),e._m(0),n("div",{attrs:{id:"majorCities"}},e._l(e.locations,function(t){return n("div",{staticClass:"countries"},[n("span",{staticClass:"countryName"},[e._v(e._s(t.country))]),n("div",{staticClass:"cityList"},e._l(t.majorCities,function(t,i){return n("span",{staticClass:"cityName"},[e._v(e._s(i+1)+". "+e._s(t)+" "),n("span",{domProps:{innerHTML:e._s(e.medal[i])}})])}),0)])}),0)],2)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('The output below is the result of template loop nesting via "v-for". The data property "locations" is an array of objects, where each object has two key-value pairings:\n        '),n("ol",[n("li",[e._v('country name via "country"')]),n("li",[e._v('major cities via the array "majorCities"')])]),e._v("\n        What's more, the index value is captured while looping through the cities, and is handed to a span that then generates a medal based on the index position.\n    ")])}],k={name:"TemplateLooping",props:[""],data:function(){return{listSize:0,listNumber:0,list:[],fishes:[{name:"Goldfish",color:"orange"},{name:"Deepwater Redfish",color:"pink"},{name:"Carp",color:"yellow"},{name:"Iridescent Shark",color:"black"},{name:"Siamese",color:"blue"},{name:"Southern Platyfish",color:"teal"}],locations:[{country:"Canada",majorCities:["Toronto","Montreal","Vancouver"]},{country:"Mexico",majorCities:["Mexico City","Ecatepec","Guadalajara"]},{country:"USA",majorCities:["New York","Los Angeles","Chicago"]}],medal:["&#x1f947;","&#x1f948","&#x1f949"]}},methods:{generateList:function(){for(var e=0;e<this.listSize;e++)this.listNumber++,this.list[e]=e}}},C=k,T=(n("45af"),Object(p["a"])(C,w,x,!1,null,"e12c8ada",null));T.options.__file="TemplateLooping.vue";var A=T.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"conditionalRendering"}},[n("h3",[e._v("Conditional rendering directives")]),n("p",[e._v("V-cloak, along with the appropriate css, can hide the placeholder for a variable from showing up when the Vue app is taking a long time to load (e.g., over a slow network connection")]),n("p",{},[e._v("I'm only visible when the instance of Vue has fully loaded")]),e._m(0),e.toggler%2==0?n("button",{staticClass:"toggle-button",on:{click:e.toggleValue}},[e._v("\n        Even "+e._s(e.toggler)+"\n    ")]):e._e(),e.toggler%2==1?n("button",{staticClass:"toggle-button",on:{click:e.toggleValue}},[e._v("\n        Odd "+e._s(e.toggler)+"\n    ")]):e._e(),n("span",{directives:[{name:"show",rawName:"v-show",value:e.toggler%2==1,expression:"(toggler % 2 == 1)"}]},[e._v("Using v-show, I only show when the toggler is set to 'odd'")]),n("p",[e._v("For content that needs to be toggled on/off continually, v-show is best. If the element never changes after being shown, v-if is best (as it may not be rendered at runtime, and so can incrase efficiency)")])])},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v('v-if & v-else evalues truthiness of an assertion (e.g., "1 == 1"). Note, each time the value changes, '),n("b",[e._v("the element and all child nodes are destoryed and re-created")]),e._v(" \n        which can affect performance. Also noteworthly, the element is not automatically rendered with v-if; it's only rendered when the assertion evaluates to truthy")])}],S={name:"TemplateLooping",props:[""],data:function(){return{toggler:2}},methods:{toggleValue:function(){this.toggler++},logThisInstead:function(){console.log("%c Form submission was successfully prevented, and THIS function was run, instead! :)","color: limegreen;")},logMe:function(){console.log(this)}}},P=S,L=Object(p["a"])(P,I,j,!1,null,"5df1117d",null);L.options.__file="ConditionalRendering.vue";var M=L.exports,O={name:"Main",components:{GuideSection:m,Propagation:y,TemplateLooping:A,ConditionalRendering:M},data:function(){return{modifierChart:"../assets/vue-modifiers.jpg"}}},N=O,B=(n("a621"),Object(p["a"])(N,r,s,!1,null,"eaff9822",null));B.options.__file="Main.vue";var z=B.exports,E={name:"App",components:{Main:z}},F=E,H=(n("5223"),Object(p["a"])(F,o,a,!1,null,null,null));H.options.__file="App.vue";var $=H.exports,R=n("8c4f"),V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"contentBox",attrs:{id:"conditionalRendering"}},[e._m(0),e._m(1),n("h3",[e._v("Inject HTML from a javascript string into an element")]),n("div",{domProps:{innerHTML:e._s(e.myHtml)}}),n("h3",[e._v("Pass a class from javascript to element")]),n("h3",{class:e.doubleBlue},[e._v('This element has received the class "doubleBlue" from the this component\'s "data" function')]),n("h2",[e._v("Conditional binding css class via a bool, and image source binding")]),n("h3",{class:{pinkBox:e.boolean},attrs:{id:"colorBox"}},[e._v("Click below")]),n("button",{on:{click:function(t){e.boxColor()}}},[e._v("Change color")]),n("p",[e._v("This works by toggling the truthiness of the variable 'boolean', for which the class \"pinkBox\" class is bound")]),n("br"),n("h2",[e._v("Binding With Forms")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.userInput,expression:"userInput"}],attrs:{placeholder:"I replicate your input"},domProps:{value:e.userInput},on:{input:function(t){t.target.composing||(e.userInput=t.target.value)}}}),n("span",[e._v("You input the following: "+e._s(e.userInput))]),n("br"),n("br"),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.textArea,expression:"textArea"}],domProps:{value:e.textArea},on:{input:function(t){t.target.composing||(e.textArea=t.target.value)}}}),n("span",[e._v("The text area contains the following: "+e._s(e.textArea))]),n("br"),n("div",{staticClass:"width-box",attrs:{id:"pain-box"}},[n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-arms"}},[e._v("Arms")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{id:"pain-arms",type:"checkbox",value:"Arms"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Arms")>-1:e.pain},on:{change:function(t){var n=e.pain,i=t.target,o=!!i.checked;if(Array.isArray(n)){var a="Arms",r=e._i(n,a);i.checked?r<0&&(e.pain=n.concat([a])):r>-1&&(e.pain=n.slice(0,r).concat(n.slice(r+1)))}else e.pain=o}}})]),n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-legs"}},[e._v("Legs")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{type:"checkbox",value:"Legs"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Legs")>-1:e.pain},on:{change:function(t){var n=e.pain,i=t.target,o=!!i.checked;if(Array.isArray(n)){var a="Legs",r=e._i(n,a);i.checked?r<0&&(e.pain=n.concat([a])):r>-1&&(e.pain=n.slice(0,r).concat(n.slice(r+1)))}else e.pain=o}}})]),n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-torso"}},[e._v("Torso")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{type:"checkbox",value:"Torso"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Torso")>-1:e.pain},on:{change:function(t){var n=e.pain,i=t.target,o=!!i.checked;if(Array.isArray(n)){var a="Torso",r=e._i(n,a);i.checked?r<0&&(e.pain=n.concat([a])):r>-1&&(e.pain=n.slice(0,r).concat(n.slice(r+1)))}else e.pain=o}}})]),n("div",{staticClass:"pain-area"},[n("label",{attrs:{for:"pain-torso"}},[e._v("Neck or Head")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.pain,expression:"pain"}],attrs:{type:"checkbox",value:"Head or neck"},domProps:{checked:Array.isArray(e.pain)?e._i(e.pain,"Head or neck")>-1:e.pain},on:{change:function(t){var n=e.pain,i=t.target,o=!!i.checked;if(Array.isArray(n)){var a="Head or neck",r=e._i(n,a);i.checked?r<0&&(e.pain=n.concat([a])):r>-1&&(e.pain=n.slice(0,r).concat(n.slice(r+1)))}else e.pain=o}}})])]),n("br"),n("span",[e._v("\n        You feel pain in the following areas: "+e._s(e.pain)+"\n    ")]),n("br"),n("br"),n("div",{staticClass:"width-box"},[n("div",{staticClass:"radio-option"},[n("label",[e._v("Male")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Male"},domProps:{checked:e._q(e.gender,"Male")},on:{change:function(t){e.gender="Male"}}})]),n("div",{staticClass:"radio-option"},[n("label",[e._v("Female")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Female"},domProps:{checked:e._q(e.gender,"Female")},on:{change:function(t){e.gender="Female"}}})]),n("div",{staticClass:"radio-option"},[n("label",[e._v("Transgender")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Transgender"},domProps:{checked:e._q(e.gender,"Transgender")},on:{change:function(t){e.gender="Transgender"}}})]),n("div",{staticClass:"radio-option"},[n("label",[e._v("Other")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.gender,expression:"gender"}],attrs:{type:"radio",value:"Other"},domProps:{checked:e._q(e.gender,"Other")},on:{change:function(t){e.gender="Other"}}})])]),n("p",[e._v("Selected "+e._s(e.gender))]),n("br"),n("select",{directives:[{name:"model",rawName:"v-model",value:e.dropdown,expression:"dropdown"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.dropdown=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"Never"}},[e._v("Never")]),n("option",{attrs:{value:"Sometimes"}},[e._v("Sometimes")]),n("option",{attrs:{value:"Often"}},[e._v("Often")])]),n("p",[e._v("Dropdown value: "+e._s(e.dropdown))]),n("p",{staticClass:"subtitle"},[e._v("Trim Modifier")]),n("p",[e._v("v-model.trim will trim all leading and trailing white space")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.trimmedInput,expression:"trimmedInput",modifiers:{trim:!0}}],attrs:{placeholder:"Trim leading/trailing whitespace"},domProps:{value:e.trimmedInput},on:{input:function(t){t.target.composing||(e.trimmedInput=t.target.value.trim())},blur:function(t){e.$forceUpdate()}}}),n("p",[e._v("This is your input, trimmed: "+e._s(e.trimmedInput))]),n("p",{staticClass:"subtitle"},[e._v("Number Modifier")]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:e.numericInput,expression:"numericInput",modifiers:{number:!0}}],attrs:{placeholder:"I only accept numbers"},domProps:{value:e.numericInput},on:{input:function(t){t.target.composing||(e.numericInput=e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}}),n("p",[e._v('This is your input, "numerified": '+e._s(e.numericInput))]),n("p",{staticClass:"subtitle"},[e._v("Lazy Loading Binding Values")]),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.lazyBinding,expression:"lazyBinding",modifiers:{lazy:!0}}],attrs:{placeholder:""},domProps:{value:e.lazyBinding},on:{change:function(t){e.lazyBinding=t.target.value}}}),n("p",[e._v("I will lazily bind (i.e., update only once focus is lost) your input here: "+e._s(e.lazyBinding))]),n("button",{on:{click:e.fillInOn}},[e._v('Fill above inputs (using the "v-on" directive)')]),n("button",{on:{click:e.fillInAt}},[e._v('Fill above inputs (using "@" directive)')]),n("br"),n("br")])},G=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Reference video course can be found on Plurasight "),n("a",{attrs:{href:"https://app.pluralsight.com/player?course=vuejs-getting-started"}},[n("b",[e._v("here")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(e._s(e.once))])}],D={name:"TemplateLooping",props:[""],data:function(){return{once:"After being generated, this content promises to never change!",myHtml:'<button onclick=alert("injected_HTML")>Injected button</button>',imagePointer:"images/coke.png",cokeImage:{maxWidth:"100px"},doubleBlue:"doubleBlue",boolean:!0,userInput:"",textArea:"",pain:[],gender:"",dropdown:"Never",trimmedInput:"",numericInput:"",lazyBinding:""}},methods:{boxColor:function(){this.boolean?this.boolean=!1:this.boolean=!0},fillInOn:function(e){this.userInput="Do not attempt",this.textArea="to adjust your TV",this.pain=["Arms","Legs"],this.gender="Male",this.dropdown="Sometimes",console.log("An "+e+" event was fired!")},fillInAt:function(e){this.userInput="We are the champions",this.textArea="my friend!",this.pain=["Torso"],this.gender="Female",this.dropdown="Often",console.log("An "+e+" event was fired!")}}},W=D,U=Object(p["a"])(W,V,G,!1,null,"bd3a7862",null);U.options.__file="Binding.vue";var q=U.exports;i["a"].use(R["a"]);var Y=[{path:"/binding",component:q}],J=new R["a"]({routes:Y,mode:"history"});i["a"].config.productionTip=!1,new i["a"]({render:function(e){return e($)},router:J,data:{chart:"../assets/vue-modifiers.jpg"}}).$mount("#app")},"5ff7":function(e,t,n){},7910:function(e,t,n){},8689:function(e,t,n){"use strict";var i=n("90ff"),o=n.n(i);o.a},"90ff":function(e,t,n){},a621:function(e,t,n){"use strict";var i=n("5ff7"),o=n.n(i);o.a},fe4f:function(e,t,n){e.exports=n.p+"img/vue-modifiers.6373c83e.jpg"}});
//# sourceMappingURL=app.2b2fa1e1.js.map