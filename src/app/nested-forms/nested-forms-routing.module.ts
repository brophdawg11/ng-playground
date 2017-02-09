import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NestedFormComponent } from './nested-form/nested-form.component';

const routes: Routes = [{
    path: 'nested-form',
    component: NestedFormComponent
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class NestedFormsRoutingModule { }
