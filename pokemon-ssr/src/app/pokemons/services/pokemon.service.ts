import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { PokemonApiResponse } from '../interfaces/pokemon-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private readonly _httpClient = inject(HttpClient);
  private readonly BASE_URL = 'https://pokeapi.co/api/v2/pokemon';
  pokemons = signal([]);

  getPokemon(): Observable<unknown> {
    return this._httpClient.get<unknown>(this.BASE_URL);
  }
}
