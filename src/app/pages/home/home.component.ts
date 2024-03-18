import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { CardsComponent } from '../../components/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ HeroComponent, CardsComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
