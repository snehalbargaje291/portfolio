import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }

  typeWriter(txt: string, speed: number, callback: (displayText: string) => void): void {
    let displayText = '';
    let i = 0;
    const timer = setInterval(() => {
      if (i < txt.length) {
        displayText += txt.charAt(i);
        i++;
        callback(displayText); // Update displayText in the component
      } else {
        clearInterval(timer);
      }
    }, speed);
  }
}
