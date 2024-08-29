import { Component, OnInit, OnDestroy } from '@angular/core';
import { ExperienceService } from '../services/experience.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit,OnDestroy {

  timeline: any;
  private subscription: Subscription | undefined;

  constructor(private dataService: ExperienceService, private route: ActivatedRoute) {
    console.log("experience Con");
    // this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     this.loadData(); // Trigger data loading on navigation
    //   }
    // });
  //  this.loadData();
  }
  // ngOnChanges(): void {
  //   console.log("experience change");

  //   this.loadData();  // Load data whenever inputs change
  // }

  loadData(): void {
    this.subscription = this.dataService.getExperience().subscribe(
      (data) => {
        this.timeline = data.data;
      }
    );
  }
 
  
  ngAfterViewInit(): void {
    console.log("experience view init");
    
    this.loadData();  // Called after the component's view has been initialized
  }

  // ngOnInit(): void {
  //   console.log("experience init ");
  //   this.loadData();
  
  // }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.loadData();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
