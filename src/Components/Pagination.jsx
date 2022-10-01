import React from "react";
import { useContext } from "react";

export default function Pagination({_totalPages, _itemsEachPage, _paginate}){

    let pageNumbers = [];
    
    for( let i = 1; i < Math.ceil(_totalPages / _itemsEachPage); i++){
        pageNumbers.pushj(i);
    }

    const pageChange = e => {
        _pageinate(e.target.value);
    }

    return (
        <select className="pagination" onChange={pageChange} style="">
            {
                pageNumbers.map(page =>{
                    return <option value = {page}>{page}</option>
                })
            }
        </select>
    );
}