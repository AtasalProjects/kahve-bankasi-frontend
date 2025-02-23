<script setup lang="ts">
import { useProductBrowse } from 'src/stores/product-browse';
import { storeToRefs } from 'pinia';
import { ProductQueryOrderBy } from 'src/composables/use-products';
import { onMounted } from 'vue';

const productBrowse = useProductBrowse();
const { data } = storeToRefs(productBrowse);

onMounted(async () => {
  await updateQuery({ itemsPerPage: 4, page: 1 });
});

const updateQuery = async (options: {
  page?: number;
  itemsPerPage?: number;
  sortBy?: { key: string; order: string }[];
}) => {
  const orderBy = options.sortBy?.map(
    (s) => ({ column: s.key, order: s.order } as ProductQueryOrderBy)
  );

  productBrowse.setQuery({
    pattern: undefined,
    page: options.page,
    perPage: options.itemsPerPage,
    order_by: orderBy,
  });

  await productBrowse.fetch();
};
</script>

<template>
  <div>
    <div v-if="$q.screen.gt.sm" class="q-pa-md row items-start q-gutter-xl">
      >
      <q-card
        v-for="product in data"
        :key="product.id"
        flat
        class="col transparent text-center"
      >
        <q-img
          v-if="product.media && product.media.length > 0"
          :src="product.media[0].url"
          height="427px"
          fit="contain"
        />

        <q-card-section>
          <div class="text-h5 text-apple-ls">{{ product.name }}</div>
          <div class="text-subtitle1">{{ product.producer }}</div>
          <div class="text-subtitle2">₺{{ product.price }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div v-else>
      <q-scroll-area style="height: 600px">
        <div class="row no-wrap q-gutter-xl">
          <q-card
            v-for="product in data"
            :key="product.id"
            class="col-4 transparent text-center"
            flat
          >
            <q-img
              v-if="product.media && product.media.length > 0"
              :src="product.media[0].url"
              height="427px"
              fit="contain"
            />

            <q-card-section>
              <div class="text-h5 text-apple-ls">{{ product.name }}</div>
              <div class="text-subtitle1">{{ product.producer }}</div>
              <div class="text-subtitle2">₺{{ product.price }}</div>
            </q-card-section>
          </q-card>
        </div>
      </q-scroll-area>
    </div>
  </div>
</template>
