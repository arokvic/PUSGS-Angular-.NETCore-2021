
export class Incident {
    id: string;
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

    constructor(id: string,
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
        scheduledTime: string)       
    {
        this.id= id;
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
    }
}