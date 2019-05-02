<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header class="text-center bold">Laporan Keuangan</q-item-label>

      <q-separator spaced/>

      <q-item>
        <q-item-section style="color: #757575">
            <q-item-label>Pemasukan</q-item-label>
            <q-item-label>Pengeluaran</q-item-label>
            <q-item-label class="text-bold">Saldo</q-item-label>
        </q-item-section>
        <q-item-section style="color: black" side top>
            <q-item-label>{{ $store.getters['sheet/TOTAL_UANG'].plus | money }}</q-item-label>
            <q-item-label>{{ $store.getters['sheet/TOTAL_UANG'].minus | money }}</q-item-label>
            <q-item-label class="text-bold">{{ $store.getters['sheet/TOTAL_UANG'].saldo | money }}</q-item-label>
        </q-item-section>
      </q-item>

      <div v-for="data in $store.state.sheet.uang" :key="data.id">
        <q-separator spaced />

        <q-item>
          <q-item-section>
            <q-item-label>
              {{ data.tanggal }}
              <q-badge :color="data.total < 0 ? 'red' : 'blue'" class="float-right">{{ data.total | money }}</q-badge>
            </q-item-label>
            <q-item-label caption lines="2">
              <span style="color: black; font-weight: 600;">{{ data.orang }}</span> {{ data.keterangan }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-list>
  </q-page>
</template>

<script>
import mixin from './PageMixin'

export default {
  name: 'ReportPage',
  mixins: [mixin]
}
</script>

<style>
</style>
