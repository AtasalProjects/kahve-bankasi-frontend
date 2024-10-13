<script setup lang="ts">
const menu = [
  { label: 'Anasayfa' },
  { label: 'Hakkımızda' },
  { label: 'Kahveler' },
];

const social = [
  { label: 'Facebook', url: 'https://www.facebook.com/companyname' },
  { label: 'Twitter', url: 'https://www.twitter.com/companyname' },
  { label: 'Instagram', url: 'https://www.instagram.com/companyname' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/company/companyname' },
];

const contact = [
  { label: 'Email', value: 'info@company.com' },
  { label: 'Phone', value: '+1 234 567 890' },
  { label: 'Address', value: '123 Coffee St, City, Country' },
];
</script>

<template>
  <q-footer class="bg-grey-10 absolute">
    <div class="container q-px-md">
      <div class="row full-width full-height q-py-xs-xl" style="height: 300px">
        <div class="col-12 col-md-4">
          <div
            class="flex justify-start items-start full-height full-width q-pr-md-lg q-mb-xs-lg"
          >
            <h5 class="text-h4 font-weight-bold q-my-none">Kahve Bankası</h5>
            <p>Huzur ve konforunuz bizim için her zaman ilk sırada.</p>
          </div>
        </div>
        <div class="col-6 col-md-2">
          <p class="text-body1 font-weight-bold q-mb-md">Menü</p>
          <div v-for="link in menu" :key="link.label">
            <q-btn
              class="custom-button"
              flat
              color="primary"
              :label="link.label"
              :ripple="false"
              padding="xs xs"
              no-caps
            />
          </div>
        </div>
        <div class="col-6 col-md-2">
          <p class="text-body1 font-weight-bold q-mb-md">Sosyal</p>
          <div v-for="link in social" :key="link.label">
            <q-btn
              class="custom-button"
              flat
              color="primary"
              :label="link.label"
              :ripple="false"
              padding="xs xs"
              no-caps
            />
          </div>
        </div>
        <div class="col-6 col-md-3">
          <p class="text-body1 font-weight-bold q-mb-md">İletişim</p>
          <div v-for="link in contact" :key="link.label">
            <q-btn
              class="custom-button"
              flat
              color="primary"
              :label="link.label"
              :ripple="false"
              padding="xs xs"
              no-caps
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
