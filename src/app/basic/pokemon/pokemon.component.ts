import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../interfaces';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  public pokemon?: Pokemon;

  constructor( private pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon(25).subscribe( pokemon =>{
      this.pokemon = pokemon;
      //console.table(this.pokemon);
    })
  }

}
