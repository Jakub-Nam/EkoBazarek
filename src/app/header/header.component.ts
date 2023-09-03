import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user-service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public user: UserService, private router: Router) {
  }

  ngOnInit() {
    console.log(this.user.getResponseData(), 'header onInit')
  }
  showUserState(){
    console.log(this.user.getResponseData(), 'header check')
  }
  redicrectToProfile(){
    this.router.navigate(['/profile']);
  }
  redicrectToAuth(){
    this.router.navigate(['/auth']);
  }
}
