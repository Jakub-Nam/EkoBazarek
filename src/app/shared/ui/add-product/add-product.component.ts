import { Component, Inject, Input, OnInit, } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductResponseData, ProductTypes } from 'src/app/shared/interfaces/interfaces';
import { DataAccessService } from '../../../core/services/data-access/data-access.service';
import { __values } from 'tslib';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { priceValidator } from '../../validators/price-validator';
import { SignalProductsService } from 'src/app/core/services/signal-products/signal-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatOptionModule,
    CommonModule,
    MatDialogModule,
    MatInputModule],
  standalone: true
})

export class AddProductComponent implements OnInit {
  public productTypes!: ProductTypes[];
  public productCategories!: ProductTypes[];
  public productUnits!: ProductTypes[];
  public isEdit: boolean = this.singalProductService.choosenProductIndex >= 0;
  @Input() public products!: ProductTypes[];
  public productForm = this.formBuilder.group({
    id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    name: ['', [Validators.required, Validators.minLength(3)]],
    desc: ['', [Validators.maxLength(250)]],
    type: ['', Validators.required],
    category: ['', Validators.required],
    price: [0, [Validators.required, priceValidator()]],
    unit: ['', Validators.required],
    createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
    createDate: 1690093259833
  });
  public selectedType!: string;

  constructor(
    private formBuilder: FormBuilder,
    private dataAccess: DataAccessService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private singalProductService: SignalProductsService) { }

  ngOnInit(): void {
    this.dataAccess.getProductTypes.subscribe({
      next: (productTypes) => {
        this.productTypes = productTypes;
      }
    });

    this.dataAccess.getProductCategories.subscribe({
      next: (productCategories) => {
        this.productCategories = productCategories;
      }
    });

    this.dataAccess.getProductUnits.subscribe({
      next: (productUnits) => {
        this.productUnits = productUnits;
      }
    });

    
  }

  public changeSignalProducts(): void {
    let product: ProductResponseData = this.productForm.value as ProductResponseData;
    if (this.singalProductService.choosenProductIndex >= 0) {
      this.singalProductService.mutateSignalProdcuts(product);
    } else {
      this.singalProductService.addToSignalProducts(product);
    }
    this.singalProductService.choosenProductIndex = -1;
    this.onClose();
  }

  public resetForm(): void {
    this.productForm.reset();
    this.singalProductService.choosenProductIndex = -1;
  }

  public onClose(): void {
    this.dialogRef.close();
    this.singalProductService.choosenProductIndex = -1;
  }
}