import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonsDetailsComponent } from './pokemons-details/pokemons-details.component';

const routes: Routes = [
  { path: 'pokemons', component: PokemonsComponent},
  { path: 'pokemons/:id', component: PokemonsDetailsComponent },
  { path: '', pathMatch: 'full', redirectTo: '/pokemons'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
