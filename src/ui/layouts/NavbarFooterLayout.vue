<script setup lang="ts">
import DesktopFooter from '../components/navigation/DesktopFooter.vue';
import DesktopNavbar from '../components/navigation/DesktopNavbar.vue';
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <DesktopNavbar :transparent-effect="false"> </DesktopNavbar>

    <q-page-container style="padding-top: 100px !important">
      <router-view />
    </q-page-container>

    <DesktopFooter></DesktopFooter>
  </q-layout>
</template>
