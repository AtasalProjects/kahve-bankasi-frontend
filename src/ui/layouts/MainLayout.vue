<script setup lang="ts">
import DesktopNavbar from 'components/navigation/DesktopNavbar.vue';
import MainBackgroundCarousel from 'components/partials/MainBackgroundCarousel.vue';
import DesktopFooter from 'components/navigation/DesktopFooter.vue';
import MobileNavbar from '../components/navigation/MobileNavbar.vue';

defineOptions({
  name: 'MainLayout',
});
</script>

<template>
  <q-layout :view="$q.screen.gt.md ? 'lHh Lpr lFf' : 'hHh Lpr lff'">
    <div class="carousel-background">
      <MainBackgroundCarousel></MainBackgroundCarousel>
    </div>

    <DesktopNavbar v-if="$q.screen.gt.md"> </DesktopNavbar>
    <MobileNavbar v-else></MobileNavbar>

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
