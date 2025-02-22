import { defineStore } from 'pinia';
import { Categories } from '../models/category';
import { ref } from 'vue';
import { Product } from 'src/models/product';
import { productService } from 'src/services/product-service';
import { Paginate } from 'src/models/paginate';

export const useProductStore = defineStore('product', () => {
  const products = ref<Product[]>([]);
  const loading = ref<boolean>(false);

  function getByCategory(
    categoryId: number | Categories
  ): Product[] | undefined {
    if (!products.value || products.value.length === 0) return;

    if (typeof categoryId === 'number') {
      return products.value.filter((c) => c.categoryId === categoryId);
    } else {
      // const category = useCategoryStore().findByName(categoryId)
      // return contents.value.filter((c) => c.categoryId === category?.id)
    }
  }

  function setProducts(newValue: Product[]) {
    products.value = newValue;
  }

  function setLoading(newvalue: boolean) {
    loading.value = newvalue;
  }

  async function fetch() {
    try {
      setLoading(true);
      const res = await productService.getList<Paginate<Product>>(
        undefined,
        '?perPage=-1'
      ); // -1 means fetch all rows
      setProducts(res.data);
    } finally {
      setLoading(false);
    }
  }

  return { products, setProducts, loading, setLoading, fetch, getByCategory };
});
