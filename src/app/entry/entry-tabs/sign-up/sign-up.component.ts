import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onSignupFormSubmit(): void {
    console.log(this.signupForm);
    alert('Check the console now!');
  }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'fullName': this.fb.group({
        'firstName': this.fb.control(null, [Validators.required]),
        'lastName': [null, [Validators.required]]
      }),
      'email': [null, [Validators.email, Validators.required]],
      'password': [null, [Validators.required, Validators.minLength(5)]]
    });
  }

}
