<template>
  <q-page padding>
    <div class="row">
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Tempat dan Tanggal Reuni</div>
          </q-card-section>
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe width="100%" height="100%" id="gmap_canvas"
                src="https://maps.google.com/maps?q=-7.803399%2C112.734036&t=&z=17&ie=UTF8&iwloc=&output=embed"
                frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
              </iframe>
            </div>
          </div>
          <q-card-section>
            <div class="row">
              <div class="col-3 text-subtitle1">Hari/Tanggal</div>
              <div class="col-9 text-subtitle2">Ahad, 09 Juni 2019</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Waktu</div>
              <div class="col-9 text-subtitle2">09.00 - Selesai</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Tempat</div>
              <div class="col-9 text-subtitle2">Rumah Bapak Suud, Jl. Pasar, Purwodadi, Pasuruan</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Rekening Pembayaran</div>
          </q-card-section>
          <q-card-section>
            <div class="text-subtitle1">BRI: <b>6478-01-005653-53-4</b> an. MAKHBUBY FIRMANSYAH </div>
            <div class="text-subtitle1">BNI: <b>0297967807</b> an. Cahya Bagus Sanjaya </div>
            <div class="text-subtitle1">BCA: <b>8945035681</b> an. Cahya Bagus Sanjaya </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12">
        <q-card class="my-card q-ma-xs">
          <q-card-section>
            <div class="text-h6 text-center">Kontak Informasi</div>
          </q-card-section>
          <q-card-section>
            <div class="col-3 text-subtitle2 text-weight-bolder">Koordinator Keluarga</div>
            <div class="row">
              <div class="col-3 text-subtitle1">Bapak Anwar</div>
              <div class="col-9 text-subtitle2">089678787676 (Mahbubi)</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Bapak Asy'ari</div>
              <div class="col-9 text-subtitle2">08121686533 (Suryono)</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Bapak Ismail</div>
              <div class="col-9 text-subtitle2">082336966541 (Hidayat)</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Bapak Kosim</div>
              <div class="col-9 text-subtitle2">082333262886 (Tofan)</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Hj. Rochmah</div>
              <div class="col-9 text-subtitle2">082142632122 (Zainul Abidin)</div>
            </div>
            <div class="row">
              <div class="col-3 text-subtitle1">Siti Aisya</div>
              <div class="col-9 text-subtitle2">082245688668 (Basor)</div>
            </div>
            <q-separator />
            <div class="col-3 text-subtitle2 text-weight-bolder">Konfirmasi Kehadiran</div>
            <div class="row">
              <div class="col-5 text-subtitle1">Mahbubi</div>
              <div class="col-7 text-subtitle2">089678787676</div>
            </div>
            <div class="row">
              <div class="col-5 text-subtitle1">Cahy Bagus Sanjaya</div>
              <div class="col-7 text-subtitle2">089507614002</div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
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
