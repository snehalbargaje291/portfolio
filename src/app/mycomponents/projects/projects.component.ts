import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, CarouselModule,],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Tour Management System',
      description:
        'This project is prepared to display the tour packages available and also share feedback or query regarding the tour . It helps customers to choose the right tour package on budget.',
      link: 'https://github.com/snehalbargaje291/Tour-Management-System',
    },
    {
      title: 'Masterpage with CRUD Operations',
      description:
        'simple project in which there is masterpage with gridview as well as a dekstop form with gridview both performing CRUD operations.',
      link: 'https://github.com/snehalbargaje291/asp.net',
    },
    {
      title: 'PlayWithText',
      description:
        'Simple react application which performs functions on text entered by user. Dark and light mode available.',
      link: 'https://github.com/snehalbargaje291/PlayWithText',
    },
    {
      title: 'Art Auction Management System',
      description:
        'This project is prepared to maintain the database of all items for auction and also for keeping records of bids. It helps admin overhead of keeping records manually and also helps in searching specific customer demanded items.',
      link: 'https://github.com/snehalbargaje291/artoction',
    },
    {
      title: 'Peer To Peer Carpooling',
      description: ' This project is prepared to maintain the database of all rides and also for keeping records of customers and rides. It helps admin overhead of keeping records manually and also helps in searching specific customer demanded rides',
      link: 'https://github.com/snehalbargaje291/Peer2Peer',
    },
    {
      title: 'News App',
      description: ' This project is developed to display news category wise from news API. (API might not work)',
      link: 'https://newsapp-zeta-three.vercel.app/',
    },
    {
      title: 'Learning Angular',
      description:
        'Some basic tasks while learning angular',
      link:'https://vercel.com/snehalbargajes-projects/learningangular'
    },

    // Add more project objects as needed
  ];
}
