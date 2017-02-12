import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgValidationMessagesService } from 'ng-input-enhancer';

@Component({
    selector: 'app-input-enhancer',
    templateUrl: './input-enhancer.component.html',
    styleUrls: [ './input-enhancer.component.scss' ]
})
export class InputEnhancerComponent implements OnInit {
    public formGroup: FormGroup;

    constructor(private fb: FormBuilder,
                private vms: NgValidationMessagesService) { }

    ngOnInit() {
        this.formGroup = this.fb.group({
            name: [ '', [
                Validators.required,
                Validators.minLength(5),
                Validators.maxLength(40),
                Validators.pattern(/^[a-z ]*$/i)
            ]]
        });

        this.vms.addValidationError('required', (e, c) =>
            `Yo ${c.label} be required, dawg`);
    }

    onSubmit() {
        return false;
    }
}
