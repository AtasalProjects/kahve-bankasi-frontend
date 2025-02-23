import type { Meta, Paginate, PaginateQuery } from 'models/paginate';
import qs from 'qs';
import { Product } from 'models/product';
import { Ref, ref } from 'vue';
import { productService } from 'services/product-service';

export type ProductQueryOrderBy = {
  /**
   * @field column
   * @description Represents which column of Product model will be ordered
   */
  column:
    | 'id'
    | 'name'
    | 'price'
    | 'categoryId'
    | 'brandId'
    | 'summary'
    | 'description'
    | 'stock_quantity'
    | 'availability'
    | 'createdAt'
    | 'updatedAt';
  /**
   * @field order
   * @examples 'asc' | 'desc'
   */
  order: 'asc' | 'desc';
};

export type ProductQuery = {
  /**
   * @field orderBy
   * @description Represents orderby queries
   */
  order_by: ProductQueryOrderBy[];
  with_category: boolean;
  with_brand: boolean;
};

export type ProductFilters = {
  category_id: number;
  brand_id: number;
  availability: boolean;
  price_min: number;
  price_max: number;
  pattern: string;
};

export type ProductDataQuery = ProductQuery & ProductFilters & PaginateQuery;

function mergeData<T>(oldData: T, newData: T): T {
  if (Array.isArray(oldData) && Array.isArray(newData)) {
    return [...oldData, ...newData] as T;
  }
  if (typeof oldData === 'object' && typeof newData === 'object') {
    return { ...oldData, ...newData };
  }
  return newData;
}

export const useProductsFetch = (query: Ref<ProductDataQuery>) => {
  const data = ref<Product[] | null>(null);
  const loading = ref(false);
  const error = ref<any>(null);
  const meta = ref<any>() as Ref<Meta>;

  const fetch = async (mergePrevious: boolean = true) => {
    if (loading.value) return;
    loading.value = true;
    error.value = null;

    const queryString = '?' + qs.stringify(query.value, { encode: true });

    try {
      const result = await productService.getList<Paginate<Product>>(
        undefined,
        queryString
      );
      data.value =
        mergePrevious || !data.value
          ? result.data
          : mergeData(data.value, result.data);
      meta.value = result?.meta;
    } catch (e) {
      error.value = e;
    } finally {
      loading.value = false;
    }
  };

  const setQuery = (newQuery: Partial<ProductDataQuery>) => {
    query.value = { ...query.value, ...newQuery } as ProductDataQuery;
  };

  return { query, data, fetch, loading, error, meta, setQuery };
};
