import React,{Component} from "react";
import Cards from "./Cards";
import SearchBox from "./SearchBox"


const CardList = ({robo}) =>{
    const CardComponent = robo.map((user,i)=>{
        return <Cards key={i} id={robo[i].id} name={robo[i].username} email={robo[i].email}/>
    })
    return(
        
        <div>
            

            {CardComponent}
            
        </div>
    )
}

export default CardList;