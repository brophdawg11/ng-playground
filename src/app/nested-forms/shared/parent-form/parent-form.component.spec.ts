/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ParentFormComponent } from './parent-form.component';

describe('ParentFormComponent', () => {
    let component: ParentFormComponent;
    let fixture: ComponentFixture<ParentFormComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ ParentFormComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ParentFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
