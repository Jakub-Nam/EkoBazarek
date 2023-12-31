"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CarouselComponent = void 0;
var core_1 = require("@angular/core");
var CarouselComponent = /** @class */ (function () {
    function CarouselComponent(router) {
        this.router = router;
        this.slides = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
    }
    CarouselComponent.prototype.ngOnInit = function () {
        this.slides[0] = {
            id: 0,
            src: '../../assets/pictures/fruit-vegetable-1.png',
            title: 'First slide',
            subtitle: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
        };
        this.slides[1] = {
            id: 1,
            src: '../../assets/pictures/fruit-vegetable-2.jpg',
            title: 'Second slide',
            subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        };
        this.slides[2] = {
            id: 2,
            src: '../../assets/pictures/fruit-vegetable-3.jpg',
            title: 'Third slide',
            subtitle: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
        };
    };
    CarouselComponent.prototype.redicrectToProduct = function () {
        this.router.navigate(['/product']);
    };
    CarouselComponent = __decorate([
        core_1.Component({
            selector: 'app-carousel',
            templateUrl: './carousel.component.html',
            styleUrls: ['./carousel.component.scss']
        })
    ], CarouselComponent);
    return CarouselComponent;
}());
exports.CarouselComponent = CarouselComponent;
