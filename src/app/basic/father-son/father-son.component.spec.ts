import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FatherSonComponent } from './father-son.component';

describe('FatherSonComponent', () => {
  let component: FatherSonComponent;
  let fixture: ComponentFixture<FatherSonComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FatherSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FatherSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check snapshoot', () => {
    expect( compiled ).toMatchSnapshot();
  });

  it('check buttons no client', () => {
    const buttons = compiled.querySelectorAll('button');
    expect( buttons.length ).toBe(0);
  });

  it('check buttons client', () => {
    component.client = { id: 1, name: "test"}
    fixture.detectChanges();
    const buttons = compiled.querySelectorAll('button');
    expect( buttons.length ).toBe(2);
  });

  it('check snapshoot client', () => {
    component.client = { id: 1, name: "test"}
    fixture.detectChanges();
    expect( compiled ).toMatchSnapshot();
  });

  it('check button emit deleted', () => {
    component.client = { id: 1, name: "test"}
    fixture.detectChanges();

    jest.spyOn( component.onClientDeleted, 'emit' );
    const button = compiled.querySelector('[data-test="btn-delete"]');
    button?.dispatchEvent( new Event('click') );
    expect( component.onClientDeleted.emit ).toHaveBeenCalled();
  });

  it('check button emit update', () => {
    component.client = { id: 1, name: "test"}
    fixture.detectChanges();

    jest.spyOn( component.onClientUpdated, 'emit' );
    const button = compiled.querySelector('[data-test="btn-update"]');
    button?.dispatchEvent( new Event('click') );
    expect( component.onClientUpdated.emit ).toHaveBeenCalledWith({
      id: 2,
      name: 'test'
    });
  });

  it('check button emit update if id != undefined and client != undefined', () => {
    jest.spyOn( component.onClientUpdated, 'emit' );
    component.onChange(10);
    expect( component.onClientUpdated.emit ).not.toHaveBeenCalled();
    
    component.client = { id: 1, name: "test"}
    fixture.detectChanges();
    component.onChange(10);

    expect( component.onClientUpdated.emit ).toHaveBeenCalledWith({
      id: 10,
      name: 'test'
    });
  });
});
