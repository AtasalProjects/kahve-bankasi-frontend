<script setup lang="ts">
import img1 from 'assets/images/1.png';
import img2 from 'assets/images/2.png';
import img3 from 'assets/images/3.png';
import img4 from 'assets/images/4.png';

const images = [img1, img2, img3, img4];
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">Kahveler</h4>

      <div class="row justify-center q-col-gutter-x-sm q-gutter-y-xl q-pt-xl">
        <q-intersection
          v-for="index in 60"
          :key="index"
          class="col-12 col-md-4 col-lg-4"
          transition="scale"
          style="height: 605px"
        >
          <q-card flat class="transparent q-pa-sm">
            <q-img
              :src="`${images[index % 4]}`"
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
