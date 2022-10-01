import { useContext, useEffect } from "react";
import { AppContext } from "../States/AppContext";
import axios from 'axios';
import Item from "./Item";
import "../Style/list.scss";
import Pagination from "./Pagination";

export default function List (props) {
    const {productsList, listState, pageState} = useContext(AppContext);
    const [products, setProducts] = productsList;
    const [currentPage, setCurrentPage] = pageState;
    const [productsEachPage, setProductsEachPage] = listState;
    useEffect(() =>{
        axios('https://api.escuelajs.co/api/v1/products')
            .then(response =>{
                setProducts(response.data);
            }).catch (error => {
                console.error(error);
            })
    },[])
    const lastIndex = currentPage *productsEachPage;
    const firstIndex = lastIndex - productsEachPage;
    const currentList = products.slice(firstIndex, lastIndex);

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber);    
    }
    return (
        <div className="itemList">
           {/* <Pagination _totalPages={products.length} _itemsEachPage = {} _paginate = {}/>*/}
            {
                 products.map( product => {
                    return <section className="products">
                        <Item itemImage = {product.images[0]}
                                name={product.title}
                                category = {product.category.name}
                                description = {product.description}
                                price = {product.price}/>
                        </section>
                 }) 
            }
        </div>
    )
}