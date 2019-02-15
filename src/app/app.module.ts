import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { ChildComponent }   from './child.component';
import { ChildPlusMinusComponent }   from './childPlusMinus.component';
import { ChildDoubleBindingComponent }   from './childDoubleBinding.component';

//import { Categories } from './categories';
import { DataComponent }   from './data.component';

import { PurchaseService } from './purchase.service'; //
import { LogService } from './log.service'; //


import { BoldDirective }   from './fontBold.directive';
import { WhileDirective} from './while.directive';

@NgModule({
    imports:      [ BrowserModule, FormsModule ],
    declarations: [ AppComponent, 
                    ChildComponent, 
                    ChildPlusMinusComponent, 
                    ChildDoubleBindingComponent,
                    //Categories,
                    DataComponent,
                    BoldDirective,
                    WhileDirective],
    providers: [PurchaseService, LogService], //
    bootstrap:    [ AppComponent ]
    
})
export class AppModule { }