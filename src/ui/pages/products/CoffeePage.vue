<script setup lang="ts">
import { Product } from 'models/product';
import { productService } from 'src/services/product-service';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = ref<number>(+route.params.slug as number);
const loading = ref<boolean>(false);
const product = ref<Product>();

onMounted(async () => {
  await fetchProduct();
});

async function fetchProduct() {
  if (id.value && id.value !== 0) {
    loading.value = true;

    product.value = await productService.show<Product>(id.value);
    loading.value = false;
  }
}
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="q-px-lg q-mb-xl" style="padding-top: 145px">
      <div v-if="product" class="row">
        <div
          v-if="product.media && product.media.length > 0"
          class="col-12 col-md-6 self-start"
        >
          <q-img
            :src="product.media[0].url"
            class="q-mb-xl"
            fit="scale-down"
            position="top"
            ratio="0.75"
          />
        </div>
        <div class="col-12 col-md-6 text-left q-px-xl">
          <div class="text-subtitle1 text-weight-regular q-mb-md">
            {{ product.producer }}
          </div>
          <div class="text-h5 text-apple q-mb-sm">{{ product.name }}</div>
          <div class="text-subtitle1 q-mb-sm">₺{{ product.price }}</div>
          <p class="text-body2 q-mb-lg">
            {{ product.summary }}
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

          <p class="text-body1 q-mb-lg">
            {{ product.description }}
          </p>

          <q-separator class="q-mb-lg" color="black"></q-separator>

          <div
            v-for="([key, value], index) in Object.entries(
              product.specifications || {}
            )"
            :key="index"
            class="text-body2 text-weight-regular inline-block full-width"
          >
            <b class="feature-width text-weight-bold text-grey-10 inline-block">
              {{ key }}
            </b>
            <span class="q-mx-sm">→</span>
            <span>{{ value }}</span>
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
