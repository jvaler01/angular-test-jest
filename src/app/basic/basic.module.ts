import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { PokemonComponent } from './pokemon/pokemon.component';



@NgModule({
  declarations: [
    CounterComponent,
    PokemonComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
