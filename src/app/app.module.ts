import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { AuthModule } from './auth/auth.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './home/ui/carousel/carousel.component';
import { CarouselModule } from '@coreui/angular';
import { CategoryCardComponent } from './home/ui/category-card/category-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { NgModule } from '@angular/core';
import { ProductModule } from './product/product.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';


const materialComponents: unknown[] = 
[
  MatIconModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    CategoryCardComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule,
    AuthModule,
    FormsModule,
    ProductModule, 
    SharedModule,  
    ReactiveFormsModule, 
    materialComponents,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
