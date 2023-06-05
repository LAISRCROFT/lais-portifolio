import ProductsSmall from './demo/data/products-small.json'
let data = []
// console.log("Products",  ProductsSmall)

export default class ProductService {

    async getProductsSmall() {
		console.log("Products", ProductsSmall)
		return ProductsSmall.map(product => product.data)
	}

	getProducts() {
		return fetch('/controllers/demo/data/products.json').then(res => res.json()).then(d => d.data);
    }

    getProductsWithOrdersSmall() {
		return fetch('/controllers/demo/data/products-orders-small.json').then(res => res.json()).then(d => d.data);
	}
}