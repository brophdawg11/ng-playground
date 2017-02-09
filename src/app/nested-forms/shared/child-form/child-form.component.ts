import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ChildData } from '../interfaces';

@Component({
    selector: 'app-child-form',
    templateUrl: './child-form.component.html',
    styleUrls: [ './child-form.component.css' ]
})
export class ChildFormComponent implements OnInit {
    @Input('children')
    public children: FormArray;

    @Input('child')
    public child: ChildData;

    public childForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        console.log('Initializing child form', this.child);
        this.childForm = this.toFormGroup(this.child);
        this.children.push(this.childForm);
    }

    private toFormGroup(data: ChildData) {
        const formGroup = this.fb.group({
            id: [ data.id ],
            childField1: [ data.childField1 || '', Validators.required ],
            childField2: [ data.childField2 || '', Validators.required ],
            childHiddenField1: [ data.childHiddenField1 ]
        });

        return formGroup;
    }

}
