import { Gender } from "../authorization/register-user.model";

export interface UserDetails {
    pinCode?: number;
    firstname?: string;
    lastname?: string;
    birthDay?: number;
    birthMonth?: number;
    birthYear?: number;
    birtDate?: Date;
    gender?: Gender;
    address?: string;
    phoneNumber?: string;
    email?: string;
    balance?: number;
}