<script setup lang="ts">
import DesktopFooter from '../components/navigation/DesktopFooter.vue';
import DesktopNavbar from '../components/navigation/DesktopNavbar.vue';
import MobileNavbar from '../components/navigation/MobileNavbar.vue';
</script>

<template>
  <q-layout :view="$q.screen.gt.md ? 'lHh Lpr lFf' : 'hHh Lpr lff'">
    <DesktopNavbar v-if="$q.screen.gt.md" :transparent-effect="false">
    </DesktopNavbar>
    <MobileNavbar v-else :transparent-effect="false"></MobileNavbar>

    <q-page-container style="padding-top: 100px !important">
      <router-view />
    </q-page-container>

    <DesktopFooter></DesktopFooter>
  </q-layout>
</template>
