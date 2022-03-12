import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check snapshoot', () => {
    expect( compiled ).toMatchSnapshot();
  });

  it('check increaseBy increment by 5', () => {
    component.increaseBy(5);
    expect( component.counter ).toBe(15);
  });

  it('check on click buttons increase 1 and decrease 1', () => {
    const buttons = compiled.querySelectorAll('button');
    buttons[0].click();
    expect( component.counter ).toBe(11);
    buttons[1].click();
    buttons[1].click();
    expect( component.counter ).toBe(9);
    
  });

  it('check increaseBy update counter h2 value', () => {
    component.increaseBy(10);
    fixture.detectChanges();

    const h2 = compiled.querySelector('h2');
    expect( h2?.textContent ).toContain('20');
  });
});
