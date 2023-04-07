// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user).
//  Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const { createApp } = Vue;

createApp({
  data() {
    return {
      icone: [
        {
          name: 'cat',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'crow',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'dog',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'dove',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'dragon',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'horse',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'hippo',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'fish',
          prefix: 'fa-',
          type: 'animal',
          family: 'fas',
          color: 'orange'
        },
        {
          name: 'carrot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
          color: 'green'
        },
        {
          name: 'apple-alt',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
          color: 'green'
        },
        {
          name: 'lemon',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
          color: 'green'
        },
        {
          name: 'pepper-hot',
          prefix: 'fa-',
          type: 'vegetable',
          family: 'fas',
          color: 'green'
        },
        {
          name: 'user-astronaut',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
          color: 'blue'
        },
        {
          name: 'user-graduate',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
          color: 'blue'
        },
        {
          name: 'user-ninja',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
          color: 'blue'
        },
        {
          name: 'user-secret',
          prefix: 'fa-',
          type: 'user',
          family: 'fas',
          color: 'blue'
        }
      ],
      choice: '',              // all, animal, vegetable, user
      arrayFiltrato: []
    }
  },
  methods:{
    getChoice(){
      if(this.choice === '1'){
        this.arrayFiltrato = this.icone;
        return this.arrayFiltrato;
      }else if(this.choice === '2'){
        this.arrayFiltrato = this.icone.filter((element) => {
          return element.type === 'animal';
        });
        return this.arrayFiltrato;
      }else if (this.choice === '3'){
        this.arrayFiltrato = this.icone.filter((element) => {
          return element.type === 'vegetable';
        });
        return this.arrayFiltrato;
      }else if (this.choice === '4'){
        this.arrayFiltrato = this.icone.filter((element) => {
          return element.type === 'user';
        });
        return this.arrayFiltrato;
      }

      }
    },
}).mount('#app');
//  Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.




