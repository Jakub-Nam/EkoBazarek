import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTypes } from '../../../shared/interfaces/interfaces';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent {
  @Input() public productTypes: ProductTypes[] = [];
  @Output() selectedTypeEmit = new EventEmitter<string[]>();

  // public selectedType: string | null = 'MEAT';






  // public changeSelectedType(type: string): void {

  //   console.log(type)
  //   // this.selectedType = type;
  //   // this.selectedTypeEmit.emit(this.selectedType)
  // }
  public console(x: any) {
    console.log(x)
  }


  onSelectionChange(event: MatSelectionListChange) {
    const selectedOption = event;
    let selectedTypes = selectedOption.source._value as string[];
    console.log(selectedTypes)
    // PROBLEM Z USTALENIEM TYPU
    this.selectedTypeEmit.emit(selectedTypes);

   
  }

}
