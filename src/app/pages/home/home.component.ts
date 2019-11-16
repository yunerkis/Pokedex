import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = 1;
  pageSize = 16;
  datas: any;
  pokemons: any = [];
  pokemonsCopy: any = [];
  pokemon: any;

  constructor(
    private router: Router,
    public pokemonService: PokemonService

  ){}

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((result: any) => {
      this.datas = result.data.results;
      for (let index = 0; index < this.datas.length; index++) {
       this.pokemonService.getDetailPokemon(index + 1).subscribe((pokemon: any) => {
         this.pokemon = {
           id: index + 1,
           name: pokemon.data.name,
           types: pokemon.data.types,
           sprite: pokemon.data.sprites.front_default,
         };
         this.pokemons.push(this.pokemon);
         this.pokemonsCopy.push(this.pokemon);
       });
      }
    });
  }

  public searchPokemon(pokemon){
    if (pokemon === '') {
      this.pokemons = this.pokemonsCopy;
    } else {
      this.pokemons = this.pokemonsCopy;
      if (this.pokemons.find(e => e.name === pokemon)) {
        this.pokemons = [this.pokemons.find(e => e.name === pokemon)];
      } else {
        this.pokemons = []
      }
    }
  }
}
