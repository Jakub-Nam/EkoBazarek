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
var core_2 = require("@angular/material/core");
var common_1 = require("@angular/common");
var input_1 = require("@angular/material/input");
var validators_1 = require("../../validators/validators");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuilder, dataAccess, userService, dialogRef, data) {
        this.formBuilder = formBuilder;
        this.dataAccess = dataAccess;
        this.userService = userService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.productForm = this.formBuilder.group({
            productName: ['Marchew Zlota', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            desc: ['Niesamowita, niepowtarzalna', [forms_1.Validators.maxLength(250)]],
            productType: ['', forms_1.Validators.required],
            category: ['', forms_1.Validators.required],
            price: [25, [forms_1.Validators.required, validators_1.priceValidator()]],
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
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        if (this.productForm.valid) {
            var formData = new FormData();
            formData.append('name', (_b = (_a = this.productForm) === null || _a === void 0 ? void 0 : _a.get('productName')) === null || _b === void 0 ? void 0 : _b.value);
            formData.append('type', (_d = (_c = this.productForm) === null || _c === void 0 ? void 0 : _c.get('productType')) === null || _d === void 0 ? void 0 : _d.value);
            formData.append('category', (_f = (_e = this.productForm) === null || _e === void 0 ? void 0 : _e.get('category')) === null || _f === void 0 ? void 0 : _f.value);
            // formData.append('price', this.productForm?.get('price')?.value as number);
            formData.append('unit', (_h = (_g = this.productForm) === null || _g === void 0 ? void 0 : _g.get('unit')) === null || _h === void 0 ? void 0 : _h.value);
            formData.append('desc', (_k = (_j = this.productForm) === null || _j === void 0 ? void 0 : _j.get('desc')) === null || _k === void 0 ? void 0 : _k.value);
            var formDataObject_1 = {};
            formData.forEach(function (value, key) {
                formDataObject_1[key] = value;
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
        }
    };
    AddProductComponent.prototype.resetForm = function () {
        this.productForm.reset();
    };
    AddProductComponent.prototype.onClose = function () {
        this.dialogRef.close();
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
            imports: [
                form_field_1.MatFormFieldModule,
                forms_1.FormsModule,
                select_1.MatSelectModule,
                forms_1.ReactiveFormsModule,
                core_2.MatOptionModule,
                common_1.CommonModule,
                dialog_1.MatDialogModule,
                input_1.MatInputModule
            ],
            standalone: true
        }),
        __param(4, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
