import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

// interface
import { Hero } from './hero';

// mock data
import { HEROES } from './mock-heroes';

// service
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
