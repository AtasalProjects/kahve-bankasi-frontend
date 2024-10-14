<script setup lang="ts">
import { images } from 'src/constants/images';
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="container q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">Misyonumuz</h4>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Kahve Bankası, kahve severlere benzersiz bir kahve deneyimi sunmak
        amacıyla kuruldu. İyi kahveye olan tutkumuzla, kaliteli kahve
        çekirdeklerini titizlikle seçiyor ve özenle işliyoruz. Amacımız, her
        fincanda mükemmel tadı yakalamak ve kahve tutkunlarına unutulmaz bir
        deneyim sunmaktır.
      </p>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Sadece bir kahve markası değil, aynı zamanda kahve kültürünü yaymayı ve
        kahve severlerin hayatlarına dokunmayı hedefliyoruz. Şubelerimizde,
        nitelikli baristalarımızın ellerinden çıkan eşsiz kahve çeşitlerini
        deneyimleyebilir, her yudumda kahvenin büyüsüne kapılabilirsiniz.
      </p>
      <p
        :class="`${
          $q.screen.gt.md ? 'text-h6' : 'text-body1'
        } text-weight-regular text-grey-10`"
      >
        Kahve Bankası olarak misyonumuz, kahveyi yalnızca bir içecek değil, bir
        yaşam tarzı haline getirmek ve tüm kahve severleri bu yolculukta
        yanımızda görmek.
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
              Designed in homage to the European espresso bar, Black Fox is
              built around conversation, engagement and community. Our spaces
              were created to be a neighborhood meeting place––a warm and
              welcoming respite that fosters connection between customers and
              our team.
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
