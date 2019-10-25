import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
})
export class PortfolioPage {

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
