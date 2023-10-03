const dt = luxon.DateTime;

import { contacts } from './db.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      contacts,
      indexActive: 0
    }
  },

  methods: {

    lastItemArray(contact){
      return contact.messages[contact.messages.length - 1]
    },

    printClock(){
      this.nawTime = dt.now().setLocale('it').toLocaleString(dt.DATETIME_SHORT_WITH_SECONDS)
    },


    addMsg(){
      const newMsgObj = {
        date: this.printClock(),
        message: this.newMsg,
        status: 'sent'
      };

      this.contacts.messages.push(newMsgObj);
  
      this.newMsg = '';

    },


  },

  computed: {

  },
  
  mounted() {

  },

}).mount('#app')
