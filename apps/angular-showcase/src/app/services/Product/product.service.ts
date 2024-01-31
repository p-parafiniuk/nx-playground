import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Pokemon {
  name: string;
  url: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Pokemon>('https://pokeapi.co/api/v2/pokemon/ditto');
  }
}
