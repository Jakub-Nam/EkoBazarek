import { HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductToSend, ProductTypes } from 'src/app/shared/interfaces/interfaces';
import { DataAccessService } from 'src/app/shared/services/data-access/data-access.service';
import { UserService } from 'src/app/shared/services/user-service/user.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  @Input() public productTypes!: ProductTypes[];
  @Input() public productCategories!: ProductTypes[];
  @Input() public productUnits!: ProductTypes[];
  @Input() public products!: ProductTypes[];
  public productForm = this.formBuilder.group({
    productName: ['Marchew Zlota', Validators.required],
    desc: ['Niesamowita, niepowtarzalna'],
    productType: ['', Validators.required],
    category: ['', Validators.required],
    price: ['25', Validators.required],
    unit: ['', Validators.required],
  });
  public files: any[] = [];
  public file!: File;
  public selectedType!: string;
  public token!: string;



  constructor(private formBuilder: FormBuilder, private dataAccess: DataAccessService, private userService: UserService) { }

  //ProductToSend
  ngOnInit() {
    this.userService.getResponseData().subscribe({
      next: (res) => {
        this.token = res.token
        console.log(this.token)
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    });
  }


  addProductToDb() {

    let formValues: ProductToSend =
    {
      productName: this.productForm.value.productName,
      type: this.productForm.value.productType,
      category: this.productForm.value.category,
      price: this.productForm.value.price,
      unit: this.productForm.value.unit,
      desc: this.productForm.value.desc,
    }; //Czy to jest dobre rozwiazanie????

    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'application/json')
    // headers.set('Authorization', `Bearer ${this.token}`)
    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      })
    };

    console.log(httpOptions, 'addProductToDb')

    this.dataAccess.postProduct(formValues, httpOptions).subscribe(({
      next: (res) => {

        console.log(res)
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
    })
    );
  }

  onSubmit() {

  }
  resetForm(){
    this.productForm.reset();
  }

  // ngOnInit(){
  //   this.productTypes = this.productTypes.filter(type => {
  //     return true;
  //   })

  // }




  /**
   * on file drop handler
   */
  onFileDropped($event: any) {
    // this.file = $event;
    // this.files = $event;
    // // this.prepareFilesList($event);
    // console.log(this.file, 'file')
    // console.log(this.files, 'files')
  }
  /**
     * Convert Files list to normal array list
     * @param files (Files List)
     */
  prepareFilesList(files: Array<any>) {
    this.files = [];
    for (const item of files) {
      item.progress = 0;
      this.files.push(item);
      console.log(this.files)
    }
    // this.uploadFilesSimulator(0);
  }
  /**
   * handle file from browsing
   */
  fileBrowseHandler(event: any) {
    this.prepareFilesList(event.target.files);
  }

  /**
   * Delete file from files list
   * @param index (File index)
   */
  deleteFile(index: number) {
    this.files.splice(index, 1);
  }

  /**
   * Simulate the upload process
   */
  uploadFilesSimulator(index: number) {
    setTimeout(() => {
      if (index === this.files.length) {
        return;
      } else {
        const progressInterval = setInterval(() => {
          if (this.files[index].progress === 100) {
            clearInterval(progressInterval);
            this.uploadFilesSimulator(index + 1);
          } else {
            this.files[index].progress += 5;
          }
        }, 200);
      }
    }, 1000);
  }



  /**
   * format bytes
   * @param bytes (File size in bytes)
   * @param decimals (Decimals point)
   */
  formatBytes(bytes: any, decimals: any) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
}  
