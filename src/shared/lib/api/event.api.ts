import { instance } from "../utils/instance";
import { IEvent, IEventLocation, IEventsResponse } from "../types";

export const eventApi = {
    async getAll(query?: string) {
        const { data } = await instance.get<IEventsResponse>(
            "/events" + (query ? `?${query}` : "")
        );
        return data;
    },

    async getOne(slogOrId: string) {
        const { data } = await instance.get<IEvent>(`/events/${slogOrId}`);
        return data;
    },

    async getLocations() {
        const response = await instance.get<IEventLocation[]>("/events/locations");
        return response.data;
    },
};
