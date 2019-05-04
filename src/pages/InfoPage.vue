<template>
  <q-page padding>
    <q-card class="q-ma-xs">
      <q-card-section>
        <div class="text-h6 text-center">Lokasi dan Waktu</div>
      </q-card-section>
      <q-separator />
      <div class="mapouter">
        <div class="gmap_canvas">
          <iframe width="100%" height="100%" id="gmap_canvas"
            src="https://maps.google.com/maps?q=-7.803399%2C112.734036&t=&z=17&ie=UTF8&iwloc=&output=embed"
            frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </div>
      <q-separator />
      <q-card-section>
        <div class="text-subtitle1 text-center">Ahad, 09 Juni 2019, Jam 09.00 WIB</div>
        <div class="text-subtitle2 text-center">Rumah Bapak Suud: Jl. Pasar, Purwodadi, Pasuruan</div>
      </q-card-section>
    </q-card>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <q-card class="q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Rekening Pembayaran</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-center text-subtitle1">Bank Rakyat Indonesia (BRI)</div>
            <div class="text-center text-subtitle2 text-weight-bolder">6478-01-005653-53-4</div>
            <div class="text-center text-body1">Makhbuby Firmansyah</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-center text-subtitle1">Bank Central Asia (BCA)</div>
            <div class="text-center text-subtitle2 text-weight-bolder">8945035681</div>
            <div class="text-center text-body1">Cahya Bagus Sanjaya</div>
          </q-card-section>
          <q-separator />
          <q-card-section>
            <div class="text-center text-subtitle1">Bank Nasional Indonesia (BNI)</div>
            <div class="text-center text-subtitle2 text-weight-bolder">0297967807</div>
            <div class="text-center text-body1">Cahya Bagus Sanjaya</div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-card class="q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Kontak Informasi</div>
          </q-card-section>
          <div class="row">
            <contact person="Cahya Bagus Sanjaya" contact="089507614002" />
            <contact person="Mahbubi" contact="089678787676" />
          </div>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-card class="q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Koordinator Keluarga</div>
          </q-card-section>
          <div class="row">
            <contact person="Bapak Anwar" person2="Mahbubi" contact="089678787676" />
            <contact person="Bapak Asy'ari" person2="Suryono" contact="08121686533" />
          </div>
          <div class="row">
            <contact person="Bapak Ismail" person2="Hidayat" contact="082336966541" />
            <contact person="Bapak Kosim" person2="Tofan" contact="082333262886" />
          </div>
          <div class="row">
            <contact person="Hj. Rochmah" person2="Zainul Abidin" contact="082142632122" />
            <contact person="Siti Aisya" person2="Basor" contact="082245688668" />
          </div>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Contact from 'src/components/Contact'

export default {
  name: 'InfoPage',
  components: {
    'contact': Contact
  }
}
</script>

<style scoped>
  .mapouter{
    position:relative;
    text-align:right;
    height:100%;
    width:100%;
  }
  .gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:400px;
    width:100%;
  }
</style>
