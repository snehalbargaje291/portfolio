import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'My-Resume';
  brand="<Portfolio./>"

  redirectToLinkedin() {
    window.location.href = 'https://www.linkedin.com/in/snehal-bargaje-6ab0681b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app';
  }
  redirectToGithub() {
    window.location.href = 'https://github.com/snehalbargaje291';
  }
  
}
