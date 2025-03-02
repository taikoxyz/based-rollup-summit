import { instance } from "../utils/instance";
import { ICareer, ICareersResponse } from "../types";

export const careerApi = {
    async getAll(query?: string) {
        const { data } = await instance.get<ICareersResponse>(
            "/careers" + (query ? `?${query}` : "")
        );
        return data;
    },

    async getOne(slogOrId: string) {
        const { data } = await instance.get<ICareer>(`/careers/${slogOrId}`);
        return data;
    },
};
