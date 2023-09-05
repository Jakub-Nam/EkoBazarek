import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isUser: boolean = false;

  constructor(public userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this.userService.getResponseData().subscribe({
      next: (res) => {
       if(res.user.farmName !== ''){
        this.isUser = true;
       } else {
        this.isUser = false;
       }
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

  }

  showUserState() {
    console.log(this.userService.getResponseData(), 'header check')
  }

  redicrectToProfile() {
    this.router.navigate(['/profile']);
  }

  redicrectToAuth() {
    this.router.navigate(['/auth']);
  }

  logout() {
    this.userService.logout();
  }
}
