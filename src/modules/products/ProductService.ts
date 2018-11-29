import axios from 'axios';

class ProductService {
    async fetchProducts(index: number) {
        return axios.get(`/products_${index}.json`).then(({ data }) => data);
    }
}

export default new ProductService();