/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChildFormComponent } from './child-form.component';

describe('ChildFormComponent', () => {
    let component: ChildFormComponent;
    let fixture: ComponentFixture<ChildFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ChildFormComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ChildFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
