/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputEnhancerComponent } from './input-enhancer.component';

describe('InputEnhancerComponent', () => {
    let component: InputEnhancerComponent;
    let fixture: ComponentFixture<InputEnhancerComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ InputEnhancerComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InputEnhancerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
