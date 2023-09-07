"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AddProductComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent() {
        // private productTypesArr!: ProductTypes[]
        // @Input() public set productTypes(value: ProductTypes[]) {
        //   console.log(value, 'jestem w dziecku')
        //   this.productTypesArr = value;
        //   console.log(this.productTypesArr, 'hmmmm')
        // }
        this.productTypes = [{
                id: '',
                name: ''
            }];
        // public get productTypes(): ProductTypes[] {
        //   return this.productTypesArr
        // }
        this.files = [];
        this.typesSubject = new rxjs_1.BehaviorSubject([]);
    }
    AddProductComponent.prototype.check = function () {
        console.log(this.productTypes);
    };
    // ngOnInit(){
    //   this.productTypes = this.productTypes.filter(type => {
    //     return true;
    //   })
    // }
    /**
     * on file drop handler
     */
    AddProductComponent.prototype.onFileDropped = function ($event) {
        // this.file = $event;
        // this.files = $event;
        // // this.prepareFilesList($event);
        // console.log(this.file, 'file')
        // console.log(this.files, 'files')
    };
    /**
       * Convert Files list to normal array list
       * @param files (Files List)
       */
    AddProductComponent.prototype.prepareFilesList = function (files) {
        this.files = [];
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var item = files_1[_i];
            item.progress = 0;
            this.files.push(item);
            console.log(this.files);
        }
        // this.uploadFilesSimulator(0);
    };
    /**
     * handle file from browsing
     */
    AddProductComponent.prototype.fileBrowseHandler = function (event) {
        this.prepareFilesList(event.target.files);
    };
    /**
     * Delete file from files list
     * @param index (File index)
     */
    AddProductComponent.prototype.deleteFile = function (index) {
        this.files.splice(index, 1);
    };
    /**
     * Simulate the upload process
     */
    AddProductComponent.prototype.uploadFilesSimulator = function (index) {
        var _this = this;
        setTimeout(function () {
            if (index === _this.files.length) {
                return;
            }
            else {
                var progressInterval_1 = setInterval(function () {
                    if (_this.files[index].progress === 100) {
                        clearInterval(progressInterval_1);
                        _this.uploadFilesSimulator(index + 1);
                    }
                    else {
                        _this.files[index].progress += 5;
                    }
                }, 200);
            }
        }, 1000);
    };
    /**
     * format bytes
     * @param bytes (File size in bytes)
     * @param decimals (Decimals point)
     */
    AddProductComponent.prototype.formatBytes = function (bytes, decimals) {
        if (bytes === 0) {
            return '0 Bytes';
        }
        var k = 1024;
        var dm = decimals <= 0 ? 0 : decimals || 2;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    __decorate([
        core_1.Input()
    ], AddProductComponent.prototype, "productTypes");
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.scss']
        })
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
