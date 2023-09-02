import { Component, Input } from '@angular/core';

interface ProductCategory {
  iconUrl: string,
  id: string,
  name: string,
  type: string,
};

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
