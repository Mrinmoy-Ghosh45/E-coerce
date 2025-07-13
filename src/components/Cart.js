import React ,{useState}from "react";
import '../App.css';
import { useNavigate } from "react-router-dom";

export default function Cart(){

    const Navigate = useNavigate()

const [product,setProduct]=useState(
    [
    {image:'/images/shoe.jpg', prePrice:'5000', price:'3000'},
    {image:'/images/shoe2.jpg',prePrice:'5000', price:'2000'},
    {image:'/images/shoe3.webp',prePrice:'5000', price:'2000'},
    {image:'/images/image1.jpg',prePrice:'5000', price:'2000'},
    {image:'/images/t.jpg',prePrice:'5000', price:'2000'},
    {image:'/images/t1.jpg',prePrice:'5000', price:'2000'},
]
)

const HandelRemove =(removeIndex)=>{
    const updateList = product.filter((_,index)=> index!==removeIndex);
    setProduct(updateList)
}

    return(

        <div className="container">

           <div className="d-flex justify-content-center p-3" style={{gap:'600px '}}>
             <div><h4 onClick={()=>Navigate('/')} style={{textDecoration:'underline'}}>home</h4></div>
              <div><h4 style={{textDecoration:'underline'}}>cart</h4></div>
           </div>

        {product.map((item,index)=>(
            <div style={{boxShadow:'4px 4px 10px rgba(0,0,0,0.2)', borderRadius:'20px'}} >
                
                <div className="d-flex mt-2">
                    <div key={index} className="p-4">
                    <img src={item.image} alt="image" style={{ width: "150px", height: "150px", }}/>
                </div> 
                <div className="p-4">
                    <h3>NIKE sneakers for men</h3>
                    Red
                    <div className="d-flex pt-2">
                    <i  className="fas fa-star text-success"></i>
                    <i className="fas fa-star text-success"></i>
                    <i className="fas fa-star text-success"></i>
                    <i className="fas fa-star text-success"></i>
                    <div className="ms-1">4.0</div>
                    </div>
                     30% off
                    <div style={{textDecoration:'line-through'}}>{item.prePrice} </div> 
                    {item.price} INR 
                    <div className="pt-2 d-flex gap-3 ">
                        <button style={{borderRadius:'50px'}} className="bg-success text-white p-2 " onClick={()=>HandelRemove(index)}>remove</button>
                        <button style={{borderRadius:'20px'}} className="bg-warning text-black p-2">buy now</button>
                    </div>
                </div>
                </div>

            </div>
        ))}

            
        </div>
    )
}