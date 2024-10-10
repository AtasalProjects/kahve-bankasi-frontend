<script setup lang="ts">
import DesktopNavbar from 'components/navigation/DesktopNavbar.vue';
import MainBackgroundCarousel from 'components/partials/MainBackgroundCarousel.vue';
import DesktopFooter from 'components/navigation/DesktopFooter.vue';

defineOptions({
  name: 'MainLayout',
});
</script>

<template>
  <q-layout view="lHh Lpr lFf">
    <div class="carousel-background">
      <MainBackgroundCarousel></MainBackgroundCarousel>
    </div>

    <DesktopNavbar> </DesktopNavbar>

    <q-page-container style="padding-top: 36px !important">
      <router-view />
    </q-page-container>

    <DesktopFooter></DesktopFooter>
  </q-layout>
</template>

<style scoped>
.carousel-background {
  top: 0;
  left: 0;
  right: 0;
  height: 800px;
  z-index: -1;
  overflow: hidden;
}
</style>
