
export class Call {
    //Basic Information
    callId?: string;
    reason?: string;
    hazard?: string;
    comment?: string;
    
    
    constructor(
        callId?: string,
        reason?: string, 
        hazard?: string,
        comment?: string,
        


        )       
    {
        this.callId = callId;
        this.reason = reason;
        this.hazard = hazard;
        this.comment = comment;
             
    }
}
