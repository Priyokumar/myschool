import { IKeyValue } from './IKeyVal';


export class UserRole {
    static SUPER_ADMIN: String = "SUPER_ADMIN";
    static ADMIN: String = "ADMIN";
    static CLERK: String = "CLERK";
}

export const userRoles: IKeyValue[] = [

    { key: UserRole.SUPER_ADMIN, value: "Super admin" },
    { key: UserRole.ADMIN, value: "Admin" },
    { key: UserRole.CLERK, value: "Clerk" }
]

export const BloodGroups = [
    "A+",
    "A-",
    "B+",
    "B-",
    "O+",
    "O-",
    "AB+",
    "AB-"
]

export const Relgions = [

    "Sanamahism",
    "Hinduism",
    "Islam",
    "Christian",
    "Others"
]

export const Nationalities = [

    "Indian"

]

export const Communities = [

    "General",
    "SC/ST",
    "OBC",
    "Others"
]

