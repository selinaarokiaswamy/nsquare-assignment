import { UserInfo } from './models/authentication.model';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nsquare-assignment';
  user_info: UserInfo
  constructor(public authService: AuthenticationService, private router: Router){
    this.authService.user_info?.subscribe(user => {
      this.user_info = user
    })
  }

  logout(){
    this.authService.logout()

    this.router.navigate(['/login'])
  }
}
