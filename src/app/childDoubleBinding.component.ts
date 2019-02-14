import { Component, Input, Output, EventEmitter } from '@angular/core';
       
@Component({
    selector: 'childDoubleBinding-comp',
    template: `<input [ngModel]="userName" (ngModelChange)="onNameChange($event)" />`
})
export class ChildDoubleBindingComponent{ 
     
    @Input() userName:string;
    @Output() userNameChange = new EventEmitter<string>();
    onNameChange(model: string){
         
        this.userName = model;
        this.userNameChange.emit(model);
    }
}