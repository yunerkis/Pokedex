import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(protected http: HttpClient) { }

  public get(url: string) {
    return Observable.create(observer => {
      const options = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const request = this.http.get(url, options);
      request.subscribe(data => {
        observer.next({ status: true, data: data });
        observer.complete();
      }),
        err => {
          observer.next({ status: false, data: err });
          observer.complete();
        },
        () => {};
    });
  }

  getPokemons() {
    return Observable.create(observer => {
      const url = `${environment.POKEMONS_API}?limit=200&offset=0`;
      return this.get(url).subscribe((result) => {
        observer.next({ status: true, data: result.data });
        observer.complete();
      });
    })
  }

  getDetailPokemon(id){
    return Observable.create(observer => {
      const url = `${environment.POKEMONS_API}` + id + '/';
      return this.get(url).subscribe((result) => {
        observer.next({ status: true, data: result.data });
        observer.complete();
      });
    })
  }
}