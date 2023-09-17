"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.SignalProductsService = void 0;

var core_1 = require("@angular/core");

var SignalProductsService =
/** @class */
function () {
  function SignalProductsService() {
    this.signalProducts = core_1.signal([{
      productName: 'Marchew',
      type: 'VEGETABLE',
      category: 'CARROT',
      price: 15,
      unit: 'kg',
      desc: 'Niepowtarzalna jakosc i kolor. '
    }]);
  }

  SignalProductsService.prototype.addToSignalProdcuts = function (product) {
    console.log(this.signalProducts(), 0); // let product: Product= {
    //   productName: 'Karkówka',
    //   type: 'MEAT',
    //   category: 'BEAF',
    //   price: 55,
    //   unit: '1kg',
    //   desc: '',
    // }

    this.signalProducts.mutate(function (values) {
      return values.push(product);
    });
    console.log(this.signalProducts(), 1);
  };

  SignalProductsService = __decorate([core_1.Injectable({
    providedIn: 'root'
  }) // Property 'mutate' does not exist on type 'Signal<Product[]>'.ts(2339)
  // : Signal<Product[]>
  ], SignalProductsService);
  return SignalProductsService;
}();

exports.SignalProductsService = SignalProductsService;