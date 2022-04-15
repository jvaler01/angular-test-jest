import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';

import { CounterRouteComponent } from './counter-route.component';

describe('CounterRouteComponent', () => {
  let component: CounterRouteComponent;
  let fixture: ComponentFixture<CounterRouteComponent>;

  /*beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });*/

  it('should create', async() => {
      await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('initial value 0', async() => {
    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.counter ).toBe(0);
  });

  it('initial value 100 /counter/100', async() => {

    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return ( param === 'initial' ) ? '100' : undefined;
          }
        } 
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.counter ).toBe(100);
  });

  it('initial value 10 /counter/100abc', async() => {

    const mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get(param: string) {
            return ( param === 'initial' ) ? '100abc' : undefined;
          }
        } 
      }
    }

    await TestBed.configureTestingModule({
      declarations: [ CounterRouteComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect( component.counter ).toBe(10);
  });
});
