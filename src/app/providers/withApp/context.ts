import { createContext } from "react";
import { createAppState } from "./state";
import { IAppContext } from "./types";

export const AppContext = createContext<IAppContext>([
    createAppState(),
    () => null,
    {
        resetState: () => null,
        setStateValue: () => null,
    },
]);
