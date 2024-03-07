import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  skills: string[] = ['HTML', 'CSS', 'JavaScript', 'Angular', 'React', 'Bootstrap','C', 'C#', 'Java', 'Python', 'MySQL', 'SQL Server','Github' ];

  getRandomColor(): string {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }
}
