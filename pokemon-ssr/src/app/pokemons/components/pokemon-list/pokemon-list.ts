import { Component, inject, OnInit } from '@angular/core';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { PokemonService } from '../../services/pokemon.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  imports: [PokemonCard],
  templateUrl: './pokemon-list.html',
})
export class PokemonList implements OnInit {
  private readonly _pokemonService = inject(PokemonService);

  ngOnInit(): void {
    this._pokemonService.getPokemon().pipe(tap((s)=> console.log(s))).subscribe();
  }
}
