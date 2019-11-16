import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router';
import { PokemonService } from '../../pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit{

  public isEvolutionShown = false;
  public isMovesShown = false;
  constructor(
    private route: ActivatedRoute,
    public pokemonService: PokemonService,
    private location: Location
  ){ }

  detail: any;
  evolution: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getDetailPokemon(id).subscribe((result: any) => {
      this.detail = result.data;
      console.log(this.detail);
    });
  }

  public movesShow() {
    this.isMovesShown = ! this.isMovesShown;
  }

  public evolutionShow() {
    this.isEvolutionShown = ! this.isEvolutionShown;
  }

  public goBack() {
    this.location.back();
  }

}
