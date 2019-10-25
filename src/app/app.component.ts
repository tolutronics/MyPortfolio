import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    this.navigate =
    [
      {
        title : "Portfolio",
        url   : "/portfolio",
        icon  : "briefcase"
      },
      {
        title : "About",
        url   : "/about",
        icon  : "chatboxes"
      },
      {
        title : "Contact",
        url   : "/contact",
        icon  : "contacts"
      },
      {
        title : "Testimonial",
        url   : "/testimonials",
        icon  : "contacts"
      },
    ]
   
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  
}
