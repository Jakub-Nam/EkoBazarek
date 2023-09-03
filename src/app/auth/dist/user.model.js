"use strict";
exports.__esModule = true;
exports.User = void 0;
var User = /** @class */ (function () {
    function User(id, firstName, lastName, email, publicphone, password, farmName, farmDesc, street, streetNumber, flatNumber, city, postCode, country, voivodeship, county, district) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.publicphone = publicphone;
        this.password = password;
        this.farmName = farmName;
        this.farmDesc = farmDesc;
        this.street = street;
        this.streetNumber = streetNumber;
        this.flatNumber = flatNumber;
        this.city = city;
        this.postCode = postCode;
        this.country = country;
        this.voivodeship = voivodeship;
        this.county = county;
        this.district = district;
    }
    return User;
}());
exports.User = User;
// 
// public _token: string,
// public _tokenExpirationDate: Date | null,
// public id?: string
// get token() {
//     if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
//         return null;
//     }
//     return this._token;
// }
