import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FatherSonComponent } from '../father-son/father-son.component';
import { FatherComponent } from './father.component';

describe('FatherComponent', () => {
  let component: FatherComponent;
  let fixture: ComponentFixture<FatherComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherComponent, FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherComponent);
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

  it('check set client', () => {
    component.onSetClient('Test');
    fixture.detectChanges();

    const element = compiled.querySelector('.mt-2');

    expect( element?.textContent ).toContain('"name"');
    expect( element?.textContent ).toContain('"Test"');
  });

  it('check onDelete event', () => {
    component.client = { id: 1, name: 'Test'};
    fixture.detectChanges();

    const sonComponentDebug = fixture.debugElement.query( By.directive(FatherSonComponent) );
    const sonComponent = sonComponentDebug.componentInstance;

    sonComponent.onClientDeleted.emit();
    expect( component.client ).toBe(undefined);
  });

  it('check onUpdate event', () => {
    component.client = { id: 1, name: 'Test'};
    fixture.detectChanges();

    const sonComponentDebug = fixture.debugElement.query( By.directive(FatherSonComponent) );
    const sonComponent = sonComponentDebug.componentInstance;

    sonComponent.onClientUpdated.emit({ id: 5, name: 'Test' });
    //To Be for primitive
    //To Be Equal pointer
    //To Equal Element by Element
    expect( component.client ).toEqual({ id: 5, name: 'Test' });
  });
});
