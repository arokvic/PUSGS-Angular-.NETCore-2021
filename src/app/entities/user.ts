import { UserType } from "./user-type.enum";

export class User {
    username: string;
    password: string;
    nameAndLastname: string;
    birthDate: string;
    address: string;    
    userType: string;

   
    constructor(username: string, password: string, nameAndLastname: string, addr: string, birthDate: string, userType: string){
    
        this.birthDate = birthDate;
        this.password = password;
        this.username = username;
        this.nameAndLastname = nameAndLastname;
        this.address = addr;
        this.userType = userType;  
    }
}