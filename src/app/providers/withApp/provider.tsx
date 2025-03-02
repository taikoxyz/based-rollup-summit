import { AppProps } from "next/app";
import { useObjectState } from "shared/lib/hooks/use-object-state";
import { AppContext } from "./context";
import { createAppState } from "./state";

interface Props {
    children: React.ReactNode;
}

const AppProvider: React.FC<Props> = ({ children }) => {
    const context = useObjectState(createAppState());

    return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export const withApp = (component: (props: AppProps) => JSX.Element) => {
    return (props: AppProps) => <AppProvider>{component(props)}</AppProvider>;
};
