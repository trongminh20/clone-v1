import React, {createContext, useState} from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const [sample, setSample] = useState("sample");
    const [products, setProducts] = useState([]);
    const [productsEachPage, setProductsEachPage] = useState(1);
    const [currentPage, setCurrentPage] = useState();
    return (
        <AppContext.Provider value = {{
            initSample:[sample, setSample],
            productsList:[products, setProducts],
            listState:[productsEachPage, setProductsEachPage],
            pageState:[currentPage,setCurrentPage]
        }} >
            {props.children}
        </AppContext.Provider>

    )
}