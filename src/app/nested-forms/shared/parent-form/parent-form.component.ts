import {
    AfterViewInit,
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormGroup,
    Validators
} from '@angular/forms';

import * as _ from 'lodash';

import { ParentData } from '../interfaces';


@Component({
    selector: 'app-parent-form',
    templateUrl: './parent-form.component.html',
    styleUrls: [ './parent-form.component.css' ]
})
export class ParentFormComponent implements OnInit, AfterViewInit {
    public initialState: ParentData;
    public parentData: ParentData;
    public parentForm: FormGroup;

    constructor(private fb: FormBuilder) {}

    ngOnInit() {
        this.initialState = this.getParentData();
        this.parentData = _.cloneDeep(this.initialState);
        this.parentForm = this.toFormGroup(this.parentData);
        console.log('Initial parentData', this.parentData);
    }

    ngAfterViewInit() {
        this.parentForm.valueChanges
            .subscribe(value => {
                console.log('Parent Form changed', value);
                this.parentData = _.mergeWith(this.parentData,
                                              value,
                                              this.mergeCustomizer);

            });
    }

    private getParentData(): ParentData {
        return {
            parentField1: 'Parent Field 1 Value',
            parentField2: 'Parent Field 2 Value',
            parentHiddenField1: 'Parent Hidden Field 1 Value',
            children: [{
                id: 1,
                childField1: 'Child 1 - Child Field 1 Value',
                childField2: 'Child 1 - Child Field 2 Value',
                childHiddenField1: 'Child 1 - Child Hidden Field 1 Value',
            }, {
                id: 2,
                childField1: 'Child 2 - Child Field 1 Value',
                childField2: 'Child 2 - Child Field 2 Value',
                childHiddenField1: 'Child 2 - Child Hidden Field 1 Value',
            }]
        };
    }

    private toFormGroup(data: ParentData): FormGroup {
        const formGroup = this.fb.group({
            parentField1: [ data.parentField1, Validators.required ],
            parentField2: [ data.parentField2, Validators.required ],
            parentHiddenField1: [ data.parentHiddenField1 ]
        });

        return formGroup;
    }

    // _.mergeWith customizer to avoid merging primitive arrays, and only
    // merge object arrays
    private mergeCustomizer = (objValue, srcValue) => {
        if (_.isArray(objValue)) {
            if (_.isPlainObject(objValue[0]) || _.isPlainObject(srcValue[0])) {
                return srcValue.map(src => {
                    const obj = _.find(objValue, { id: src.id });
                    return _.mergeWith(obj || {}, src, this.mergeCustomizer);
                });
            }
            return srcValue;
        }
    }

    onSubmit() {
        if (!this.parentForm.valid) {
            console.error('PArent Form invalid, preventing submission');
            return false;
        }

        const updatedParentData = _.mergeWith(this.parentData,
                                              this.parentForm.value,
                                              this.mergeCustomizer);

        console.log('Submitting...');
        console.log('Original parentData', this.initialState);
        console.log('Updated parentData', updatedParentData);

        return false;
    }

}
