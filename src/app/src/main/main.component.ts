import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon, PokemonFromList, PokemonResponse } from 'src/app/models/pokemon';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private mainUrl = "https://pokeapi.co/api/v2";
  pokemons: PokemonFromList[] = []

  constructor(private http: HttpClient, private router : Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.http.get<PokemonResponse>(`${this.mainUrl}/pokemon?limit=41&offset=9`).subscribe(
      (response) => {
        this.pokemons = response.results;
      },
      error => { console.log(error) }
    );
  }

  viewPokemon(url: string) {
    console.log(url);
    this.router.navigate(['single', url.split("/")[6]]);
  }
}
