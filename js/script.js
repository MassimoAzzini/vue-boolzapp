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

    // sentReceived(msg){
    //   (msg.status === 'sent') ? 'my-msg' : 'reply-msg'
    // }
    
    
  },
  computed: {

  },
  mounted() {

  },

}).mount('#app')
