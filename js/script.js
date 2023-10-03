import { contacts } from './db.js';

const { createApp } = Vue

createApp({
  data() {
    return {
      
      contacts
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  mounted() {
    console.log(contacts.name)
    
  },

}).mount('#app')
