
export class SafetyDocument {
    //Basic Information
    safetyDocumentId?: string;
    type?: string;
    status?: string;
    switchingPlan?: string;
    safetyDocType?: string; //ne znam sta je, nije napisano u spec
    dateCreated?: string; 
    createdBy?: string;
    phoneNum?: string;
    fieldCrew?: string;
    details?: string;
    notes?: string;
    //History of state changes
    newState?: string;
    usersThatChangedDocument?: string;

    //Multimedia attachments
    file?: string;
    //Devices
    devicesSelected?: string;
    //Checklist
    operationsCompleted?: boolean;
    tagsRemoved?: boolean;
    groundingRemoved?: boolean;
    readyForService?: boolean;
    
    constructor(
        safetyDocumentId?: string,
        type?: string, 
        status?: string,
        switchingPlan?: string,
        safetyDocType?: string,
        dateCreated?: string,
        createdBy?: string,
        phoneNum?: string,
        fieldCrew?: string,
        details?: string,
        notes?: string,
        newState?: string,
        usersThatChangedDocument?: string,
        file?:string,
        devicesSelected?:string,
        operationsCompleted?:boolean,
        tagsRemoved?:boolean,
        groundingRemoved?:boolean,
        readyForService?:boolean,


        )       
    {
        this.safetyDocumentId = safetyDocumentId;
        this.type = type;
        this.status = status;
        this.switchingPlan = switchingPlan;
        this.safetyDocType = safetyDocType;
        this.dateCreated = dateCreated;
        this.createdBy = createdBy;
        this.phoneNum = phoneNum;
        this.fieldCrew = fieldCrew;
        this.details = details;
        this.notes = notes;
        this.newState = newState;
        this.usersThatChangedDocument = usersThatChangedDocument;   
        this.file = file;     
        this.devicesSelected = devicesSelected;  
        this.operationsCompleted = operationsCompleted;
        this.tagsRemoved = tagsRemoved;
        this.groundingRemoved = groundingRemoved;
        this.readyForService = readyForService;       
    }
}
