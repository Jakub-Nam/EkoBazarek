export interface User {
    user: {
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
}
// id	[...]
// firstName	[...]
// lastName	[...]
// email	[...]
// phone	[...]
// password	[...]
// farmName	[...]
// farmDesc	[...]
// street	[...]
// streetNumber	[...]
// flatNumber	[...]
// city	[...]
// postCode	[...]
// country	[...]
// voivodeship	[...]
// county	[...]
// district
export interface ReponseLoginData extends User {
    token: string,
}