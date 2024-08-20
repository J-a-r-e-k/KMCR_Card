import { createContext, useState } from "react";

type AppContextProps = {
    name: string;
    setUserName: (name: string) => void
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider = ({children}: {children: React.ReactNode} ) => {
    const [userName, setUserName] = useState('Jarosław')

    // const [indicentData, setIncidentData] = useState({})

    return <AppContext.Provider value={{
        name: userName,
        setUserName: setUserName
    }}>
        {children}
    </AppContext.Provider>
}
