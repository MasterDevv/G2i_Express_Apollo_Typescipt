import { ObjectId } from "mongoose";


// model interfaces
export interface IAcornym {
    _id: ObjectId;
    acronym: string;
    definition: string
}


// argument interfaces
export interface IGrgsGetAcornym {
    from: number;
    limit: number;
    search: String
}

export interface IGrgsAddorUpdateAcornym {
    acronym: string;
    definition: string
}

export interface IGrgsDelAcornym {
    acronym: string;
}
