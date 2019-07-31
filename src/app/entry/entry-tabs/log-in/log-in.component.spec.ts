import { LogInComponent } from "./log-in.component";
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('LogInComponent', () => {
  let component: LogInComponent;
  let fixture: ComponentFixture<LogInComponent>;
  let loginForm: FormGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogInComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogInComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();

    loginForm = component.loginForm;
  });

  it('should create a form group', () => {
    expect(loginForm).not.toEqual(undefined);
  });

  it('should be invalid while empty', () => {
    expect(loginForm.valid).toBeFalsy();
  });

  it('should be invalid as email is required', () => {
    loginForm.controls.email.setValue('');

    expect(loginForm.get('email').errors.required).toBeTruthy();
  });

  it('should have incorrect email format', () => {
    loginForm.controls.email.setValue('abcde');

    expect(loginForm.get('email').errors.email).toBeTruthy();
  });

  it('should be invalid as password is required', () => {
    loginForm.controls.password.setValue('');

    expect(loginForm.get('password').errors.required).toBeTruthy();
  });

  it('should be invalid as password should have at least 5 symbols', () => {
    loginForm.controls.password.setValue('abcd');

    expect(loginForm.get('password').errors.minlength).toBeTruthy();
  });

  it('should be valid', () => {
    loginForm.controls.email.setValue('abcde@fgh');
    loginForm.controls.password.setValue('abcde');

    expect(loginForm.valid).toBeTruthy();
  });

  it('should submit the form', () => {
    const submitButton = fixture.debugElement.query(By.css('button[type="submit"]'));
    loginForm.controls.email.setValue('abcde@fgh');
    loginForm.controls.password.setValue('abcde');
    spyOn(component, 'onLoginFormSubmit').and.callFake(() => { });

    fixture.detectChanges();
    submitButton.nativeElement.click();

    expect(component.onLoginFormSubmit).toHaveBeenCalled();
  });
});
