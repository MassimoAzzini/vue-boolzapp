const dt = luxon.DateTime;
import { contacts } from './db.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      indexActive: 0,
      search: '',
    }
  },

  methods: {
    // prendo l'ultimo oggetto dell'array (messaggio e data) da visualizzare sotto i contatti
    lastItemArray(contact){
      return contact.messages[contact.messages.length - 1]
    },

    // formattazione ora e giorno al momento del messaggio
    clock(){
      const nawTime = dt.now().toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)

      return nawTime
    },

    // nuovo messaggio scritto
    addMsg(){
      const newMsgObj = {
        date: this.clock(),
        message: this.newMsg,
        status: 'sent'
      };

      this.contacts[this.indexActive].messages.push(newMsgObj);
  
      this.newMsg = '';

      // timeout per riposta automatica
      setTimeout (this.answer, 1000);
    },

    // risposta automatica
    answer(){
      const newReceivedMsgObj = {
        date: this.clock(),
        message: 'Bravissimo!',
        status: 'received'
      };
      
      this.contacts[this.indexActive].messages.push(newReceivedMsgObj);
    },

    // se il nome del contatto NON contiene la lettere inserita la proprieta visible diventa false
    findContact(){
      this.contacts.map((contact, index) => {
        
        if(this.contacts[index].name.toLowerCase().includes(this.search.toLowerCase())){
          this.contacts[index].visible = true
        }else{this.contacts[index].visible = false}
      })
    },

    deleteMsg(index){
      this.contacts[this.indexActive].messages.splice(index, 1)
    }
  },
  
  computed: {
    // creo un array con i msg con propriteta visible = true per poi stamparli sull'HTML
    visibleContact(){
      return this.contacts.filter(contact => contact.visible == true)
    }
    
  },
  
  mounted() {

  },

}).mount('#app')
