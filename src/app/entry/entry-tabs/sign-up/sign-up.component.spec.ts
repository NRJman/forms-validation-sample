import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { SignUpComponent } from './sign-up.component';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('SignUpComponent', () => {
  let fixture: ComponentFixture<SignUpComponent>;
  let component: SignUpComponent;
  let signupForm: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    signupForm = component.signupForm;
  });

  it('should create a form group', () => {
    expect(signupForm).not.toEqual(undefined);
  });

  it('should be invalid while empty', () => {
    expect(signupForm.valid).toBeFalsy();
  });

  it('should be invalid as first name is required', () => {
    (signupForm.controls.fullName as FormGroup).controls.firstName.setValue('');

    expect(signupForm.get('fullName.firstName').errors.required).toBeTruthy();
  });

  it('should be invalid as last name is required', () => {
    (signupForm.controls.fullName as FormGroup).controls.lastName.setValue('');

    expect(signupForm.get('fullName.lastName').errors.required).toBeTruthy();
  });

  it('should be invalid as email is required', () => {
    signupForm.controls.email.setValue('');

    expect(signupForm.get('email').errors.required).toBeTruthy();
  });

  it('should have incorrect email format', () => {
    signupForm.controls.email.setValue('abcde');

    expect(signupForm.get('email').errors.email).toBeTruthy();
  });

  it('should be invalid as password is required', () => {
    signupForm.controls.password.setValue('');

    expect(signupForm.get('password').errors.required).toBeTruthy();
  });

  it('should be invalid as password should have at least 5 symbols', () => {
    signupForm.controls.password.setValue('abcd');

    expect(signupForm.get('password').errors.minlength).toBeTruthy();
  });

  it('should be valid', () => {
    (signupForm.controls.fullName as FormGroup).controls.firstName.setValue('name');
    (signupForm.controls.fullName as FormGroup).controls.lastName.setValue('surname');
    signupForm.controls.email.setValue('abcde@fgh');
    signupForm.controls.password.setValue('abcde');

    expect(signupForm.valid).toBeTruthy();
  });

  it('should submit the form', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    (signupForm.controls.fullName as FormGroup).controls.firstName.setValue('name');
    (signupForm.controls.fullName as FormGroup).controls.lastName.setValue('surname');
    signupForm.controls.email.setValue('abcde@fgh');
    signupForm.controls.password.setValue('abcde');
    spyOn(component, 'onSignupFormSubmit').and.callFake(() => { });

    fixture.detectChanges();
    submitButton.nativeElement.click();

    expect(component.onSignupFormSubmit).toHaveBeenCalled();
  });
});
