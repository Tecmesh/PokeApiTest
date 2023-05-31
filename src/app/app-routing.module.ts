import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './src/main/main.component';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'single/:id', component: SinglePokemonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
