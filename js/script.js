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

    }
    
    
  },
  computed: {

  },
  mounted() {

  },

}).mount('#app')
