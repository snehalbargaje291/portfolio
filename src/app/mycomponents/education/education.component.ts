import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [RouterOutlet, RouterLink, CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educations = [
    {img:"https://geca.ac.in/images/logocsn.png", title: "PG", institution: "Government College of Engineering, Aurangabad", degree:"Master of Computer Applications", percentage:"75%",board:"BAMU", graduationYear: "2022-24", isFlipped: false },
    {img:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Garware.png/582px-Garware.png", title: "UG", institution: "MES Garware College of Commerce, Pune", degree:"Bachelor of Business Administration in Computer Applications", board:"SPPU", percentage:"85%", graduationYear: "2019-22", isFlipped: false },
    {img:"https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg", title: "XII", institution: "Kendriya Vidyalaya BEG, Pune", degree:"Science(PCM)", percentage:"67%", board:"CBSE", graduationYear: "2018-19", isFlipped: false },
    {img:"https://cdnbbsr.s3waas.gov.in/s32d2ca7eedf739ef4c3800713ec482e1a/uploads/2023/04/2023042118.svg", title: "X", institution: "Kendriya Vidyalaya BEG, Pune", degree:"General", percentage:"82%", board:"CBSE", graduationYear: "2016-17", isFlipped: false },
    

  ];

  toggleFlip(education:any): void {
    education.isFlipped = !education.isFlipped;
  }
}
