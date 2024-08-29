import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('1.5s ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(30px)' }),
        animate('1.5s ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ])
  ]
})
export class HomeComponent {
  constructor(private dataService: ExperienceService) { }
  about: string = "";
  private subscription: Subscription | undefined;

  ngOnInit(): void {
    this.subscription = this.dataService.getAbout().subscribe(
      (data) => {
        this.about = data.data[0].about;
      }
    );
  }

  greeting: {
    username: string,
    title: string,
    subTitle: string,
    paragraph: string,
    resumeLink: string
  } = {
    username: "Hazim Karam",
    title: "Welcome, I'm ZoOoMA",
    subTitle: "A passionate Software Engineer - Backend Node.js Developer.",
    resumeLink: "https://drive.google.com/file/d/1huykpPCkMfnvvvx0q14XIfFQm3b4mKSf/view?usp=drive_link",
    paragraph: this.about
  };

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
