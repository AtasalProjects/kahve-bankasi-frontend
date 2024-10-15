<script setup lang="ts">
import { randomSrc } from 'src/constants/images';
import { onMounted, ref } from 'vue';
const slide = ref(1);
const imageSrcs = ref<string[]>([]);

onMounted(() => {
  imageSrcs.value = randomSrc(4);
});

const setBackground = (imgSrc: string) => {
  return {
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0)), url(${imgSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '800px',
  };
};
</script>

<template>
  <div>
    <q-carousel
      swipeable
      animated
      navigation
      transition-prev="jump-left"
      transition-next="jump-right"
      v-model="slide"
      infinite
      height="800px"
    >
      <q-carousel-slide
        :name="1"
        :style="setBackground(imageSrcs[0])"
        class="text-center bg-image"
      >
        <div
          class="column no-wrap flex justify-center items-center full-width full-height"
        >
          <!-- style="padding-bottom: 5.3rem" -->

          <h1 class="store-title text-apple-ls">
            Kahve Bankası:
            <br />
            Midyat'taki Özel Deneyim, Evinizde
          </h1>
          <q-btn
            class="q-px-xl q-py-xs"
            label="Detaylar"
            color="white"
            :size="$q.screen.gt.md ? 'xl' : 'lg'"
            outline
            no-caps
            to="/about"
          />
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="2"
        :style="setBackground(imageSrcs[1])"
        class="column no-wrap flex-center bg-image"
      >
        <h1 class="store-title text-apple-ls">
          2016'dan Beri Midyat'a Kahve Sunuyoruz
        </h1>
        <div>
          <q-btn
            class="q-px-xl q-py-xs q-mr-md"
            label="Hikayemiz"
            color="white"
            :size="$q.screen.gt.md ? 'xl' : 'md'"
            outline
            no-caps
          />
          <q-btn
            class="q-px-xl q-py-xs"
            label="Konumumuz"
            color="white"
            :size="$q.screen.gt.md ? 'xl' : 'md'"
            outline
            no-caps
          />
        </div>
      </q-carousel-slide>

      <q-carousel-slide
        :name="3"
        :style="setBackground(imageSrcs[2])"
        class="column no-wrap flex-center bg-image"
      >
        <h1 class="store-title text-apple-ls">Her Yudumda Farklı Bir Tat</h1>
      </q-carousel-slide>

      <q-carousel-slide
        :name="4"
        :style="setBackground(imageSrcs[3])"
        class="column no-wrap flex-center bg-image"
      >
        <h1 class="store-title text-apple-ls">Lezzet Dolu Molalar</h1>
        <q-btn
          class="q-px-xl q-py-xs"
          label="İncele"
          color="white"
          size="xl"
          outline
          no-caps
        />
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<style scoped>
.store-title {
  font-size: 80px;
  font-weight: normal;
  color: white;
}

@media (max-width: 960px) {
  .store-title {
    font-size: 40px;
    line-height: 4rem;
  }
}
</style>
