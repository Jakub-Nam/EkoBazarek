import { Component, Input } from '@angular/core';
import { ProductCategory } from 'src/app/shared/interfaces/interfaces';
@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  @Input() public productCategory: ProductCategory =
    {
      iconUrl: '',
      id: '',
      name: '',
      type: ''
    }
}
