import { Component, EventEmitter, Input, Output} from '@angular/core';
       
@Component({
    selector: 'childPlusMinus-comp',
    template: `<button (click)="change(true)">+</button>
               <button (click)="change(false)">-</button>`
})
export class ChildPlusMinusComponent{ 
     
    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }
}