import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

import { ChildData } from '../interfaces';

@Component({
    selector: 'app-child-list',
    templateUrl: './child-list.component.html',
    styleUrls: [ './child-list.component.css' ]
})
export class ChildListComponent implements OnInit {
    @Input('parentForm')
    public parentForm: FormGroup;

    @Input('children')
    public children: ChildData[];

    constructor() { }

    ngOnInit() {
        console.log('Initializing child list', this.children);
        this.parentForm.addControl('children', new FormArray([]));
    }

    addChild() {
        const child: ChildData = {
            id: Math.floor(Math.random() * 100),
            childField1: 'Child Field 1 Value',
            childField2: 'Child Field 2 Value',
            childHiddenField1: 'Child Hidden Field 1 value'
        };

        this.children.push(child);
        return false;
    }

    removeChild(idx: number) {
        if (this.children.length > 1) {
            this.children.splice(idx, 1);
            (<FormArray>this.parentForm.get('children')).removeAt(idx);
        }
        return false;
    }
}
