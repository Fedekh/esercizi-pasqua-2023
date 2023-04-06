// Descrizione
// Dobbiamo creare una pagina che permetta ai nostri utenti di utilizzare il nostro generatore di password (abbastanza) sicure.

// Milestone 1
// Creare un input dove l'utente inserisce la lunghezza della password. Al click sull'invia,
//  l'app genera una password casuale (composta da lettere, lettere maiuscole, numeri e simboli).
// La password generata viene visulizzata nella pagina.


const { createApp } = Vue;

createApp({
  data() {
    return {
      lunghezzaPassword: "",
      passwordGenerata: "",
      valido: false  // flag per vede se l input è valido o meno
    }
  },
  methods: {
    generaNumeroRandomico() {
      // genero un numero casuale da 0 a 9
      let randomNum = Math.floor(Math.random() * 10);
      // genero un numero casuale da 33 a 122 (per gestire codici unicode, lettere + caratteri speciali)
      let randomUnicode = Math.floor(Math.random() * (122 - 33 + 1)) + 33;
      // return con un altra randomizzazione, faccio il testa o croce tra unicode e numero
      return Math.random() < 0.5 ? randomNum : randomUnicode;

    },

    generaPassword() {
      this.passwordGenerata = "";

      if (this.lunghezzaPassword === '' || isNaN(this.lunghezzaPassword) || this.lunghezzaPassword.length > 14 || this.lunghezzaPassword < 4) {
        this.valido = true; //compare subito errore,ma dopo 2 secondi scompare con riga 37
        setTimeout(() => {
          this.valido = false;
        }, 2000);
        this.lunghezzaPassword = ""; //reset input
      } else {
        for (let i = 0; i < this.lunghezzaPassword; i++) {
          const valoreUnicode = this.generaNumeroRandomico();
          if (valoreUnicode < 10) {
            this.passwordGenerata += valoreUnicode;
          } else {
            this.passwordGenerata += String.fromCharCode(valoreUnicode);
          }
        }
        console.log(this.passwordGenerata);
        this.passwordGenerata = this.passwordGenerata.join(""); //levo ogni spazio tra i caratteri della stringa
        this.lunghezzaPassword = ""; //reset input
      }
    },

    reset() {
      this.lunghezzaPassword = "";
      this.passwordGenerata = "";
      if (this.valido = false) {
        this.valido = true;
      }
    }
  }
}).mount('#app');