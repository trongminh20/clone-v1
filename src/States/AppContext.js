import React, {createContext, useState} from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [sample, setSample] = useState("sample");
    const [products, setProducts] = useState([]);
    return (
        <AppContext.Provider value = {{
            initSample:[sample, setSample],
            productsList:[products, setProducts]
        }} >
            {props.children}
        </AppContext.Provider>

    )
}