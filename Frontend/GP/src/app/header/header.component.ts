import { Component, OnInit } from '@angular/core';
import {animate, group, query, state, style, transition, trigger} from "@angular/animations";
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [

    trigger('fadein', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(5000)
      ]),
      transition('* => void', [
        animate(5000, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})
export class HeaderComponent implements OnInit {
ExperienceComponent: any;

  constructor(private router:Router) { }
  greeting= {
    username: "Hazim Karam",
    title: "Welcome, I'm ZoOoMA",
    subTitle: "Software Engineer - Backend Node.js Developer Results-driven Backend Node.js Developer with a strong focus on crafting efficient and scalable server-side solutions. Expertise in designing and building RESTful APIs, optimizing database interactions, and ensuring application performance and security. Proven ability to tackle complex technical challenges, implement best practices, and deliver high-impact projects. Adept at staying current with industry trends and technologies to drive continuous improvement and innovation in backend systems.",
    resumeLink: "https://drive.google.com/file/d/1huykpPCkMfnvvvx0q14XIfFQm3b4mKSf/view?usp=drive_link"
  }

  ngOnInit(): void {




  }
  reload(){
    this.router.navigate(['/experience'])
    .then(nav => {
      console.log(nav); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });

  }

}
