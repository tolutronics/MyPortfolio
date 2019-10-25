import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage  {

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
