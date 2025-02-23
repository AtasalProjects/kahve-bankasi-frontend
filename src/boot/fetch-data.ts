import { boot } from 'quasar/wrappers';
import { useCategoryStore } from 'stores/category';
import { useContentStore } from 'stores/content';
// import { useProductStore } from 'src/stores/product';
// import { useProductBrowse } from 'src/stores/product-browse';

async function fetchData() {
  // const productStore = useProductStore();
  // const productBrowse = useProductBrowse();

  const categoryStore = useCategoryStore();

  const contentStore = useContentStore();

  const promises: Promise<unknown>[] = [];

  // if (!productStore.products || productStore.products.length === 0) {
  //   productBrowse.setQuery({
  //     pattern: undefined,
  //     page: undefined,
  //     perPage: -1,
  //     order_by: undefined,
  //   });

  //   promises.push(productBrowse.fetch());
  // }

  if (!contentStore.contents || contentStore.contents.length === 0) {
    promises.push(contentStore.fetch());
  }

  if (!categoryStore.categories || categoryStore.categories.length === 0) {
    promises.push(categoryStore.fetch());
  }

  await Promise.all(promises);

  // productStore.setProducts(productBrowse.data || []);
}

export default boot(async () => {
  await fetchData();
});
