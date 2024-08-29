import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-card',
  templateUrl: './github-card.component.html',
  styleUrls: ['./github-card.component.css'] // Corrected the property name from `styleUrl` to `styleUrls`
})
export class GithubCardComponent implements OnInit {
  @Input() name: string | undefined;
  @Input() description: string | undefined;
  @Input() link: string | undefined;
  @Input() role: string[] | undefined;
  @Input() languages: string[] | undefined;
  @Input() tools: string[] | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log(this.name);
    console.log(this.languages);
    console.log(this.tools);
  }

  // Method to get color based on the programming language
  getLanguageColor(language: string): string {
    const languageColors: { [key: string]: string } = {
      'JavaScript': '#f1e05a',
      'TypeScript': '#2b7489',
      'Python': '#3572A5',
      'Java': '#b07219',
      'C++': '#f34b7d',
      'C#': '#178600',
      'Ruby': '#701516',
      'PHP': '#4F5D95',
      // Add more languages and colors as needed
    };

    return languageColors[language] || '#ccc'; // Default color if language is not found
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}
