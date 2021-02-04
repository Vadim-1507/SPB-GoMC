export default class ProductService {
    _apiBase = 'http://localhost:3005';


    async getProduct() {
        const res = await fetch(`${this._apiBase}/products`);
        if (!res.ok) {
            throw new Error(`Could not fetch product` +
                `, received ${res.status}`);
        }
        return await res.json();
    }
}
