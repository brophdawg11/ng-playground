import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { InputEnhancerModule } from './input-enhancer/input-enhancer.module';
import { NestedFormsModule } from './nested-forms/nested-forms.module';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        // Angular modules
        BrowserModule,
        FormsModule,
        RouterModule,

        // Local modules
        InputEnhancerModule,
        NestedFormsModule,

        // AppRoutingModule should always be last
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
