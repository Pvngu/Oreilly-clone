import { Component } from '@angular/core';
import { HeroComponent } from '../../components/home/hero/hero.component';
import { CardsComponent } from '../../components/home/cards/cards.component';
import { TestimonialsComponent } from '../../components/home/testimonials/testimonials.component';
import { IdentityComponent } from '../../components/home/identity/identity.component';
import { AwardsComponent } from '../../components/home/awards/awards.component';
import { KnowledgeComponent } from '../../components/home/knowledge/knowledge.component';
import { CoursesComponent } from '../../components/home/courses/courses.component';
import { EventsComponent } from '../../components/home/events/events.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ 
    HeroComponent, 
    CardsComponent, 
    TestimonialsComponent,
    IdentityComponent,
    AwardsComponent,
    KnowledgeComponent,
    CoursesComponent,
    EventsComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
