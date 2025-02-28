<script setup lang="ts">
import { useProductBrowse } from 'src/stores/product-browse';
import { computed, onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ProductQueryOrderBy } from 'src/composables/use-products';
import { useCategoryStore } from 'src/stores/category';

const route = useRoute();

const categoryParam = ref<string>(route.params.category as string);
const page = ref<number>(+route.query.page! || 1);

const categoryStore = useCategoryStore();

const productBrowse = useProductBrowse();
const { data, loading, meta } = storeToRefs(productBrowse);

watch(
  () => route.params,
  async (n) => {
    categoryParam.value = n.category as string;
    await updateQuery({ itemsPerPage: 10, page: page.value });
  }
);

watch(
  () => route.query,
  (n) => {
    if (+n.page! !== page.value) {
      page.value = n.page as unknown as number;
      meta.value.currentPage = page.value;
    }
  }
);

const selectedCategory = computed(() => {
  const category = getCategoryByName(categoryParam.value);
  if (category) return category.description;

  return 'Tüm Ürünler';
});

watch(page, async (n) => {
  await updateQuery({ itemsPerPage: 10, page: n });
  scroll(0, 0);
});

onMounted(async () => {
  await updateQuery({ itemsPerPage: 10, page: page.value });
});

function getCategoryByName(name: string) {
  return categoryStore.categories.find((c) => c.name === name);
}

const updateQuery = async (options: {
  page?: number;
  itemsPerPage?: number;
  sortBy?: { key: string; order: string }[];
}) => {
  const orderBy = options.sortBy?.map(
    (s) => ({ column: s.key, order: s.order } as ProductQueryOrderBy)
  );

  const category = getCategoryByName(categoryParam.value);

  productBrowse.setQuery({
    pattern: undefined,
    page: options.page,
    perPage: options.itemsPerPage || 10,
    order_by: orderBy,
    with_category: category ? true : false,
    category_id: category ? category?.id : undefined,
  });

  await productBrowse.fetch();
};

function scroll(x: number, y: number) {
  window.scrollTo({ top: x, left: y, behavior: 'smooth' });
}
</script>

<template>
  <q-page class="q-mb-xl full-height bg-primary text-center">
    <div class="q-px-lg q-mb-xl">
      <h4 class="text-h4 text-apple-ls q-mb-md q-mb-md-xl">
        {{ selectedCategory }}
      </h4>

      <div
        v-if="!loading"
        class="row justify-center q-col-gutter-x-sm q-gutter-y-xl q-pt-xl"
      >
        <q-intersection
          v-for="product in data"
          :key="product.id"
          class="col-6 col-md-4 col-lg-4 md-margin-bottom"
          transition="scale"
          style="height: 605px"
        >
          <q-card
            flat
            class="all-pointer-events transparent q-pa-sm"
            @click="$router.push('/products/' + product.id)"
          >
            <q-img
              v-if="product.media && product.media.length > 0"
              :src="product.media[0].url"
              class="q-mb-xs q-mb-md-xl"
              fit="contain"
              ratio="1"
              loading="lazy"
              :height="$q.screen.gt.md ? '427px' : '264px'"
              max-height="576px"
              placeholder-src="~assets/coffee-placeholder-1.png"
              :loading-show-delay="3000"
            />

            <q-card-section>
              <div class="text-h5 text-apple-ls">{{ product.name }}</div>
              <div class="text-subtitle1">{{ product.producer }}</div>
              <div class="text-subtitle2 text-weight-light">
                ₺{{ product.price }}
              </div>
            </q-card-section>
          </q-card>
        </q-intersection>

        <q-pagination
          v-if="meta"
          v-model="page"
          class="col-12 flex-center"
          :max="Math.ceil(meta.total / meta.perPage)"
          direction-links
          unelevated
          color="black"
          active-color="secondary"
          size="lg"
          @update:model-value="$router.push({ query: { page: page } })"
        />
      </div>
    </div>

    <q-page-sticky
      position="bottom-right"
      :offset="[18, 18]"
      style="transform: translate(0px, 0px) !important"
    >
      <q-btn
        class="q-mb-md"
        icon="mdi-chevron-up"
        color="grey-9"
        round
        size="xl"
        @click="scroll(0, 0)"
      />
    </q-page-sticky>
  </q-page>
</template>

<style scoped>
@media (min-width: 768px) {
  .md-margin-bottom {
    margin-bottom: 9rem;
  }
}
</style>
