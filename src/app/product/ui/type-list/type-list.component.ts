import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductTypes } from '../../../shared/interfaces/interfaces';
import { MatSelectionListChange } from '@angular/material/list';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent {
  @Input() public productTypes: ProductTypes[] = [];
  @Output() selectedTypeEmit = new EventEmitter<string[]>();
  public checkboxColor: ThemePalette = 'primary';
  public selected!: boolean;

  public onSelectionChange(event: MatSelectionListChange): void {
    const selectedOption = event;
    let selectedTypes = selectedOption.source._value as string[];
    this.selectedTypeEmit.emit(selectedTypes);
  }
}
