import { Component } from '@angular/core';  //, OnInit
// import { PurchaseService } from './purchase.service';
// import { LogService } from './log.service';
// import { Product } from './product';


// class Item{
// 	purchase: string;
// 	done: boolean;
// 	price: number;

// 	constructor(purchase: string, price: number) {

//         this.purchase = purchase;
//         this.price = price;
// 		this.done = false;
//     }  
// } 

@Component({
    selector: 'purchase-app',
    templateUrl: './src/app/app.component.html'
    // template: `<div class="page-header">
    //, providers: [PurchaseService, LogService]
})
export class AppComponent  {  //implements OnInit

    // items: Product[] = [];

    // constructor(private purchaseService: PurchaseService) { }

    // addItem(text: string, price: number): void {
    //     this.purchaseService.addProduct(text, price);
    // }
    // deleteItem(): void {
    //     this.purchaseService.deleteProduct();
    // }
    // ngOnInit(){
    //     this.items = this.purchaseService.getProducts();
    // }


    // For childPlusMinus
    clicks: number = 0;
    onChanged(increased: any) {
        increased == true ? this.clicks++ : this.clicks--
        if (this.clicks < 0)
            this.clicks = 0;
    }


    // For childDoubleBinding
    name: string = "Tom";


    //For whileDirective
    condition: boolean = true;
    toggle() {
        this.condition = !this.condition;
    }

}