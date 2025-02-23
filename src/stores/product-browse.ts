import { defineStore } from 'pinia';
import {
  ProductDataQuery,
  useProductsFetch,
} from 'src/composables/use-products';
import { Ref, ref } from 'vue';

export const useProductBrowse = defineStore('productBrowse', () => {
  const query = ref<any>({
    page: 1,
    pattern: '',
    perPage: 20,
    with_category: true,
    with_brand: true,
  }) as Ref<ProductDataQuery>;

  const { data, fetch, loading, meta, setQuery, error } =
    useProductsFetch(query);

  return {
    query,
    fetch,
    data,
    loading,
    meta,
    setQuery,
    error,
  };
});
