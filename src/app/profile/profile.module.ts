import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { MatTabsModule } from '@angular/material/tabs';
import { SharedModule } from '../shared/shared.module';
import { ChangePassComponent } from './ui/change-pass/change-pass.component';
import { ReactiveFormsModule } from '@angular/forms';

const materialComponents: unknown[] = 
[
  MatTabsModule
]

@NgModule({
  declarations: [
    ProfileComponent,
    ChangePassComponent,
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ReactiveFormsModule,
    materialComponents,
    SharedModule
  ]
})
export class ProfileModule { }
