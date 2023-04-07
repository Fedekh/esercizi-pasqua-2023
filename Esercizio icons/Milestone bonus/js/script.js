// BONUS
// 1- modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico:
//  generare in modo casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#"
// seguito da 6 caratteri alfanumerici compresi tra 0 e 9 e A e F.
// 2- popolare le options della select della milestone 3 dinamicamente.

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
      arrayFiltrato: [],
      colorGenerated: '',     //per bonus 1
      options: [              //array di oggetti per il select tag
        {
          value: '1',
          label: 'All'
        },
        {
          value: '2',
          label: 'Animals'
        },
        {
          value: '3',
          label: 'Vegetables'
        },
        {
          value: '4',
          label: 'Users'
        }
       
      ]
    }
  },
  methods: {
    getChoice() {                       //genero subito un colore casuale
      this.coloRandom()
      if (this.choice === '1') {
        this.arrayFiltrato = this.icone;
        return this.arrayFiltrato;
      } else if (this.choice === '2') {
        this.arrayFiltrato = this.icone.filter((element) => {
          return element.type === 'animal';
        });
        return this.arrayFiltrato;
      } else if (this.choice === '3') {
        this.arrayFiltrato = this.icone.filter((element) => {
          return element.type === 'vegetable';
        });
        return this.arrayFiltrato;
      } else if (this.choice === '4') {
        this.arrayFiltrato = this.icone.filter((element) => {
          return element.type === 'user';
        });
        return this.arrayFiltrato;
      }

    },

    coloRandom() {
      this.colorGenerated = '#';                  // resetta la stringa ad ogni richiamo
      let alfa = '';                              // inizializza la stringa dei caratteri casuali
      let number;
      for (let i = 0; i < 6; i++) {
        let k = Math.round(Math.random());              // genera un numero intero casuale tra 0 e 1
        if (k < 0.5) {
          number = Math.floor(Math.random() * 10);
          this.colorGenerated += number.toString();   // converte il numero in una stringa e lo concatena
        } else {
          alfa += String.fromCharCode(Math.floor(Math.random() * 6) + 65); // concatena il nuovo carattere alla stringa dei caratteri casuali
        }
      }
      this.colorGenerated += alfa;                          // concatena la stringa dei caratteri casuali alla stringa del colore generato
      console.log(this.colorGenerated);
    }

  },

}).mount('#app');
//  Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.




