export class WorkRequest {
    id!:number;
    type:string;
    status:string;
    incident:string;
    street:string;
    startDate:string;
    endDate:string;
    crew: string;
    createdBy:string;
    notes:string;
    company:string;
    phone:string;
    dateCreated:string;
    imageData:string;
    equipment:string;
   
   
    constructor(
        type:string,
        status:string,
        incident:string,
        street:string,
        startDate:string,
        endDate:string,
        crew:string,
        createdBy:string,
        notes:string,
        company:string,
        phone:string,
        dateCreated:string,
        imageData:string,
        equipment:string,
       )       
   {
      
    this.type = type;
    this.status = status;
    this.incident = incident;
    this.street = street;
    this.startDate = startDate;
    this.endDate = endDate;
    this.crew = crew;
    this.createdBy = createdBy;
    this.notes = notes;
    this.company = company;
    this.phone = phone;
    this.dateCreated = dateCreated;
    this.imageData = "";
    this.equipment = "";

       
   }
   
   
   }