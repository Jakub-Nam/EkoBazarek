import { Component, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductTypes } from 'src/app/shared/interfaces/interfaces';
import { __values } from 'tslib';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  // private productTypesArr!: ProductTypes[]
  // @Input() public set productTypes(value: ProductTypes[]) {
  //   console.log(value, 'jestem w dziecku')
  //   this.productTypesArr = value;
  //   console.log(this.productTypesArr, 'hmmmm')
  // }
  @Input() public productTypes: ProductTypes[] = [{
    id: '',
    name: ''
}];

  // public get productTypes(): ProductTypes[] {
  //   return this.productTypesArr
  // }

  public files: any[] = [];
  public file!: File;
  public selectedType!: string
  typesSubject = new BehaviorSubject<any[]>([]);


  check() {

    console.log(this.productTypes);
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
