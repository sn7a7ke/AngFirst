import { Component } from '@angular/core';
      
@Component({
    selector: 'child-comp',
    template: `<div>
                    <h2 bold [ngClass]="{invisible: visibility}">Добро пожаловать {{name}}!</h2>
                    <button (click)="toggle()">Toggle</button>
               </div>
               <br />`,
    styles: [`h2, p {color:red;}`] //.invisible{display:none;}
})
export class ChildComponent { 
    name= "!!!!!!";


    visibility: boolean = false;
    // переключаем переменную
    toggle(){
        this.visibility=!this.visibility;
    }
}