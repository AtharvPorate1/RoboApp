import React from "react";

const SearchBox = ({searchfield,searchChange}) =>{
    return(
        <div  className="pa2 tc">
            <input type="search" placeholder="Search Bots"
            onChange={searchChange}></input>
        </div>
    )
}





export default SearchBox;