<script setup lang="ts">
import { useContentStore } from 'stores/content';

const contentStore = useContentStore();
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-left">
    <div class="container q-px-lg q-mb-xl">
      <h4
        class="text-apple-ls q-mb-md q-mb-md-xl text-center"
        style="font-size: 44px"
      >
        İletişim
      </h4>

      <h4 class="text-h4 text-apple-ls q-mb-md">İletişim Bilgilerimiz</h4>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10 q-mb-xl`"
      >
        Fikirleriniz, önerileriniz, siparişleriniz, şikayetleriniz ve daha
        fazlası için ne zaman isterseniz bizimle iletişime geçebilirsiniz.
      </p>

      <div
        v-for="content in contentStore.getByCategory('contact')"
        :key="content.id"
        class="text-h6 text-weight-light inline-block full-width"
      >
        <b class="feature-width text-weight-bold text-grey-10 inline-block">
          {{ content.head }}
        </b>
        <span>{{ content.body }}</span>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.feature-width {
  width: 100px;
  vertical-align: top;
}

.value {
  max-width: calc(100% - 120px);
  vertical-align: top;
  word-break: break-word;
}
</style>
