<script setup lang="ts"></script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="container q-px-lg q-mb-xl">
      <h4 class="text-h3 text-apple-ls q-mb-lg q-mb-md-xl">Sizi Bekliyoruz</h4>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h4' : 'text-h5'
        } text-apple text-weight-regular text-grey-10`"
      >
        "Kahve Bankası, dünyanın dört bir yanından seçkin kavurucuların
        kahvelerini sunarak şehrin en iyi kahve seçeneklerini her gün sizlerle
        buluşturuyor."
      </p>
    </div>
    <q-img
      src="~assets/images/about-s1.jpg"
      :ratio="$q.screen.gt.md ? '2.85' : '1.25'"
    >
      <div
        v-if="$q.screen.gt.md"
        class="absolute-top-left transparent text-subtitle2 q-ml-xl q-mt-xl"
      >
        <q-card
          class="bg-primary text-black text-left q-pa-md"
          style="width: 410px"
          square
        >
          <q-card-section>
            <p class="text-h4 text-apple-ls">Cumhuriyet Caddesi No:12</p>
            <div class="text-subtitle1 text-grey-10">
              Tarihi Midyat Konuk Evi'nin Yanı
              <br />Midyat, Mardin 47500
            </div>
          </q-card-section>

          <q-card-section
            ><div class="text-grey-9">6 gün açık, 07.00-23.00</div>
          </q-card-section>
          <q-card-section>
            <q-btn
              size="md"
              color="black"
              label="Yol Tarifi"
              padding="md lg"
              :ripple="false"
              unelevated
              no-caps
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
      <div v-else class="absolute-left transparent text-subtitle2">
        <q-card
          class="bg-primary text-black text-left q-pa-md"
          style="width: 303px"
          square
        >
          <q-card-section>
            <p class="text-h4 text-apple-ls">Cumhuriyet Caddesi No:12</p>
            <div class="text-subtitle1 text-grey-10">
              Tarihi Midyat Konuk Evi'nin Yanı
              <br />Midyat, Mardin 47500
            </div>
          </q-card-section>

          <q-card-section
            ><div class="text-grey-9">6 gün açık, 07.00-23.00</div>
          </q-card-section>
          <q-card-section>
            <q-btn
              size="md"
              color="black"
              label="Yol Tarifi"
              padding="md lg"
              :ripple="false"
              unelevated
              no-caps
            ></q-btn>
          </q-card-section>
        </q-card>
      </div>
    </q-img>
  </q-page>
</template>
