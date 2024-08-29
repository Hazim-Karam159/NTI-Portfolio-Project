import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  // Initialize Variables
  public college = "Faculty of Computer Science and Artificial Intelligence";
  public degree = "Bachelor Degree";
  public major = "Information Systems";
  public minor = "Computer Science";
  public fromDate = "Oct. 2020";
  public toDate = "Jun. 2024"; // Updated to reflect graduation in June 2024
  public university = "Helwan University";
  public totalGrade = "Excellent with Honor";

  constructor(private dataService: ExperienceService) { }

  ngOnInit(): void {
    this.dataService.getEducation().subscribe(
      (data) => {
        this.college = data.data[0].college;
        this.degree = data.data[0].degree;
        this.fromDate = data.data[0].fromDate;
        this.toDate = data.data[0].toDate;
        this.university = data.data[0].university;
        this.major = data.data[0].major;
        this.minor = data.data[0].minor;
        this.totalGrade = data.data[0].totalGrade;
        console.log(data.data);
      }
    )
  }
}
