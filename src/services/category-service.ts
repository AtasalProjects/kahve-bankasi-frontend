import HttpService from 'src/core/services/http.service';

class CategoryService extends HttpService {}

export const categoryService = new CategoryService('categories');
