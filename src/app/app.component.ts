import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { states, Address, Hero } from './hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  heroForm: FormGroup;
  states = states;
  // heroForm: FormGroup = new FormGroup({
  //   name: new FormControl()
  // });
  nameControl;
  formValue;
  formValueStatic;
  formStatus;

  constructor(private fb: FormBuilder) {
    // this.heroForm.controls.name.setValidators
    this.createForm();
    this.nameControl = this.heroForm.controls.name.valueChanges;
    this.formValue = this.heroForm.valueChanges;
    this.fillUser();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      address: this.fb.group(new Address()),
      power: '',
      sidekick: ''
    });
  }

  fillUser() {
    const hero = new Hero();
    this.heroForm.patchValue({
      name: hero.name,
      address: new Address(),
      // power: 'power',
      sidekick: 'sidekick'
    });
  }

  log(x) {
    // console.log(x);
    this.formValueStatic = this.heroForm.value;
    this.formStatus = this.heroForm.status;
  }
}
