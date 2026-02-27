import { Component } from '@angular/core';
import { PokemonList } from "../../pokemons/components/pokemon-list/pokemon-list";

@Component({
  selector: 'pokemons',
  imports: [PokemonList],
  templateUrl: 'pokemons.html',
  styleUrl: 'pokemons.css',
})
export default class Pokemons { }
