"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.AddProductComponent = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuilder, dataAccess, userService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dataAccess = dataAccess;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.productForm = this.formBuilder.group({
            productName: ['Marchew Zlota', forms_1.Validators.required],
            desc: ['Niesamowita, niepowtarzalna'],
            productType: ['', forms_1.Validators.required],
            category: ['', forms_1.Validators.required],
            price: ['25', forms_1.Validators.required],
            unit: ['', forms_1.Validators.required]
        });
        this.files = [];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getResponseData().subscribe({
            next: function (res) {
                _this.token = res.token;
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        });
    };
    AddProductComponent.prototype.addProductToDb = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        var formData = new FormData();
        formData.append('name', (_b = (_a = this.productForm) === null || _a === void 0 ? void 0 : _a.get('productName')) === null || _b === void 0 ? void 0 : _b.value);
        formData.append('type', (_d = (_c = this.productForm) === null || _c === void 0 ? void 0 : _c.get('productType')) === null || _d === void 0 ? void 0 : _d.value);
        formData.append('category', (_f = (_e = this.productForm) === null || _e === void 0 ? void 0 : _e.get('category')) === null || _f === void 0 ? void 0 : _f.value);
        formData.append('price', (_h = (_g = this.productForm) === null || _g === void 0 ? void 0 : _g.get('price')) === null || _h === void 0 ? void 0 : _h.value);
        formData.append('unit', (_k = (_j = this.productForm) === null || _j === void 0 ? void 0 : _j.get('unit')) === null || _k === void 0 ? void 0 : _k.value);
        formData.append('desc', (_m = (_l = this.productForm) === null || _l === void 0 ? void 0 : _l.get('desc')) === null || _m === void 0 ? void 0 : _m.value);
        // const headers = new HttpHeaders();
        // headers.set('Content-Type', 'multipart/form-data')
        // headers.set('Authorization', `Bearer ${this.token}`)
        var formDataObject = {};
        formData.forEach(function (value, key) {
            formDataObject[key] = value;
        });
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'multipart/form-data',
                'Authorization': "Bearer " + this.token
            })
        };
        this.dataAccess.postProduct(formData, httpOptions).subscribe(({
            next: function (res) {
                console.log(res);
            },
            error: function (err) { return console.error('Observer got an error: ' + err); }
        }));
    };
    AddProductComponent.prototype.resetForm = function () {
        this.productForm.reset();
    };
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
    __decorate([
        core_1.Input()
    ], AddProductComponent.prototype, "productCategories");
    __decorate([
        core_1.Input()
    ], AddProductComponent.prototype, "productUnits");
    __decorate([
        core_1.Input()
    ], AddProductComponent.prototype, "products");
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.scss'],
            imports: [form_field_1.MatFormFieldModule, forms_1.FormsModule, select_1.MatSelectModule, forms_1.ReactiveFormsModule],
            standalone: true
        }),
        __param(4, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
