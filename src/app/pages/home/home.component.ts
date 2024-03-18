import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { CardsComponent } from '../../components/home/cards/cards.component';
import { TestimonialsComponent } from '../../components/home/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeroComponent, 
    CardsComponent, 
    TestimonialsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
