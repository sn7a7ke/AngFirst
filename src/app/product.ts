import { Categories } from "./categories";

export class Product{
	product: string;
	done: boolean;
	price: number;
	category: Categories;
	
	constructor(product: string, price: number, category: Categories) {
 
			this.product = product;
			this.price = price;
			this.category = category;
			this.done = false;
    }
}

