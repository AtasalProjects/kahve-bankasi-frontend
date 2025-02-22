import { defineStore } from 'pinia';
import { Category } from 'src/models/category';
import { categoryService } from 'src/services/category-service';
import { ref } from 'vue';

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([]);
  const loading = ref<boolean>(false);

  function findByName(name: string): Category | undefined {
    if (!categories.value || categories.value.length === 0) return undefined;

    return categories.value.find((c) => c.name === name);
  }

  function setCategories(newvalue: Category[]) {
    categories.value = newvalue;
  }

  function setLoading(newvalue: boolean) {
    loading.value = newvalue;
  }

  async function fetch() {
    try {
      setLoading(true);
      const res = await categoryService.getList<Category[]>(
        undefined,
        '?perPage=-1'
      ); // -1 means fetch all rows
      setCategories(res);
    } finally {
      setLoading(false);
    }
  }

  return { categories, setCategories, loading, setLoading, fetch, findByName };
});
