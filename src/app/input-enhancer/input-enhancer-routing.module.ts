import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputEnhancerComponent } from './input-enhancer.component';

const routes: Routes = [{
    path: 'input-enhancer',
    component: InputEnhancerComponent
}];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
    providers: []
})
export class InputEnhancerRoutingModule { }
