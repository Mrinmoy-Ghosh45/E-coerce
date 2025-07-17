import React from "react";
import { useNavigate } from "react-router-dom";
import Addtocart from "./Addtocart";

const linkStyle = {
    cursor:"pointer",
}

export default function Navigate(){
    const navigate = useNavigate();

    return(
        <div style={{marginLeft:"135px"}} className="  d-flex gap-4">
            <div className="d-flex gap-2">
                <span style={{linkStyle}} onClick={()=>navigate('/signup')}>
                Signup
            </span>
            <span>/</span>
            <span style={{linkStyle}} onClick={()=>navigate('/signin')}>
                Signin
            </span>
            </div>

            <div style={linkStyle} onClick={()=>navigate('/cart')}><Addtocart/></div>
        </div>
    )
}