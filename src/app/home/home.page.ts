import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
navigate:any;
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
