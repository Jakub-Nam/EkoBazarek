
export interface ProductCategory {
    iconUrl: string,
    id: string,
    name: string,
    type: string,
};

export interface ProductTypes {
    id: string,
    name: string
}

export interface User {
    city: string | null | undefined,
    county: string | null | undefined,
    district: string | null | undefined,
    email: string | null | undefined,
    farmDesc: string | null | undefined,
    farmName: string | null | undefined,
    firstName: string | null | undefined,
    flatNumber: string | null | undefined,
    lastName: string | null | undefined,
    phone: string | null | undefined,
    postCode: string | null | undefined,
    street: string | null | undefined,
    streetNumber: string | null | undefined,
    voivodeship: string | null | undefined,
    id?: string | null | undefined,
    country?: string | null | undefined,
    password?: string | null | undefined,
}

export interface ReponseLoginData {
    token: string,
    user: User
}

