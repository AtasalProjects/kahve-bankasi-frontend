import HttpService from 'src/core/services/http.service';

class ProductService extends HttpService {}

export const productService = new ProductService('products');
