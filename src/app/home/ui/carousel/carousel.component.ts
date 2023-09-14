import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface Slide { 
  id: number, 
  src: string, 
  title: string, 
  subtitle: string 
}
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides: Slide[] = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: '../../assets/pictures/fruit-vegetable-1.png',
      title: 'First slide',
      subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    };
    this.slides[1] = {
      id: 1,
      src: '../../assets/pictures/fruit-vegetable-2.jpg',
      title: 'Second slide',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
    this.slides[2] = {
      id: 2,
      src: '../../assets/pictures/fruit-vegetable-3.jpg',
      title: 'Third slide',
      subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
    }
  }
  
  public redicrectToProduct(): void{
    this.router.navigate(['/product']);
  }
}
