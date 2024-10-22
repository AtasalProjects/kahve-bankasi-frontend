<script setup lang="ts">
import img1 from 'assets/images/1.png';
import img2 from 'assets/images/2.png';
import img3 from 'assets/images/3.png';
import img4 from 'assets/images/4.png';
import mix from 'assets/images/cookies/mix.png';
import nuts from 'assets/images/cookies/nuts.png';
import sunflowers from 'assets/images/cookies/sunflower_seeds.png';
import walnuts from 'assets/images/cookies/walnuts.png';

import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

type Category = 'coffee' | 'cookie' | 'all';

const route = useRoute();

const categoryParam = ref<string>(route.params.category as string);

watch(
  () => route.params,
  (n) => {
    categoryParam.value = n.category as string;
  }
);

const category = computed(() => {
  if ((categoryParam.value as Category) === 'coffee') return 'Kahveler';
  else if ((categoryParam.value as Category) === 'cookie') return 'Çerezler';

  return 'Tüm Ürünler';
});

const coffees = [img1, img2, img3, img4];
const cookies = [mix, nuts, sunflowers, walnuts];
const images = [...coffees, ...cookies];

const current = ref(1);

watch(current, () => {
  scroll(0, 0);
});

function scroll(x: number, y: number) {
  window.scrollTo({ top: x, left: y, behavior: 'smooth' });
}

function getData(page: number, count: number = 20) {
  return Array.from(Array(count - Math.floor(Math.random() * 5)).keys());
}
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">{{ category }}</h4>

      <div class="row justify-center q-col-gutter-x-sm q-gutter-y-xl q-pt-xl">
        <q-intersection
          v-for="index in getData(
            current,
            categoryParam === 'cookie' || categoryParam === 'coffee' ? 10 : 20
          )"
          :key="index"
          class="col-12 col-md-4 col-lg-4"
          transition="scale"
          style="height: 605px"
        >
          <q-card
            v-if="categoryParam === 'coffee'"
            flat
            class="all-pointer-events transparent q-pa-sm"
            @click="$router.push('/products/' + (index % 4))"
          >
            <q-img
              :src="`${coffees[index % 4]}`"
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
          <q-card
            v-else-if="categoryParam === 'cookie'"
            flat
            class="all-pointer-events transparent q-pa-sm"
            @click="$router.push('/products/' + (index % 4))"
          >
            <q-img
              :src="`${cookies[index % 4]}`"
              class="q-mb-xl"
              fit="contain"
              ratio="1"
              height="427px"
              max-height="576px"
            />

            <q-card-section>
              <div class="text-h5 text-apple-ls">Çerez</div>
              <div class="text-subtitle1">Kahve Bankası</div>
              <div class="text-subtitle2 text-weight-light">₺155.00</div>
            </q-card-section>
          </q-card>

          <q-card
            v-else
            flat
            class="all-pointer-events transparent q-pa-sm"
            @click="$router.push('/products/' + (index % 4))"
          >
            <q-img
              :src="`${images[index % 8]}`"
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

        <q-pagination
          v-model="current"
          class="col-12 flex-center"
          :max="5"
          direction-links
          unelevated
          color="black"
          active-color="secondary"
          size="lg"
        />
      </div>
    </div>

    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
      style="transform: translate(0px, 0px) !important"
    >
      <q-btn
        class="q-mb-md"
        icon="mdi-chevron-up"
        color="grey-9"
        round
        size="xl"
        @click="scroll(0, 0)"
      />
    </q-page-sticky>
  </q-page>
</template>
