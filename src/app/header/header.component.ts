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
        if (res.user.farmName !== '') {
          this.isUser = true;
        } else {
          this.isUser = false;
        }
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });

  }

  public redicrectToProfile(): void {
    this.router.navigate(['/profile']);
  }

  public redicrectToAuth(): void {
    this.router.navigate(['/auth']);
  }

  public logout(): void {
    this.userService.logout();
    this.router.navigate(['/home']);
  }
}
