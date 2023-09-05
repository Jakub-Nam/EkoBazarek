import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent, 
    pathMatch: 'full'
  },
  { 
    path: '',   
    redirectTo: '/home', 
    pathMatch: 'full' 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
    pathMatch: 'full'
  },
  { 
    path: 'profile', 
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule),
    pathMatch: 'full' 
  },
  { 
    path: 'product', 
    loadChildren: () => import('./product/product.module').then(m => m.ProductModule),
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: HomeComponent,
  }
   // ^ -in future page not found comp!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
