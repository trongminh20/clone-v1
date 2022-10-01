import { useContext, useEffect } from "react";
import { AppContext } from "../States/AppContext";
import axios from 'axios';
import Item from "./Item";
import "../Style/list.scss";
import Pagination from "./Pagination";

export default function List (props) {
    const {productsList} = useContext(AppContext);
    const [products, setProducts] = productsList;

    useEffect(() =>{
        axios('https://api.escuelajs.co/api/v1/products')
            .then(response =>{
                setProducts(response.data);
            }).catch (error => {
                console.error(error);
            })
    },[])

    return (
        <div className="itemList">
           {/* <Pagination _totalPages={} _itemsEachPage = {} _paginate = {}/>*/}
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