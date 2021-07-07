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
    cause : string;
    subcause : string;
    material : string;
    constructionType : string;
    consumerId : string;
    comment : string;
    hazard : string;
    reason : string;
    deviceId : string;
    equipmentId : string;
    imageData : any;
    crewId : string;
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
        assignedTo : string,
        cause : string,
    subcause : string,
    material : string,
    constType : string,
    consId : string,
    comment : string,
    hazard : string,
    reason : string,
    deviceId : string,
    equipmentId : string,
    imageData : any,
    crewId : string
    )
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
        this.cause = cause;
        this.subcause = subcause;
        this.material = material;
        this.constructionType = constType;
        this.consumerId = consId;
        this.comment = comment;
        this.hazard = hazard;
        this.reason = reason;
        this.deviceId = deviceId;
        this.imageData = imageData;
        this.equipmentId = equipmentId;
        this.crewId = crewId;
    }
}