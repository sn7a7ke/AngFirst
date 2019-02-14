export class Product{
	product: string;
	done: boolean;
	price: number;
	
	constructor(product: string, price: number) {
 
        this.product = product;
        this.price = price;
		this.done = false;
    }
}

