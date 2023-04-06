// Milestone 2
// Gestire ulteriori parametri per la password: quali caratteri usare fra numeri, lettere e simboli.
//  Possono essere scelti singolarmente (es. solo numeri) oppure possono essere combinati fra loro (es. numeri e simboli, oppure tutti e tre insieme).
// Dare all’utente anche la possibilità di permettere o meno la ripetizione di caratteri uguali.

const { createApp } = Vue;

createApp({
  data() {
    return {
      lunghezzaPassword: "",
      passwordGenerata: "",
      valido: false,          // flag per vede se l input è valido o meno
      sino: null,             //collegati alle scelte si  o no collegato al value di input radio
      lettere: false,
      numeri: false,
      simboli: false,         //collegati alla tipologia di password
      isChecked: null,       //mi serve per dare dinamicamente il checked ai checkbox
    }
  },
  methods: {
    click(scelta) {    //mi seleziona o deseleziona i checkbox
      this.scelta = !this.scelta
    },

    generaNumeroRandomico() {
      let numero = Math.floor(Math.random() * 10);
      let lettera = Math.floor(Math.random() * 1) < .5 ? Math.floor(Math.random() * (122 - 97 + 1)) + 97 : Math.floor(Math.random() * (90 - 65 + 1)) + 65;
      let simbolo = Math.floor(Math.random() * (64 - 33)) + 33;

      if (this.numeri && !this.lettere && !this.simboli) {
        console.log(numero);
        return numero
      } else if (this.lettere && !this.numeri && !this.simboli) {
        console.log(lettera);
        return lettera
      } else if (this.simboli && !this.numeri && !this.lettere) {
        console.log(simbolo);
        return simbolo
      } else if (this.simboli && this.numeri && !this.lettere) {
        return Math.random() < 0.5 ? numero : simbolo;
      } else if (this.simboli && this.lettere && !this.numeri) {
        return Math.random() < 0.5 ? lettera : simbolo;
      } else if (this.numeri && this.lettere && !this.simboli) {
        return Math.random() < 0.5 ? lettera : numero;
      } else {
        let casual = Math.floor(Math.random() * 3);  //un numero casuale da 1 a 3 x decidere quale pushare
        if (casual === 1) {
          return numero
        } else if (casual === 2) {
          return simbolo
        } else {
          return lettera
        }
      }
    },

    generaPassword() {
      this.passwordGenerata = "";   //reset a priori del campo input
      let caratteriUnici = [];
      if (this.lunghezzaPassword === '' ||
        isNaN(this.lunghezzaPassword) ||
        this.lunghezzaPassword > 10 ||
        this.lunghezzaPassword < 4 ||
        (!this.lettere &&
          !this.numeri &&
          !this.simboli)) {
        this.valido = true;        //compare subito errore,ma dopo 5 secondi scompare con riga 37
        setTimeout(() => {
          this.valido = false;
        }, 5000);
        this.lunghezzaPassword = ""; //reset input
      } else {
        if (this.sino === 'false') {
          for (let i = 0; i < this.lunghezzaPassword; i++) {
            let nuovoCarattere;
            do {
              nuovoCarattere = this.generaNumeroRandomico();
            } while (caratteriUnici.includes(nuovoCarattere));
            caratteriUnici.push(nuovoCarattere);
            if (nuovoCarattere < 10) {
              this.passwordGenerata += nuovoCarattere;
            } else {
              this.passwordGenerata += String.fromCharCode(nuovoCarattere);
            }
          }
        } else {
          for (let i = 0; i < this.lunghezzaPassword; i++) {
            const valoreUnicode = this.generaNumeroRandomico();
            if (valoreUnicode < 10) {
              this.passwordGenerata += valoreUnicode;
            } else {
              this.passwordGenerata += String.fromCharCode(valoreUnicode);
            }
          }
        }
        console.log(`La password generata è: ${this.passwordGenerata}`);
      }
    },


    // azzeriamo tutti i campi
    reset() {
      this.lunghezzaPassword = "";
      this.passwordGenerata = "";
      this.lettere = false;
      this.numeri = false;
      this.simboli = false;
      this.sino= null;
      this.isChecked = false;
      if (this.valido = false) {
        this.valido = true;
      }
    }

  }
}).mount('#app');