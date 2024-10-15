<script setup lang="ts">
import { randomSrc } from 'src/constants/images';

const images = randomSrc(3);
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="container q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">Biz Kimiz?</h4>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Kahve Bankası, Mardin'in tarihi dokusunu modern bir kahve deneyimiyle
        buluşturan, sıcak ve samimi bir durak. Kahveye olan tutkumuz, lezzet
        arayışımızla birleşerek her fincanda sizin tercihinize göre en özel
        karışımları sunmamızı sağlıyor. Espresso, süt oranı, kahvenizin
        sıcaklığı gibi her detayı tamamen size göre ayarlıyoruz. Böylece her
        yudum, tamamen size ait.
      </p>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Kahve Bankası'nda, geleneksel kahve kültürünü, modern bir atmosferde
        yaşıyoruz. Küçük ama sıcak mekanımızda hem çerezler, baharatlar ve
        kolonyalar gibi ürünlerimizi satın alabilir, hem de dostlarınızla sohbet
        edip anın tadını çıkarabilirsiniz. Bizim için önemli olan, kendinizi
        evinizde gibi hissetmeniz.
      </p>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Biz sadece bir kahve dükkanı değiliz; her fincanda bir hikaye, her
        sohbetinize eşlik eden bir deneyim sunuyoruz. Kahve Bankası’nda her
        damla, özenle seçilmiş ve size özel hazırlanmış bir yolculuğa dönüşüyor.
        Kapımız her zaman açık, gelin, kahvemiz eşliğinde hoş bir muhabbet
        edelim.
      </p>
    </div>
    <div
      class="row full-width justify-center q-col-gutter-md-lg q-col-gutter-xs q-pr-xs q-pr-md-lg q-mb-xl"
    >
      <div v-for="image in images" :key="image" class="col-4">
        <q-card flat square>
          <q-img
            :src="`${image}`"
            loading="lazy"
            spinner-color="primary"
            fit="cover"
            :height="$q.screen.gt.md ? '742px' : '188px'"
          />
        </q-card>
      </div>
    </div>
    <q-separator class="q-mb-xl" color="black" />

    <div class="container">
      <div class="row full-height q-mb-xl q-px-md q-px-md-none">
        <div class="col-12 col-md-6 flex-center">
          <q-img
            src="~assets/images/about-s1.jpg"
            fit="cover"
            ratio="0.75"
            :width="$q.screen.gt.md ? '500px' : ''"
          />
        </div>
        <div class="col-12 col-md-6">
          <div
            class="flex full-height justify-center justify-md-start items-center content-center"
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
