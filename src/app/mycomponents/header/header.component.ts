import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  headerText = "";

  constructor(private sharedService: MyserviceService) { }

  ngOnInit(): void {
    const txt = "Hi! I'm Snehal Bargaje.";
    const speed = 150;
    this.sharedService.typeWriter(txt, speed, (displayText: string) => {
      this.headerText = displayText;
    });
  }
}
