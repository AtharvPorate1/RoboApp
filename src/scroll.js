import React,{Component} from "react";


const scroll = (props) =>{
    return(
        <div style={{ overflowY : scroll , height:'800px',border:"5px" }} >
            {props.childern}
        </div>
    )
}

export default scroll;