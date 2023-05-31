import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './src/main/main.component';
import { HttpClientModule } from '@angular/common/http';
import { SinglePokemonComponent } from './single-pokemon/single-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SinglePokemonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
