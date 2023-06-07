import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
})
export class DynamicFormComponent implements OnInit {
  streetForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.streetForm = this.formBuilder.group({
      streetName: ['', Validators.required],
      length: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      history: [''],
      district: ['', Validators.required],
      previousNames: this.formBuilder.array([]),
    });
  }

  ngOnInit() {}

  get previousNames(): FormArray {
    return this.streetForm.get('previousNames') as FormArray;
  }

  addPreviousName() {
    const previousNameFormGroup = this.formBuilder.group({
      name: [''],
    });
    this.previousNames.push(previousNameFormGroup);
  }

  removePreviousName(index: number) {
    this.previousNames.removeAt(index);
  }

  onSubmit() {
    if (this.streetForm.valid) {
      console.log(this.streetForm.value);
      this.streetForm.reset();
      this.previousNames.clear();
    }
  }

  isFieldInvalid(field: string) {
    const control = this.streetForm.get(field);
    return control?.invalid && (control?.dirty || control?.touched);
  }
}
