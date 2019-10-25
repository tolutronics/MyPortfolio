import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage  {

  constructor(private router:Router) {
    
  
  }
 
  portfolio(){
    this.router.navigate(['/portfolio']);
  }


  about(){
    this.router.navigate(['/about']);
  }


  contact(){
    this.router.navigate(['/contact']);
  }


  testimonial(){
    this.router.navigate(['/testimonials']);
  }

}

