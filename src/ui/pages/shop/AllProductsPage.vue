<script setup lang="ts"></script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">Tüm Ürünler</h4>

      <div class="row justify-center q-col-gutter-x-sm q-gutter-y-xl q-pt-xl">
        <q-intersection
          v-for="index in 60"
          :key="index"
          class="col-12 col-md-4 col-lg-4"
          transition="scale"
          style="height: 605px"
        >
          <q-card
            flat
            class="all-pointer-events transparent q-pa-sm"
            @click="$router.push('/products/osmanli-kahvesi')"
          >
            <q-img
              :src="`/src/assets/images/${index % 4 === 0 ? 1 : index % 4}.png`"
              class="q-mb-xl"
              fit="contain"
              ratio="1"
              height="427px"
              max-height="576px"
            />

            <q-card-section>
              <div class="text-h5 text-apple-ls">Osmanlı Kahvesi</div>
              <div class="text-subtitle1">Atasal Kahve</div>
              <div class="text-subtitle2 text-weight-light">₺456.00</div>
            </q-card-section>
          </q-card>
        </q-intersection>
      </div>
    </div>
  </q-page>
</template>
