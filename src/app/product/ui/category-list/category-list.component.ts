import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductCategory } from '../../../shared/interfaces/interfaces';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  @Input() public filteredProductCategories!: ProductCategory[];
  @Output() selectedCategoryEmit = new EventEmitter<string>();
  public selectedCategory!: string;

  public emitSelectedCategory(category: string): void {
    this.selectedCategory = category;
    this.selectedCategoryEmit.emit(this.selectedCategory)
  }
}
