import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

// interface
import { Hero } from './hero';

// mock data
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    return heroes;
  }
}
