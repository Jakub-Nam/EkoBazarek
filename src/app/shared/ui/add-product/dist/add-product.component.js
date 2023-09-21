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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var dialog_1 = require("@angular/material/dialog");
var form_field_1 = require("@angular/material/form-field");
var select_1 = require("@angular/material/select");
var core_2 = require("@angular/material/core");
var common_1 = require("@angular/common");
var input_1 = require("@angular/material/input");
var price_validator_1 = require("../../validators/price-validator");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(formBuilder, dataAccess, dialogRef, data, singalProductService) {
        this.formBuilder = formBuilder;
        this.dataAccess = dataAccess;
        this.dialogRef = dialogRef;
        this.data = data;
        this.singalProductService = singalProductService;
        this.isEdit = this.singalProductService.choosenProductIndex >= 0;
        this.productForm = this.formBuilder.group({
            id: "4cf938da-51cc-41c6-b7b1-763433bbce83",
            name: ['', [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            desc: ['', [forms_1.Validators.maxLength(250)]],
            type: ['', forms_1.Validators.required],
            category: ['', forms_1.Validators.required],
            price: [0, [forms_1.Validators.required, price_validator_1.priceValidator()]],
            unit: ['', forms_1.Validators.required],
            createdBy: "4cf938da-51cc-41c6-b7b1-763433bbce83",
            createDate: 1690093259833
        });
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataAccess.getProductTypes.subscribe({
            next: function (productTypes) {
                _this.productTypes = productTypes;
            }
        });
        this.dataAccess.getProductCategories.subscribe({
            next: function (productCategories) {
                _this.productCategories = productCategories;
            }
        });
        this.dataAccess.getProductUnits.subscribe({
            next: function (productUnits) {
                _this.productUnits = productUnits;
            }
        });
    };
    AddProductComponent.prototype.changeSignalProducts = function () {
        var product = this.productForm.value;
        if (this.singalProductService.choosenProductIndex >= 0) {
            this.singalProductService.mutateSignalProdcuts(product);
        }
        else {
            this.singalProductService.addToSignalProducts(product);
        }
        this.singalProductService.choosenProductIndex = -1;
        this.onClose();
    };
    AddProductComponent.prototype.resetForm = function () {
        this.productForm.reset();
        this.singalProductService.choosenProductIndex = -1;
    };
    AddProductComponent.prototype.onClose = function () {
        this.dialogRef.close();
        this.singalProductService.choosenProductIndex = -1;
    };
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
        __param(3, core_1.Inject(dialog_1.MAT_DIALOG_DATA))
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
