import { instance } from "../utils/instance";
import { IBlogCategoryResponse } from "../types";

export const blogCategoryApi = {
    async getAll() {
        const { data } = await instance<IBlogCategoryResponse>("/blog-categories");
        return data;
    },
};
