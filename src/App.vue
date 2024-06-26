<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey">
    <q-header class="bg-cream">
      <q-toolbar>
        <q-toolbar-title>
          UJIAN AKHIR SEMESTER PRAKTIKUM PBK
        </q-toolbar-title>
        <div class="q-gutter-md row justify-center">
          <q-btn-dropdown
            flat
            label="PROYEK RADHIF FAUZI"
            color="BLACK"
            no-caps
          >
            <q-list>
              <q-item to="/tugas1" clickable> TUGAS 1 </q-item>
              <q-item to="/tugas2" clickable> TUGAS 2 </q-item>
              <q-item to="/tugas3" clickable> TUGAS 3 </q-item>
              <q-item to="/tugas4" clickable> TUGAS 4 </q-item>
              <q-item to="/tugas5" clickable> TUGAS 5 </q-item>
              <q-item to="/tugas6" clickable> TUGAS 6 </q-item>
              <q-item to="/tugas7" clickable> TUGAS 7 </q-item>
            </q-list>
          </q-btn-dropdown>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container class="bg-grey-4">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
body {
  font-family: 'Source Sans Pro', sans-serif;
}

.bg-cream {
  background-color: #FFFDD0;
}
</style>
