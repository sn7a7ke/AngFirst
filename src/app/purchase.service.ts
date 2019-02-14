import {Injectable} from '@angular/core';
import {LogService} from './log.service';
import {Product} from './product';

@Injectable()
export class PurchaseService { 
	private products: Product[] = 
	[
        { product: "Хлеб", done: false, price: 15.9 },
        { product: "Масло", done: false, price: 60 },
        { product: "Картофель", done: true, price: 22.6 },
        { product: "Сыр", done: false, price:310 }
    ];
    constructor(private logService: LogService){};

    getProducts(): Product[] {
        this.logService.write("операция получения данных");
        return this.products;
    }

	addProduct(text: string, price: number): void {
		
        this.logService.write("операция добавления данных");
        if(text==null || text.trim()=="" || price==null)
			return;
        this.products.push(new Product(text, price));        
        // text="";
        // price=0;
    }
    deleteProduct(): void {
        this.logService.write("adding data operation");
        this.products.pop();
    }
}

