<template>
  <div class="col-md-6 col-xs-12">
    <q-card class="q-ma-xs">
      <q-card-section>
        <div class="text-center">{{ person }}</div>
        <div class="text-center" v-if="person2">({{ person2 }})</div>
        <div class="text-center text-weight-bolder">{{ contact }}</div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="call" type="a" :href="`tel:${contact}`" target="_blank" @click="makeCall"/>
        <q-btn flat round color="green" icon="chat" type="a" :href="`https://wa.me/${contact}`" target="_blank" @click="sendMessage"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import gtm from './gtm'

export default {
  name: 'Contact',
  props: ['person', 'person2', 'contact'],
  methods: {
    makeCall () {
      gtm.logEvent('contact', 'call', this.contact)
    },
    sendMessage () {
      gtm.logEvent('contact', 'message', this.contact)
    }
  }
}
</script>

<style>
</style>
