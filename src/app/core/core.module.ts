import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataAccessService } from './services/data-access/data-access.service';
import { UserService } from './services/user-service/user.service';
import { SnackBarService } from './services/snack-bar/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserService,
    DataAccessService,
    SnackBarService
  ],
  
})
export class CoreModule { }
