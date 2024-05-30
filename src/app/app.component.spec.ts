import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from "@angular/core";
import { provideRouter, RouterLink } from "@angular/router";
import { By } from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@Component({standalone: true, selector: 'router-outlet', template: ''})
class RouterOutletStubComponent {}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        RouterLink,
        RouterOutletStubComponent,
        BrowserAnimationsModule,
      ],
      providers: [
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have the 'Thank You Matcher' title`, () => {
    expect(app.title).toEqual('Thank You Matcher');
  });

  it('should render toolbar', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('Thank You Matcher');
  });

  it('should render navigation', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navSidePanel = compiled.querySelector('.nav');

    expect(navSidePanel?.children.length).toEqual(1);
    expect(navSidePanel?.children[0].textContent).toContain('Admin');
  });

  it('should get RouterLinks from template', () => {
    fixture.detectChanges();
    const linkDes = fixture.debugElement.queryAll(By.directive(RouterLink));
    let routerLinks = linkDes.map((de) => de.injector.get(RouterLink));

    expect(routerLinks.length).withContext('should have 1 routerLinks').toBe(1);
    expect(routerLinks[0].href).toBe('/admin');
  });
});
