/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NestedFormComponent } from './nested-form.component';

describe('NestedFormComponent', () => {
    let component: NestedFormComponent;
    let fixture: ComponentFixture<NestedFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ NestedFormComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(NestedFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
