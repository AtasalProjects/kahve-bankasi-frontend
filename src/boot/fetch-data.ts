import { boot } from 'quasar/wrappers';
import { useCategoryStore } from 'src/stores/category';
import { useProductStore } from 'src/stores/product-store';

async function fetchData() {
  const productStore = useProductStore();
  const categoryStore = useCategoryStore();
  const promises: Promise<unknown>[] = [];

  if (!productStore.products || productStore.products.length === 0) {
    promises.push(productStore.fetch());
  }

  if (!categoryStore.categories || categoryStore.categories.length === 0) {
    promises.push(categoryStore.fetch());
  }

  await Promise.all(promises);
}

export default boot(async () => {
  await fetchData();
});
