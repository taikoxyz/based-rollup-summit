import { instance } from "../utils/instance";
import { IBaseFields, IProject, IProjectCategoriesResponse, IProjectsResponse } from "../types";

export const projectApi = {
    async getAll(query?: string) {
        const { data } = await instance.get<IProjectsResponse>(
            "/ecosystems" + (query ? `?${query}` : "")
        );
        return data;
    },

    async getOne(slogOrId: string) {
        const { data } = await instance.get<IProject>(`/ecosystems/${slogOrId}`);
        return data;
    },

    async getLast() {
        const { data } = await instance.get<IBaseFields>("/ecosystems/last");
        return data;
    },

    async getCategories() {
        const { data } = await instance.get<IProjectCategoriesResponse>("/project-categories");
        return data;
    },
};
