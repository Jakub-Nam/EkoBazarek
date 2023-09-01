export interface UserCred {
    email?: string | null | undefined,
    password?: string | null | undefined
}

export interface UserData {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
    farmName: string,
    farmDesc: string,
    street: string,
    flatNumber: string,
    city: string,
    postCode: string,
    country: string,
    voivodeship: string,
    county: string,
    district: string,
    id?: string,
}
// user: {
//     city: string,
//     country: string,
//     county: string,
//     district: string,
//     email: string,
//     farmDesc: string,
//     farmName: string,
//     firstName: string,
//     id: string,
//     lastName: string,
//     phone: string,
//     postCode: string,
//     street: string,
//     streetNumber: string,
//     voivodeship: string,
// }
