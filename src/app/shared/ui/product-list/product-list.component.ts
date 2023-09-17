import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { SignalProductsService } from 'src/app/core/services/signal-products/signal-products.service';
import { ProductResponseData } from '../../interfaces/interfaces';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Output() viewTogglerEvent = new EventEmitter<boolean>();
  @Input() public isAddCard: boolean = false;
  @Input() public filteredProducts!: ProductResponseData[];
  public product!: ProductResponseData;
  public viewTogglerEmit(): void {
    this.viewTogglerEvent.emit(false)
  }
  constructor(public dialog: MatDialog, private signalProductService: SignalProductsService) {
  }

  public openDialog(i?: number): void {
    if ( i !=undefined) {
      this.signalProductService.choosenProductIndex = i;
    }
    const dialogRef = this.dialog.open(AddProductComponent)
    dialogRef.afterClosed().subscribe();
  }
}
