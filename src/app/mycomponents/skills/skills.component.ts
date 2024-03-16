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
  skills: string[] = ['icons8-html-48.png', 'icons8-css-48.png', 'icons8-bootstrap-48.png', 'icons8-javascript-48.png', 'icons8-typescript-48.png', 'icons8-angular-48.png', 'icons8-react-40.png','icons8-java-48.png', 'icons8-c-48.png', 'icons8-python-48.png', 'icons8-mysql-48.png', 'icons8-github-48.png', 'icons8-visual-studio-code-2019-48.png', 'icons8-visual-studio-48.png','icons8-figma-48.png' ];

  // getRandomColor(): string {
  //   return '#' + Math.floor(Math.random() * 16777215).toString(16);
  // }
}
