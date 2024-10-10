<script setup lang="ts"></script>

<template>
  <div>
    <div v-if="$q.screen.gt.sm" class="q-pa-md row items-start q-gutter-xl">
      <q-card class="col transparent text-center" flat>
        <q-img src="~assets/images/1.png" height="427px" fit="contain" />

        <q-card-section>
          <div class="text-h5 text-apple-ls">Türk Kahvesi</div>
          <div class="text-subtitle1">Kahve Bankası</div>
          <div class="text-subtitle2">₺125.00</div>
        </q-card-section>
      </q-card>
      <q-card class="col transparent text-center" flat>
        <q-img src="~assets/images/2.png" height="427px" fit="contain" />

        <q-card-section>
          <div class="text-h5 text-apple-ls">Dibek Kahvesi</div>
          <div class="text-subtitle1">Kahve Bankası</div>
          <div class="text-subtitle2">₺339.00</div>
        </q-card-section>
      </q-card>
      <q-card class="col transparent text-center" flat>
        <q-img src="~assets/images/3.png" height="427px" fit="contain" />

        <q-card-section>
          <div class="text-h5 text-apple-ls">Osmanlı Kahvesi</div>
          <div class="text-subtitle1">Atasal Kahve</div>
          <div class="text-subtitle2">₺456.00</div>
        </q-card-section>
      </q-card>
      <q-card class="col transparent text-center" flat>
        <q-img src="~assets/images/4.png" height="427px" fit="contain" />

        <q-card-section>
          <div class="text-h5 text-apple-ls">Türk Kahvesi</div>
          <div class="text-subtitle1">Atasal Kahve</div>
          <div class="text-subtitle2">₺75.00</div>
        </q-card-section>
      </q-card>
    </div>
    <div v-else>
      <q-scroll-area style="height: 600px">
        <div class="row no-wrap q-gutter-xl">
          <q-card class="col-3 transparent text-center" flat>
            <q-img src="~assets/images/1.png" height="427px" fit="contain" />

            <q-card-section>
              <div class="text-h5 text-apple-ls">Türk Kahvesi</div>
              <div class="text-subtitle1">Kahve Bankası</div>
              <div class="text-subtitle2">₺125.00</div>
            </q-card-section>
          </q-card>
          <q-card class="col-3 transparent text-center" flat>
            <q-img src="~assets/images/2.png" height="427px" fit="contain" />

            <q-card-section>
              <div class="text-h5 text-apple-ls">Dibek Kahvesi</div>
              <div class="text-subtitle1">Kahve Bankası</div>
              <div class="text-subtitle2">₺339.00</div>
            </q-card-section>
          </q-card>
          <q-card class="col-3 transparent text-center" flat>
            <q-img src="~assets/images/3.png" height="427px" fit="contain" />

            <q-card-section>
              <div class="text-h5 text-apple-ls">Osmanlı Kahvesi</div>
              <div class="text-subtitle1">Atasal Kahve</div>
              <div class="text-subtitle2">₺456.00</div>
            </q-card-section>
          </q-card>
          <q-card class="col-3 transparent text-center" flat>
            <q-img src="~assets/images/4.png" height="427px" fit="contain" />

            <q-card-section>
              <div class="text-h5 text-apple-ls">Türk Kahvesi</div>
              <div class="text-subtitle1">Atasal Kahve</div>
              <div class="text-subtitle2">₺75.00</div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>
