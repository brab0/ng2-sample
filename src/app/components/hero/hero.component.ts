import { Component, OnInit } from '@angular/core';
import { Hero } from './Hero';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit{  
  selectedHero: Hero;
  heroes: Hero[];
 
  constructor(private heroService: HeroService){}

  getHeroes(): void{
    this.heroService.getHeroes()
    .then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void{
    this.getHeroes();
  }
}