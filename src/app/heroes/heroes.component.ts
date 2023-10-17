import { Component } from '@angular/core';

// component
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

// interface
import { Hero } from '../hero';

// mock data
import { HEROES } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  heroes: Hero[] = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
