import React from "react";
import { useNavigate } from "react-router-dom";
import Addtocart from "./Addtocart";

const linkStyle = {
    cursor:"pointer",
     textDecoration:'underline'
}

export default function Navigate(){
    const navigate = useNavigate();

    return(
        <div style={{marginLeft:"135px"}}  >
            

            <div onClick={()=>navigate('/cart')}><Addtocart/></div>
        </div>
    )
}