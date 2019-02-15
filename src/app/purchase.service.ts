import {Injectable} from '@angular/core';
import {LogService} from './log.service';
import {Product} from './product';
import { Categories } from './categories';


@Injectable()
export class PurchaseService { 
	private products: Product[] = 
	[
        { product: "Хлеб", done: false, price: 15.9, category: Categories.bakeryProducts },
        { product: "Масло", done: false, price: 60, category: Categories.milkProducts},
        { product: "Картофель", done: true, price: 22.6, category: Categories.vegetables },
        { product: "Сыр", done: false, price:310, category: Categories.milkProducts }
    ];
    constructor(private logService: LogService){};

    getProducts(): Product[] {
        this.logService.write("операция получения данных");
        return this.products;
    }

	addProduct(text: string, price: number, category: Categories): void {
		
        this.logService.write("операция добавления данных");
        if(text==null || text.trim()=="" || price==null)
			return;
        this.products.push(new Product(text, price, category));
        // text="";
        // price=0;
    }
    // addProductFully(product:Product): void {
		
    //     this.logService.write("операция добавления данных");
    //     if(product==null)
	// 		return;
    //     this.products.push(product);        
    // }

    deleteProduct(): void {
        this.logService.write("adding data operation");
        this.products.pop();
    }
}

