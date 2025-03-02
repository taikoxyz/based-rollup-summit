import { ICareer } from "./../../../shared/lib/types/career";
import { useQuery } from "@tanstack/react-query";
import { PositionApiEnum } from "./types";

export const usePosition = () => {
    const { data } = useQuery<ICareer>({ queryKey: [PositionApiEnum.POSITION] });
    return data!;
};
