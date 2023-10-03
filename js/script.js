const dt = luxon.DateTime;
import { contacts } from './db.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      indexActive: 0,
    }
  },

  methods: {

    lastItemArray(contact){
      return contact.messages[contact.messages.length - 1]
    },

    clock(){

      const nawTime = dt.now().toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)

      return nawTime

    },


    addMsg(){
      const newMsgObj = {
        date: this.clock(),
        message: this.newMsg,
        status: 'sent'
      };

      this.contacts[this.indexActive].messages.push(newMsgObj);
  
      this.newMsg = '';

    },


  },

  computed: {

  },
  
  mounted() {

  },

}).mount('#app')
