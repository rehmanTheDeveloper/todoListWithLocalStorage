import React, { createContext, useContext, useState } from 'react';

const RefreshContext = createContext();

export const RefreshProvider = ({children}) => {
    const [Refresh, setRefresh] = useState(false);
    return (
        <RefreshContext.Provider value={{ Refresh, setRefresh }}>
            {children}
        </RefreshContext.Provider>
    )
}

export const useRefresh = () => useContext(RefreshContext);