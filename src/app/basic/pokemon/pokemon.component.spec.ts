import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PokemonService } from '../services/pokemon.service';

import { PokemonComponent } from './pokemon.component';

describe('PokemonComponent', () => {
  let component: PokemonComponent;
  let fixture: ComponentFixture<PokemonComponent>;
  let compiled: HTMLElement;
  let service: PokemonService;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PokemonService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( PokemonService );
    httpMock = TestBed.inject( HttpTestingController );

    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check snapshoot', () => {
    expect( compiled ).toMatchSnapshot();
  });

  it('check loading', () => {
    const h3 = compiled.querySelector('h3');
    expect( h3?.textContent ).toContain('Loading...');
  });

  it('check get pikachu and load data', () => {

    const dummyPokemon = {
      name: 'pikachu',
      sprites: {
        front_default: 'https://pikachu.com/sprite.png'
      }
    };

    const request = httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/25');
    expect( request.request.method ).toBe('GET');
    request.flush( dummyPokemon );

    fixture.detectChanges();
    
    const h3  = compiled.querySelector('h3');
    const img = compiled.querySelector('img');

    expect( h3?.textContent?.toLocaleLowerCase() ).toContain( dummyPokemon.name.toLocaleLowerCase() );
    expect( img?.src ).toBe( dummyPokemon.sprites.front_default );
    expect( img?.alt ).toBe( dummyPokemon.name );


  });
});
