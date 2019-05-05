<template>
  <div class="col-md-6 col-xs-12">
    <q-card class="q-ma-xs">
      <q-card-section>
        <div class="text-center">{{ person }}</div>
        <div class="text-center" v-if="person2">({{ person2 }})</div>
        <div class="text-center text-weight-bolder">{{ contact }}</div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="call" target="_blank" @click="makeCall"
          type="a" :href="`tel:${contact.replace('08','628')}`" />
        <q-btn flat round color="green" icon="chat" target="_blank" @click="sendMessage"
          type="a" :href="`https://wa.me/${contact.replace('08','628')}`" />
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
