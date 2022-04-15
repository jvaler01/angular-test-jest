import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './basic/counter/counter.component';
import { PokemonComponent } from './basic/pokemon/pokemon.component';
import { FatherComponent } from './basic/father/father.component';
import { CounterRouteComponent } from './basic/counter-route/counter-route.component';

const routes: Routes = [
  {
    path: 'basic/counter',
    component: CounterComponent
  },
  {
    path: 'basic/counter/:initial',
    component: CounterRouteComponent
  },
  {
    path: 'basic/pokemon',
    component: PokemonComponent
  },
  {
    path: 'basic/father',
    component: FatherComponent
  },
  {
    path: '**',
    redirectTo: 'basic/counter'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
