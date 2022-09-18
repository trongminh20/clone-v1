import React, {createContext, useState} from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [sample, setSample] = useState("sample");

    return (
        <AppContext.Provider value = {{
            initSample:[sample, setSample]
        }} >
            {props.children}
        </AppContext.Provider>

    )
}