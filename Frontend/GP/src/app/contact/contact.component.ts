import { Component } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  public gmail="hazimkaram159@gmail.com";
  public github="https://github.com/Hazim-Karam159";
  public linkedin="https://www.linkedin.com/in/hazim-karam-b14737266";
  public facebook="https://www.facebook.com/hazim.karam.90?mibextid=ZbWKwL";
  public phone="01143683542";
  public resume="https://drive.google.com/file/d/1huykpPCkMfnvvvx0q14XIfFQm3b4mKSf/view?usp=drive_link";
  constructor(private dataService: ExperienceService) {}

  ngOnInit(): void {
    this.dataService.getContacts().subscribe(
      (response) => {
        const data = response.data;
        // console.log(data);

        this.mapContactLinks(data);
      },
      (error) => {
        console.error('Error fetching contact data:', error);
      }
    );
  }

  private mapContactLinks(data: any): void {
    data.forEach((item: any) => {
      switch (item.name.toLowerCase()) {
        case 'phone':
          this.phone = item.link;
          break;
        case 'gmail':
          this.gmail = item.link;
          break;
        case 'github':
          this.github = item.link;
          break;
        case 'linkdedin':
          this.linkedin = item.link;
          break;
        case 'facebook':
          this.facebook = item.link;
          break;
        case 'resume':
          this.resume = item.link;
          break;
        default:
          break;
      }
    });
  }
}
