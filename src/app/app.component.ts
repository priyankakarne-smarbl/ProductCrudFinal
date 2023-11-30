import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import {NgbConfig} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProductCrud';
  isLoginPage: boolean=false;
  constructor(ngbConfig: NgbConfig, private router : Router) {
    ngbConfig.animation = false;
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        if(event['url'] =='/login'){
          this.isLoginPage=false;
        }else{
          this.isLoginPage=true;
        }
       
      }
    });
  }



  
}
