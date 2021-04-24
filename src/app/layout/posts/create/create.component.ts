import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: this.fb.control('', {
        validators: Validators.required
      }),
      body: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(10)]
      }),
      description: this.fb.control(''),
      tags: this.fb.array([
        this.fb.control('Angular'),
        this.fb.control('HTML'),
        this.fb.control('CSS'),
      ]),
    });
  }

  getTags(): FormArray {
    return this.form.get('tags') as FormArray;
  }

  addTag(name: string) {
    this.getTags().push(this.fb.control(name));
  }

  removeTag(idx: number) {
    this.getTags().removeAt(idx);
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}
