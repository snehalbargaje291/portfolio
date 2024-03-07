import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone:true,
  imports:[ReactiveFormsModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  successMessage!: string;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submitForm() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    // Submit form data to Formspree using HTTP POST request
    this.http.post('https://formspree.io/f/mjvnogkw', this.contactForm.value)
      .subscribe( 
        response => {
          this.successMessage = 'Your message has been sent successfully!';
          this.contactForm.reset();
        }
      );
  }
}
