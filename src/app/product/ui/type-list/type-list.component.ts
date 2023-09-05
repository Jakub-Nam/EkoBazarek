import { Component, Input } from '@angular/core';
import { ProductTypes } from 'src/app/shared/interfaces/interfaces';

@Component({
  selector: 'app-type-list',
  templateUrl: './type-list.component.html',
  styleUrls: ['./type-list.component.scss']
})
export class TypeListComponent {
@Input() public productTypes: ProductTypes[] = [];

}
