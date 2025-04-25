import { IBaseFields, IServerResponse } from "./global";

export interface ICareer extends IBaseFields {
    title: string;
    slug: string;
    type: string;
    location: string;
    content: any;
    howToApply: any;
}

export type ICareersResponse = IServerResponse<ICareer>;
