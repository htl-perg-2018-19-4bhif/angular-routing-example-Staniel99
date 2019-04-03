import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Pokemon {
  name: string;
  url: string;
  id: number;
};


interface IPokemons {
  results: Pokemon[];
};

interface INumberOfPokemon {
  count: number;
}

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  pokemons: IPokemons;

  constructor(private http: HttpClient) { this.loadPokemon() }

  ngOnInit() {
  }

  async loadPokemon() {
    let numberOfPokemon: INumberOfPokemon = await this.http.get<INumberOfPokemon>("https://pokeapi.co/api/v2/pokemon").toPromise();
    this.pokemons = await this.http.get<IPokemons>(`https://pokeapi.co/api/v2/pokemon?limit=${numberOfPokemon.count}`).toPromise();
    
    for (let i = 0; i < this.pokemons.results.length; i++) {

      this.pokemons.results[i].id = i+1;

    }
  }

}
