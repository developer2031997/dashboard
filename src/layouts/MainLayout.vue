<template>
  <q-layout view="lHh LpR fff">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          Dashboard
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Quasar Admin Panel
        </q-item-label>

        <EssentialLink :links="linksList" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import 'leaflet/dist/leaflet.css';


defineOptions({
  name: 'MainLayout'
})

const linksList = [
  {
    title: 'Home',
    icon: 'home',
    path: '#/home'
  },
  {
    title: 'Map',
    icon: 'map',
    path: '#/map'
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
