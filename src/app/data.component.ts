import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';
import { LogService } from './log.service';
import { Product } from './product';
import { Categories } from './categories';

@Component({
    selector: 'data-comp',
    templateUrl: './src/app/data.component.html'
})
export class DataComponent implements OnInit {

    items: Product[] = [];

    constructor(private purchaseService: PurchaseService) { }

    addItem(text: string, price: number, category: Categories): void {
        this.purchaseService.addProduct(text, price, category);
    }
    // addItemFully(text: string, price: number, category: Categories): void {
    //     this.purchaseService.addProductFully(new Product(text, price, category));
    // }
    deleteItem(): void {
        this.purchaseService.deleteProduct();
    }
    ngOnInit(){
        this.items = this.purchaseService.getProducts();
    }
}