
export class Element {
    type: string;
    id: number;
    name: string;
    address: string;
    coordinates: string;
    inSafetyDocument: boolean;

    

    constructor(
        type: string, 
        id: number,
        name: string,
        address: string,
        coordinates: string,
        inSafetyDocument: boolean
        )       
    {
        this.id = id;
        this.type = type;
        this.address = address;
        this.name = name;
        this.coordinates = coordinates;
        this.inSafetyDocument = inSafetyDocument;
        
    }
}
