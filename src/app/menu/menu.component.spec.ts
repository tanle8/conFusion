import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MenuComponent } from './menu.component';
import { MatRippleModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { DISHES } from '../shared/dishes';
import { baseURL } from '../shared/baseurl';
import { Observable, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

// Use `describe()` function to describe what this set of tests
// are doing. In describe function below:
// - In the first argument, we are saying we're trying to test the menu component ('MenuComponent')
// - After that, There is an arrow function where we construct the test for our menu component here.
describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>; // Isolate menu component and then carry out UnitTests on that specific component.

  // The `beforeEach()` function meant whateever you declare inside here, that function
  // will be executed before each test that you're going to specify later on using the `it()`
  // function.
  // So using `beforeEach()`, you can set up the initial configuration for your test to proceed
  // forward.
  // In the `beforeEach()` function below:
  // - we are setting up our `TestBed`,
  // - preparing our `MenuComponent`, and then,
  // - setting up a few things for our MenuComponent before we proceed on to carry out the test.
  beforeEach(async(() => {  // Using async to waiting for the whole thing complete

    let dishServiceStub = {
      getDishes: function(): Observable<Dish[]> {
        return of(DISHES);
      }
    };

    // TestBed allows us to setup environment within which we can test our Angular component
    TestBed.configureTestingModule({  /** This is the same as we add in the App Module */
      imports: [
        BrowserAnimationsModule,
        MatRippleModule,
        FlexLayoutModule,
        RouterTestingModule.withRoutes([{ path: 'menu', component: MenuComponent }])
      ],
      declarations: [ MenuComponent ],
      providers: [
        { provide: DishService, useValue: dishServiceStub },
        { provide: 'BaseURL', useValue: baseURL },
      ]
    })
    // This method compiles the MenuComponent and make it ready for during the testing.
    // The `compileComponents()` method takes some amount of time, util this is completed,
    // we can't proceed forward with the tests. So using `asyn` module, we are essentially
    // specifying that I'm gonna wait for the whole thing is complete, before proceeding
    // forward.
    .compileComponents();
  }));

  let dishservice = TestBed.get(DishService);
  // Getting access to the fixture
  beforeEach(() => {
    // This will return a reference to the menuComponent that we're creating within
    // our test script here, and then get a reference to that in order to manipulations
    // on the component there.
    fixture = TestBed.createComponent(MenuComponent);
    // In addition, from the fixture, I am getting an access to the componentInstance that
    // is being created by my ComponentFictures here.
    component = fixture.componentInstance;
    // that will proceed forward only after all the changes are completed and then
    // recognize that the changes are completed. This function will trigger a change
    // detection cycle for this component. That means that this will ensure that if
    // you have made any changes earlier, all the changes are detected.
    fixture.detectChanges();
  });

  // We're going to use our `it()` function to configure our test here.
  // In this test, we make sure that the component has been created.
  // Within this function, We're using the Jasmine's syntax.
  // - First, we give a description in the form of a string to specify
  //   what this test is actually testing about.
  // - Second, with `expect(component).toBeTruthy()` - we are testing to see if the
  //   component has been created or not.
  // This setup here should have created the component correctly. So that's why
  // inside here, I'm using the method called `expect`.
  // The `expect` take a value - "component". Then you can test to see if this value
  // satisfies something. In this case, we are saying `toBeTruthy` meaning that,
  // this particular value should be "true"
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('dishes items should be 4', () => {
    expect(component.dishes.length).toBe(4);
    expect(component.dishes[1].name).toBe('Zucchipakoda');
    expect(component.dishes[3].featured).toBeFalsy();
  });

  // Another test to check if the template is correctly getting the information for
  // rendering the view:
  it('should use dishes in the template', () => {
    fixture.detectChanges();

    let de: DebugElement;
    let el: HTMLElement;
    de = fixture.debugElement.query(By.css('h1'));
    el = de.nativeElement;

    expect(el.textContent).toContain(DISHES[0].name.toUpperCase());
  });

});
