import { UserType } from "./user-type.enum";

export class UserRequest {
    username: string;
    nameAndLastname: string;
    birthDate: string;
    address: string;
    imageData: any;
    email: string;
    userType: string;
    id:number;
   
    constructor(username: string,email: string, password: string, nameAndLastname: string, addr: string, birthDate: string, userType: string, id: number){
    
        this.birthDate = birthDate;
        this.email = email;
        this.username = username;
        this.nameAndLastname = nameAndLastname;
        this.address = addr;
        this.userType = userType;
        this.id = id;
    }
}
