<script setup lang="ts">
import { useContentStore } from 'src/stores/content';

const menu = [
  { label: 'Anasayfa', to: '/' },
  { label: 'Hakkımızda', to: '/about' },
  { label: 'Ürünlerimiz', to: '/shop/all' },
  { label: 'İletişim', to: '/contact' },
];

const contentStore = useContentStore();
</script>

<template>
  <q-footer class="bg-grey-10 absolute">
    <div class="container q-px-md">
      <div class="row full-width full-height q-py-xs-xl" style="height: 300px">
        <div class="col-12 col-md-4">
          <div
            class="flex-row justify-start items-start full-height full-width q-pr-md-lg q-mb-xs-lg"
          >
            <h5 class="col text-h4 font-weight-bold q-mt-none q-mb-lg">
              Kahve Bankası
            </h5>
            <p class="col text-grey-5">
              Huzur ve konforunuz bizim için her zaman ilk sırada.
            </p>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <p class="text-h4 font-weight-bold q-mb-md text-apple-ls">Menü</p>
          <div v-for="link in menu" :key="link.label">
            <q-btn
              class="custom-button"
              flat
              color="primary"
              :label="link.label"
              :ripple="false"
              padding="xs xs"
              no-caps
              :to="link.to"
            />
          </div>
        </div>
        <div class="col-6 col-md-2">
          <p class="text-h4 font-weight-bold q-mb-md text-apple-ls">Sosyal</p>
          <div
            v-for="content in contentStore.getByCategory('social')"
            :key="content.id"
          >
            <q-btn
              class="custom-button"
              flat
              color="primary"
              :label="content.head || ''"
              :ripple="false"
              padding="xs xs"
              no-caps
              target="_blank"
              :href="content.link || ''"
            />
          </div>
        </div>
        <div class="col-6 col-md-3">
          <p class="text-h4 font-weight-bold q-mb-md text-apple-ls">İletişim</p>
          <div
            v-for="content in contentStore.getByCategory('contact')"
            :key="content.id"
          >
            <q-btn
              class="custom-button"
              flat
              color="primary"
              :label="content.head || ''"
              :icon="content.icon || ''"
              :ripple="false"
              padding="xs xs"
              no-caps
              target="_blank"
              :href="content.link || ''"
            />
          </div>
        </div>
      </div>
    </div>
    <q-toolbar class="q-pa-none q-ma-none bg-secondary text-center">
      <div class="text-black full-width">
        Designed by
        <a
          class="text-none text-black text-decoration-none font-weight-bold font-italic ps-1"
          target="_blank"
          href="https://dagbfatih.com"
        >
          Fatih Dağ
        </a>
      </div>
    </q-toolbar>
  </q-footer>
</template>

<style scoped>
.custom-button {
  color: rgba(255, 255, 255, 0.6) !important;
  transition: color 0.3s ease !important;
  background-color: transparent !important;
}

.custom-button:hover,
.custom-button:focus {
  color: rgba(255, 255, 255, 1) !important;
  background-color: transparent !important;
}
</style>
