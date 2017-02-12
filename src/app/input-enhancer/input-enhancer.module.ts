import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgInputEnhancerModule } from 'ng-input-enhancer';

import { InputEnhancerRoutingModule } from './input-enhancer-routing.module';
import { InputEnhancerComponent } from './input-enhancer.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgInputEnhancerModule,
        InputEnhancerRoutingModule
    ],
    declarations: [
        InputEnhancerComponent
    ],
    providers: [
    ]
})
export class InputEnhancerModule { }
