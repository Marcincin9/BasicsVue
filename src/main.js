import Vue from "vue";

Vue.config.productionTip = false;

const NewComponent = {
  name: "NewComponent",
  data() {
    return {
      myColor: {
        color: "#000fff"
      }
    };
  },
  template: `
  <div>
  <h2 :style="myColor"> Nauka Vue z Romanem </h2>
  <label for="color">Change color</label>
  <input name="color" id="color" v-model="myColor.color" />
  </div>
  `
};

new Vue({
  el: "#app",
  components: {
    NewComponent
  },

  data: {
    name: "Marcin",
    funkcja: {
      color: "#000fff"
    }
  },

  methods: {
    manualClick() {
      alert("Thanks for Pushing me :D");
    }
  },

  template: `
  <div>
   <h1 :style="funkcja">Hello {{name}}</h1> 
   <NewComponent />
   <button @click="manualClick">Push me</button>
  </div>
   `
});
//v-bind:style === :style
//v-on:click === @click
