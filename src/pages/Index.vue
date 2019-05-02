<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card text-white bg-green-10 q-ma-xs">
          <q-card-section>
            <div class="text-h6">{{ $store.getters['sheet/TOTAL_UANG'].plus | money }}</div>
            <div class="text-subtitle2">Total Pendapatan</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-xs-12">
        <q-card class="my-card text-white bg-red-10 q-ma-xs">
          <q-card-section>
            <div class="text-h6">{{ $store.getters['sheet/TOTAL_UANG'].minus | money }}</div>
            <div class="text-subtitle2">Total Pengeluaran</div>
          </q-card-section>
        </q-card>
      </div>

      <div class="col-md-4 col-xs-12">
        <q-card class="my-card text-white bg-blue-10 q-ma-xs">
          <q-card-section>
            <div class="text-h6">{{ $store.getters['sheet/TOTAL_UANG'].saldo | money }}</div>
            <div class="text-subtitle2">Saldo Akhir</div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import mixin from './PageMixin'

export default {
  name: 'PageIndex',
  mixins: [mixin]
}
</script>
