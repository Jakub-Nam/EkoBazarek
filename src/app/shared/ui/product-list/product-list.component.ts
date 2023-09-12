import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Output() viewTogglerEvent = new EventEmitter<boolean>();
  @Input() public isAddCard: boolean = false;
  public viewTogglerEmit(): void {
    this.viewTogglerEvent.emit(false)
  }
}
