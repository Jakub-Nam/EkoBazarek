import { HttpHeaders } from '@angular/common/http';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductTypes } from 'src/app/shared/interfaces/interfaces';
import { DataAccessService } from '../../../core/services/data-access/data-access.service';
import { UserService } from '../../../core/services/user-service/user.service';
import { __values } from 'tslib';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { priceValidator } from '../../validators/validators';

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
  @Input() public productTypes!: ProductTypes[];
  @Input() public productCategories!: ProductTypes[];
  @Input() public productUnits!: ProductTypes[];
  @Input() public products!: ProductTypes[];
  public productForm = this.formBuilder.group({
    productName: ['Marchew Zlota', [Validators.required, Validators.minLength(3)]],
    desc: ['Niesamowita, niepowtarzalna', [Validators.maxLength(250)]],
    productType: ['', Validators.required],
    category: ['', Validators.required],
    price: [25, [Validators.required, priceValidator()]],
    unit: ['', Validators.required],
  });
  public files: any[] = [];
  public file!: File;
  public selectedType!: string;
  public token!: string;

  constructor(
    private formBuilder: FormBuilder,
    private dataAccess: DataAccessService,
    private userService: UserService,
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit(): void {
    this.userService.getResponseData().subscribe({
      next: (res) => {
        this.token = res.token
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }


  public addProductToDb(): void {
    if (this.productForm.valid) {
      const formData = new FormData();

      formData.append('name', this.productForm?.get('productName')?.value as string);
      formData.append('type', this.productForm?.get('productType')?.value as string);
      formData.append('category', this.productForm?.get('category')?.value as string);
      // formData.append('price', this.productForm?.get('price')?.value as number);
      formData.append('unit', this.productForm?.get('unit')?.value as string);
      formData.append('desc', this.productForm?.get('desc')?.value as string);

      const formDataObject: any = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${this.token}`
        })
      };

      this.dataAccess.postProduct(formData, httpOptions).subscribe(({
        next: (res) => {
          console.log(res)
        },
        error: (err: Error) => console.error('Observer got an error: ' + err),
      }));
    }

  }

  public resetForm(): void {
    this.productForm.reset();
  }

  public onClose(): void {
    this.dialogRef.close();
  }
}  
