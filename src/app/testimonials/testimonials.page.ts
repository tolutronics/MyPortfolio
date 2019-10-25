import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.page.html',
  styleUrls: ['./testimonials.page.scss'],
})
export class TestimonialsPage  {

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
