import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  onLoginFormSubmit(): void {
    console.log(this.loginForm);
    alert('Check the console now!');
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, [Validators.required, Validators.minLength(5)]]
    });
  }

}
