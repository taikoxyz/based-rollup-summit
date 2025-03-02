import { useContext } from "react";
import { AppContext } from "./context";

export const useApp = () => {
    const context = useContext(AppContext);
    return context;
};
