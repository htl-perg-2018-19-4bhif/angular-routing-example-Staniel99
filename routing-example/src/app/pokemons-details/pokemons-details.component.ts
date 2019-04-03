import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface IPokemonResponse {
  name: string;
  abilities: any[];
}

class PokemonDetail {
  name: string;
  abilities: string[];
}

@Component({
  selector: 'app-pokemons-details',
  templateUrl: './pokemons-details.component.html',
  styleUrls: ['./pokemons-details.component.css']
})

export class PokemonsDetailsComponent implements OnInit {
  pokemonId = "";
  pokemonResponse: IPokemonResponse = { name: "", abilities: [] };
  pokemonDetail: PokemonDetail = { name: "", abilities: [] };

  constructor(private route: ActivatedRoute, private http: HttpClient) { 
    route.paramMap.subscribe(map => {
      this.pokemonId = map.get("id");
    });
    this.loadPokeDetails();
  }

  ngOnInit() {
  }

  async loadPokeDetails() {
    this.pokemonResponse = await this.http.get<IPokemonResponse>(`https://pokeapi.co/api/v2/pokemon/${this.pokemonId}`).toPromise();
    
    this.pokemonDetail.name = this.pokemonResponse.name;
    for(let i=0; i<this.pokemonResponse.abilities.length; i++){
      this.pokemonDetail.abilities.push(this.pokemonResponse.abilities[i].ability.name);
    }
  }
}