import { UserType } from "./user-type.enum";

export class User {
    username: string;
    password: string;
    nameAndLastname: string;
    birthDate: string;
    address: string;   
    imageData: any;
    email: string; 
    userType: string;
    notifications: Array<Notification>;
    activeStatus: string;
   
    constructor(username: string, email: string, password: string, nameAndLastname: string, addr: string, birthDate: string, userType: string){
    
        this.birthDate = birthDate;
        this.password = password;
        this.username = username;
        this.email = email;
        this.nameAndLastname = nameAndLastname;
        this.address = addr;
        this.userType = userType;  
        this.activeStatus = 'Inactive';
        this.notifications = new Array<Notification>();
    }
}