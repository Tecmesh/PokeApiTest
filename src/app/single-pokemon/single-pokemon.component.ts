import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Pokemon } from '../models/pokemon';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-pokemon',
  templateUrl: './single-pokemon.component.html',
  styleUrls: ['./single-pokemon.component.scss']
})
export class SinglePokemonComponent implements OnInit {

  private mainUrl = "https://pokeapi.co/api/v2";
  pokemon: Pokemon | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        return this.http.get<Pokemon>(`${this.mainUrl}/pokemon/${params['id']}`).subscribe(
          (response) => {
            this.pokemon = response;
          },
          error => { console.log(error) }
        )
      }
    )
  }

  capitalize(text: string) {
    if (text.length > 0) {
      return text[0].toUpperCase() + text.substring(1)
    }

    return text;
  }

}
