<script setup lang="ts"></script>

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

      <div class="text-h6 text-weight-light inline-block full-width">
        <b class="feature-width text-weight-bold text-grey-10 inline-block">
          Telefon
        </b>
        <span>+90 551 144 8492</span>
      </div>
      <div class="text-h6 text-weight-light inline-block full-width">
        <b class="feature-width text-weight-bold text-grey-10 inline-block">
          Email
        </b>
        <span class="inline-block">info@kahvebankasi.com</span>
      </div>
      <div class="text-h6 text-weight-light full-width" style="display: block">
        <b class="feature-width text-weight-bold text-grey-10 inline-block">
          Adres
        </b>
        <span class="inline-block value">
          Uzak mh. Ücra sk. no: 12, kat: 0. Midyat/Mardin.
        </span>
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
