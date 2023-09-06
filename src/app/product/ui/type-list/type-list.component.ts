import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTypes } from '../../../shared/interfaces/interfaces';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent {
  @Input() public productTypes: ProductTypes[] = [];
  @Output() selectedTypeEmit = new EventEmitter<string>();

  public selectedType: string | null = 'MEAT';



  


  public changeSelectedType(type: string): void {
    this.selectedType = type;
    this.selectedTypeEmit.emit(this.selectedType)
  }

}
