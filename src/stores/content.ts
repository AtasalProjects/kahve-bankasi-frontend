import { defineStore } from 'pinia';
import { useCategoryStore } from './category';
import { Categories } from 'models/category';
import { ref } from 'vue';
import { Content } from 'models/content';
import { contentService } from 'services/content-service';
import { Paginate } from 'models/paginate';

export const useContentStore = defineStore('content', () => {
  const contents = ref<Content[]>([]);
  const loading = ref<boolean>(false);

  function getByCategory(
    categoryId: number | Categories
  ): Content[] | undefined {
    if (!contents.value || contents.value.length === 0) return;

    if (typeof categoryId === 'number') {
      return contents.value.filter((c) => c.categoryId === categoryId);
    } else {
      const category = useCategoryStore().findByName(categoryId);
      return contents.value.filter((c) => c.categoryId === category?.id);
    }
  }

  function setContents(newvalue: Content[]) {
    contents.value = newvalue;
  }

  function setLoading(newvalue: boolean) {
    loading.value = newvalue;
  }

  async function fetch() {
    try {
      setLoading(true);
      const res = await contentService.getList<Paginate<Content>>(
        undefined,
        '?perPage=-1'
      ); // -1 means fetch all rows
      setContents(res.data);
    } finally {
      setLoading(false);
    }
  }

  return { contents, setContents, loading, setLoading, fetch, getByCategory };
});
