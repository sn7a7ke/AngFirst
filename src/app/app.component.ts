import { Component } from '@angular/core'; 
@Component({
    selector: 'purchase-app',
    templateUrl: './src/app/app.component.html'    
})
export class AppComponent  { 
   
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