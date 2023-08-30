export class User {
    constructor(
        public id: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public publicphone: string,
        public password: string,
        public farmName: string,
        public farmDesc: string,
        public street: string,
        public streetNumber: string,
        public flatNumber: string,
        public city: string,
        public postCode: string,
        public country: string,
        public voivodeship: string,
        public county: string,
        public district: string,

    ) { }

}
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