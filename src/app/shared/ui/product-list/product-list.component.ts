import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';

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
  animal: string = 'lew';
  name: string = 'Kukułek';

  constructor(public dialog: MatDialog){}

  public openDialog(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
