<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          {{ $route.meta.title || 'Dashboard' }}
        </q-toolbar-title>

        <div>Reuni Bani Awi</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>Menu Utama</q-item-label>
        <q-item clickable to="/" exact>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
            <q-item-label caption>Ringkasan Informasi</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/attendance" exact>
          <q-item-section avatar>
            <q-icon name="motorcycle" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Kehadiran</q-item-label>
            <q-item-label caption>Informasi Kehadiran dan Iuran</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/report" exact>
          <q-item-section avatar>
            <q-icon name="attach_money" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Laporan Keuangan</q-item-label>
            <q-item-label caption>Laporan keluar Masuk Keuangan</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/info" exact>
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Informasi</q-item-label>
            <q-item-label caption>Informasi Penting</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL
  }
}
</script>

<style>
</style>
