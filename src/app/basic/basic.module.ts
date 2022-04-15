import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { FatherComponent } from './father/father.component';
import { FatherSonComponent } from './father-son/father-son.component';
import { CounterRouteComponent } from './counter-route/counter-route.component';



@NgModule({
  declarations: [
    CounterComponent,
    PokemonComponent,
    FatherComponent,
    FatherSonComponent,
    CounterRouteComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BasicModule { }
