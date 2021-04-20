const Titulo={
  props:{
    texto1:{
      type: String,
      required: true
    },
    texto2:{
      type: String,
      required: true
    }
  },
  template:`
  <div class="o-txt">
        <div class="o-txt-nor"> {{texto1}} </div>
        <div class="o-txt-bold">{{texto2}}</div>
  </div>
  `
}
const Numeros = {
  data() {
    return {
      className : "o-dates"
    }
  },
 components:{
  Titulo
 },
  template: `
 <div :class="className"> 
 <Titulo texto1="UAO" texto2="Calcular" />
 </div>  
  `,
  methods: {

  }
}
const app = Vue.createApp({
    components: {
      Numeros
    },
    template: `
            <div class="o-container">
            <Numeros/>
            </div>
      `,
    data() {
      return {
      }
    },
    methods: {  
    },
    computed: {
    }
  }).mount('#app');