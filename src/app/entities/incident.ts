
export class Incident {
    id!: string;
    typeOfInc: string;
    priority: number;
    confirmed: boolean;
    status: string;
    eta: string;
    ata: string;
    outageTime: string;
    etr: string;
    affectedCustomers: number;
    calls: number;
    voltageLevel: number;
    scheduledTime: string;
    assignedTo : string;

    constructor(
        typeOfInc: string,
        priority: number,
        confirmed: boolean,
        status: string,
        eta: string,
        ata: string,
        outageTime: string,
        etr: string,
        affectedCustomers: number,
        calls: number,
        voltageLevel: number,
        scheduledTime: string,
        assignedTo : string)       
    {
        
        this.typeOfInc= typeOfInc;
        this.priority= priority;
        this.confirmed= confirmed;
        this.status= status;
        this.eta= eta;
        this.ata= ata;
        this.outageTime= outageTime;
        this.etr= etr;
        this.affectedCustomers= affectedCustomers;
        this.calls= calls;
        this.voltageLevel= voltageLevel;
        this.scheduledTime= scheduledTime;
        this.assignedTo = assignedTo;
        this.id = "4";
    }
}