<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const imgNumber = ref<string>(route.params.slug as string);

const imgUrl = new URL(
  `/src/assets/images/${+imgNumber.value + 1}.png`,
  import.meta.url
).href;
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="q-px-lg q-mb-xl" style="padding-top: 145px">
      <div class="row">
        <div class="col-12 col-md-6">
          <q-img :src="imgUrl" class="q-mb-xl" fit="scale-down" ratio="0.75" />
        </div>
        <div class="col-12 col-md-6 text-left q-px-xl">
          <div class="text-subtitle1 text-weight-regular q-mb-md">
            Atasal Kahve
          </div>
          <div class="text-h5 text-apple q-mb-sm">Osmanlı Kahvesi</div>
          <div class="text-subtitle1 q-mb-sm">₺456.00</div>
          <p class="text-body2 q-mb-lg">
            Osmanlı döneminden ilham alınarak üretilen, zengin ve kadifemsi bir
            kahve deneyimi sunan geleneksel Türk kahvesi. Yoğun kakao ve baharat
            aromalarıyla damakta kalıcı bir tat bırakır.
          </p>

          <q-separator class="q-mb-lg" color="black"></q-separator>

          <q-btn
            class="full-width q-mb-xl"
            color="black"
            outline
            label="Daha Fazla Bilgi Edin"
            padding="12px"
            unelevated
            no-caps
            to="/contact"
          ></q-btn>

          <p class="text-body1">
            Atasal Kahve’nin sınırlı üretim Osmanlı Kahvesi, en kaliteli kahve
            çekirdeklerinden özenle hazırlanmıştır. İstanbul'un kahve kültürüne
            dayanan bu özel seri, yüzyıllardır süregelen kahve geleneklerine
            sadık kalarak işlenmiştir.
          </p>
          <p class="text-body1">
            Kahvenin kaynağı, Türkiye'nin doğusundaki bereketli topraklardan
            toplanan, yüksek kaliteli Arabica çekirdekleridir. Tamamen doğal
            yöntemlerle, el işçiliğiyle işlenen bu kahve, zengin ve yoğun bir
            aromaya sahiptir.
          </p>
          <p class="text-body1 q-mb-lg">
            Osmanlı Kahvesi, taş değirmenlerde özenle öğütülüp, geleneksel
            yöntemlerle kavrulmuş, Türk kahvesine özgü eşsiz aromasını
            kaybetmeden fincanlara ulaşır.
          </p>

          <q-separator class="q-mb-lg" color="black"></q-separator>

          <div class="text-body2 text-weight-regular inline-block full-width">
            <b class="feature-width text-weight-bold text-grey-10 inline-block">
              Üretici →
            </b>
            <span>Atasal Kahve</span>
          </div>
          <div class="text-body2 text-weight-regular inline-block full-width">
            <b class="feature-width text-weight-bold text-grey-10 inline-block">
              Kaynak →
            </b>
            <span class="inline-block">Mardin, Türkiye</span>
          </div>
          <div
            class="text-body2 text-weight-regular full-width"
            style="display: block"
          >
            <b class="feature-width text-weight-bold text-grey-10 inline-block">
              İşleme Yöntemi →
            </b>
            <span class="inline-block value">
              Geleneksel taş değirmen öğütme ve el yapımı kavurma
            </span>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<style scoped>
.feature-width {
  vertical-align: top;
}

.value {
  vertical-align: top;
  word-break: break-word;
}
</style>
