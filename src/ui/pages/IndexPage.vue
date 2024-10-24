<script setup lang="ts">
import HomeCoffeeCards from 'components/partials/home/HomeCoffeeCards.vue';
import { randomSrc } from 'src/constants/images';

defineOptions({
  name: 'IndexPage',
});

const img = randomSrc(1)[0];
</script>

<template>
  <q-page class="q-px-lg q-mb-xl full-height">
    <!-- <div>
      <div class="q-col-gutter-md row items-start">
        <div class="col-12 col-md-4">
          <q-img
            src="https://i.etsystatic.com/25882723/r/il/f8518c/4732300273/il_570xN.4732300273_9ugy.jpg"
            height="395px"
            fit="cover"
          >
            <div
              class="absolute-full"
              style="
                background: linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.1)
                );
              "
            >
              <div class="absolute-bottom text-subtitle1 text-center q-pa-md">
                <q-btn
                  class="q-py-sm"
                  label="Vizyonumuz"
                  color="white"
                  size="md"
                  outline
                  no-caps
                />
              </div>
            </div>
          </q-img>
        </div>

        <div class="col-12 col-md-4">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            height="395px"
            fit="cover"
          >
            <div
              class="absolute-full text-subtitle1 text-center"
              style="
                background: linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.1)
                );
              "
            >
              <div class="absolute-bottom text-center q-pa-md">
                <q-btn
                  class="q-py-sm"
                  label="Vizyonumuz"
                  color="white"
                  size="md"
                  outline
                  no-caps
                />
              </div>
            </div>
          </q-img>
        </div>
        <div class="col-12 col-md-4">
          <q-img
            src="https://cdn.quasar.dev/img/parallax2.jpg"
            height="395px"
            fit="cover"
          >
            <div
              class="absolute-full text-subtitle1 text-center"
              style="
                background: linear-gradient(
                  to top,
                  rgba(0, 0, 0, 0.6),
                  rgba(0, 0, 0, 0.1)
                );
              "
            >
              <div class="absolute-bottom text-center q-pa-md">
                <q-btn
                  class="q-py-sm"
                  label="Vizyonumuz"
                  color="white"
                  size="md"
                  outline
                  no-caps
                />
              </div>
            </div>
          </q-img>
        </div>
      </div>
    </div> -->
    <div class="text-center" style="margin-bottom: 4.3em">
      <!-- padding-top: 75px -->
      <h2 class="text-apple-ls">Yeni Çıkanlar</h2>
      <q-btn label="Hepsine Göz At" outline no-caps to="/shop/coffee"></q-btn>
      <HomeCoffeeCards class="q-mt-xl"></HomeCoffeeCards>
    </div>

    <q-separator color="black" spaced />

    <div class="text-center" style="padding-top: 75px">
      <div class="container">
        <h4 class="text-h4 text-apple-ls">
          Kahve Deneyiminizi Zenginleştiren Seçenekler
        </h4>
        <p class="text-h6 text-weight-light">
          Biz müşterilerimize çeşitli kahve seçenekleri sunmaktan ve onlarla bu
          lezzetleri paylaşmaktan büyük keyif alıyoruz. Kendi kahvemizi özenle
          kavurmanın yanı sıra, farklı tatlar deneme fırsatı sunuyoruz. Bu
          keyifli anları sizinle paylaşmak ve kahve deneyimlerinizi
          zenginleştirmekten memnun oluruz.
        </p>
      </div>
      <q-img class="q-mt-md" :src="img" height="500px">
        <div
          class="absolute-full text-h4 text-md-h3 text-apple-ls flex flex-center"
          style="
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.3)
            );
          "
        >
          Kahve Bankası, özenle seçilmiş kahve çeşitleriyle her damak zevkine
          hitap edebilmeyi amaçlıyor.
        </div>
      </q-img>
    </div>

    <div class="container text-center">
      <h4 class="text-h3 q-mb-md text-apple-ls" style="margin-top: 125px">
        Bizimle iletişime geçin
      </h4>
      <p class="text-body1">
        Fikirleriniz, önerileriniz, siparişleriniz ve daha fazlası için
        dilediğiniz zaman bizimle iletişime geçebilirsiniz.
      </p>
      <q-btn
        label="İletişim Bilgilerimiz"
        outline
        no-caps
        to="/contact"
      ></q-btn>
    </div>
  </q-page>
</template>

<style scoped></style>
