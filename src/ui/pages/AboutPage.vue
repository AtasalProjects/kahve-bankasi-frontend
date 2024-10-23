<script setup lang="ts">
import img1 from 'assets/images/about1.jpg';
import img2 from 'assets/images/about2.jpg';
import img3 from 'assets/images/about3.jpg';

const images = [
  {
    text: "Kahve Bankası, kahvenin eşsiz tadını Mardin'in kadim tarihi dokusuyla buluşturan sıcak ve samimi bir mekan. Kahveye olan tutkumuz, lezzet arayışımızla birleşerek her kahve çeşidinde en özel karışımları elde edebilmemizi sağlıyor.",
    img: img1,
  },
  {
    text: "Kahve Bankası'nda, geleneksel kahve kültürünü, modern bir atmosferde sizlere sunuyoruz. Küçük ama sıcak mekanımızda hem çerezler, baharatlar ve kolonyalar gibi ürünlerimizden dilediğinizi satın alabilir, hem de sevdiklerinizle sohbet edip anın tadını çıkarabilirsiniz. Bizim için önemli olan, kendinizi evinizde gibi hissetmeniz.",
    img: img2,
  },
  {
    text: 'Biz sadece bir kahve dükkanı değiliz. Müşterilerimize sıcak bir atmosferde keyifli anlar sunmayı hedefleyen bir buluşma noktasıyız. Kahve Bankası’nda her fincan, özenle seçilmiş ve size özel hazırlanmış bir yolculuğa dönüşüyor. Kapımız her zaman açık. Gelin, kahvemiz eşliğinde hoş bir muhabbet edelim.',
    img: img3,
  },
];
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="container q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">Biz Kimiz?</h4>
      <!-- <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Kahve Bankası, kahvenin eşsiz tadını Mardin'in kadim tarihi dokusuyla
        buluşturan sıcak ve samimi bir mekan. Kahveye olan tutkumuz, lezzet
        arayışımızla birleşerek her kahve çeşidinde en özel karışımları elde
        edebilmemizi sağlıyor.
      </p>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Kahve Bankası'nda, geleneksel kahve kültürünü, modern bir atmosferde
        sizlere sunuyoruz. Küçük ama sıcak mekanımızda hem çerezler, baharatlar
        ve kolonyalar gibi ürünlerimizden dilediğinizi satın alabilir, hem de
        sevdiklerinizle sohbet edip anın tadını çıkarabilirsiniz. Bizim için
        önemli olan, kendinizi evinizde gibi hissetmeniz.
      </p>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Biz sadece bir kahve dükkanı değiliz. Müşterilerimize sıcak bir
        atmosferde keyifli anlar sunmayı hedefleyen bir buluşma noktasıyız.
        Kahve Bankası’nda her fincan, özenle seçilmiş ve size özel hazırlanmış
        bir yolculuğa dönüşüyor. Kapımız her zaman açık. Gelin, kahvemiz
        eşliğinde hoş bir muhabbet edelim.
      </p> -->
    </div>
    <div
      class="row full-width justify-center q-col-gutter-md-lg q-col-gutter-xs q-pr-xs q-pr-md-lg q-mb-xl"
    >
      <div
        v-for="image in images"
        :key="image.text"
        class="col-12 col-lg-4 col-md-4"
      >
        <q-card flat square class="bg-transparent">
          <q-img
            :src="`${image.img}`"
            loading="lazy"
            spinner-color="primary"
            fit="cover"
            :height="$q.screen.gt.md ? '550px' : '188px'"
          />
          <!-- :height="$q.screen.gt.md ? '742px' : '188px'" -->

          <p
            :class="`${
              $q.screen.gt.md ? 'text-h6' : 'text-body1'
            } text-weight-regular text-grey-10 q-mx-md q-mt-lg`"
            style="height: 200px"
          >
            {{ image.text }}
          </p>
        </q-card>
      </div>
    </div>
    <q-separator class="q-mb-xl" color="black" />

    <div class="container">
      <div class="row full-height q-mb-xl q-px-md q-px-md-none">
        <div class="col-12 col-md-6 flex-center">
          <q-img
            v-if="$q.screen.gt.md"
            src="~assets/images/about-s1.jpg"
            fit="cover"
            :width="$q.screen.gt.md ? '700px' : ''"
          />
          <q-img
            v-else
            src="~assets/images/about-s1.jpg"
            fit="cover"
            ratio="0.75"
            :width="$q.screen.gt.md ? '500px' : ''"
          />
        </div>
        <div class="col-12 col-md-6">
          <div
            class="flex full-height justify-center justify-md-start items-center content-center q-ml-md"
          >
            <h4 class="text-h4 text-apple-ls q-mb-md">
              Kahve Bankası Deneyimi
            </h4>
            <p
              :class="`${
                $q.screen.gt.md ? 'text-left' : 'text-center'
              } text-body1`"
            >
              Midyat’ta dostlarınızla bir araya gelip sıcak bir kahve eşliğinde
              keyifli anlar paylaşmak için sizleri bekliyoruz. Geleneksel
              lezzetlerimizi modern bir ortamda sunarak, her zaman yeni tatlar
              keşfetmenizi sağlamak için buradayız. Gelin, birlikte güzel anılar
              biriktirelim!
            </p>

            <q-btn
              color="black"
              label="Bizi Ziyaret Edin"
              padding="md xl"
              :ripple="false"
              no-caps
              to="/locations"
            ></q-btn>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
