"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DndDirective = void 0;
var core_1 = require("@angular/core");
var DndDirective = /** @class */ (function () {
    function DndDirective() {
        this.fileDropped = new core_1.EventEmitter();
    }
    // Dragover listener
    DndDirective.prototype.onDragOver = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = true;
    };
    // Dragleave listener
    DndDirective.prototype.onDragLeave = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
    };
    // Drop listener
    DndDirective.prototype.ondrop = function (evt) {
        evt.preventDefault();
        evt.stopPropagation();
        this.fileOver = false;
        var files = evt.dataTransfer.files;
        if (files.length > 0) {
            this.fileDropped.emit(files);
        }
    };
    __decorate([
        core_1.HostBinding('class.fileover')
    ], DndDirective.prototype, "fileOver");
    __decorate([
        core_1.Output()
    ], DndDirective.prototype, "fileDropped");
    __decorate([
        core_1.HostListener('dragover', ['$event'])
    ], DndDirective.prototype, "onDragOver");
    __decorate([
        core_1.HostListener('dragleave', ['$event'])
    ], DndDirective.prototype, "onDragLeave");
    __decorate([
        core_1.HostListener('drop', ['$event'])
    ], DndDirective.prototype, "ondrop");
    DndDirective = __decorate([
        core_1.Directive({
            selector: '[appDnd]'
        })
    ], DndDirective);
    return DndDirective;
}());
exports.DndDirective = DndDirective;
