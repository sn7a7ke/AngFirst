import { Component, OnInit } from '@angular/core';
import { PurchaseService } from './purchase.service';
import { LogService } from './log.service';
import { Product } from './product';

@Component({
    selector: 'data-comp',
    templateUrl: './src/app/data.component.html'
    // template: `<div class="page-header">
    // , providers: [PurchaseService, LogService]
})
export class DataComponent implements OnInit {

    items: Product[] = [];

    constructor(private purchaseService: PurchaseService) { }

    addItem(text: string, price: number): void {
        this.purchaseService.addProduct(text, price);
    }
    deleteItem(): void {
        this.purchaseService.deleteProduct();
    }
    ngOnInit(){
        this.items = this.purchaseService.getProducts();
    }
}