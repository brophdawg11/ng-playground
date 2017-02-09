import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NestedFormsRoutingModule } from './nested-forms-routing.module';
import { NestedFormComponent } from './nested-form/nested-form.component';
import { ParentFormComponent } from './shared/parent-form/parent-form.component';
import { ChildFormComponent } from './shared/child-form/child-form.component';
import { ChildListComponent } from './shared/child-list/child-list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NestedFormsRoutingModule
    ],
    declarations: [
        NestedFormComponent,
        ParentFormComponent,
        ChildFormComponent,
        ChildListComponent
    ]
})
export class NestedFormsModule { }
