<template>
  <div class="col-md-6 col-xs-12">
    <q-card class="q-ma-xs">
      <q-card-section>
        <div class="text-center">{{ person }}</div>
        <div class="text-center" v-if="person2">({{ person2 }})</div>
        <div class="text-center text-weight-bolder">{{ contact }}</div>
      </q-card-section>
      <q-card-actions align="around">
        <q-btn flat round color="red" icon="call" type="a" :href="`tel:${contact}`"/>
        <q-btn flat round color="green" icon="chat" type="a" :href="`https://wa.me/${contact}`" target="_blank"/>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  props: ['person', 'person2', 'contact']
}
</script>

<style>
</style>
