<script setup lang="ts">
import HomeCoffeeCards from 'components/partials/home/HomeCoffeeCards.vue';

defineOptions({
  name: 'IndexPage',
});
</script>

<template>
  <q-page class="q-px-lg q-mb-xl full-height">
    <div>
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
    </div>
    <div class="text-center" style="margin-bottom: 4.3em; padding-top: 75px">
      <h2 class="text-apple-ls">Yeni Çıkanlar</h2>
      <q-btn label="Hepsine Göz At" outline no-caps to="/shop/coffee"></q-btn>
      <HomeCoffeeCards class="q-mt-xl"></HomeCoffeeCards>
    </div>

    <q-separator color="black" spaced />

    <div class="text-center" style="padding-top: 75px">
      <div class="container">
        <h4 class="text-h4 text-apple-ls">
          Dünyanın dört bir yanındaki en iyi kavurucularla iş birliği yapmaktan
          gurur duyuyoruz.
        </h4>
        <p class="text-h6 text-weight-light">
          Kahve Bankası olarak, müşterilerimize farklı kahve seçenekleri
          sunmaktan ve onları bilinçlendirmekten büyük keyif alıyoruz. Kendi
          kahvemizi kavurmanın yanı sıra, aynı tutkuya sahip kavurucularla iş
          birliği yaparak müşterilerimize yeni tatlar keşfetme şansı tanıyoruz.
          Ekibimiz ise, bu deneyimleri paylaşmak ve bilgilerini aktarmaktan
          mutluluk duyuyor.
        </p>
      </div>
      <q-img
        class="q-mt-md"
        src="https://img.freepik.com/premium-photo/background-texture-brick-wall-old-brick-black-white-photo-with-vignette_98725-2207.jpg"
        height="500px"
      >
        <div
          class="absolute-full text-h3 text-apple-ls flex flex-center"
          style="
            background: linear-gradient(
              to bottom,
              rgba(0, 0, 0, 0.4),
              rgba(0, 0, 0, 0.3)
            );
          "
        >
          Kahve Bankası, şehrin en iyi kahve seçkisini sunarak dünyanın saygın
          kavurucularının kahvelerini sergilemektedir.
        </div>
      </q-img>
    </div>

    <div class="container text-center">
      <h4 class="text-h3 q-mb-md text-apple-ls" style="margin-top: 125px">
        Bizimle iletişime geçin
      </h4>
      <p class="text-body1">
        Fikirleriniz, önerileriniz, siparişleriniz ve daha fazlası için ne zaman
        isterseniz bizimle iletişime geçebilirsiniz.
      </p>
      <q-btn label="İletişim Bilgilerimiz" outline no-caps></q-btn>
    </div>
  </q-page>
</template>

<style scoped></style>
