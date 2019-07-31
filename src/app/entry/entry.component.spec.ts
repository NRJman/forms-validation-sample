import { ComponentFixture, async, TestBed } from "@angular/core/testing";
import { EntryComponent } from './entry.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';

describe('EntryComponent', () => {
  let fixture: ComponentFixture<EntryComponent>;
  let component: EntryComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryComponent ],
      imports: [ RouterTestingModule.withRoutes([]) ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  });

  it('should have a router outlet', () => {
    const routerOutletElement = fixture.debugElement.query(By.directive(RouterOutlet));

    expect(routerOutletElement).not.toBeNull();
  });

  it('should have a link to log-in component', () => {
    const linkElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    expect(linkElements.some((linkElement) => linkElement.properties.href === '/login')).toEqual(true);
  });

  it('should have a link to sign-up component', () => {
    const linkElements = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    expect(linkElements.some((linkElement) => linkElement.properties.href === '/signup')).toEqual(true);
  });
});
