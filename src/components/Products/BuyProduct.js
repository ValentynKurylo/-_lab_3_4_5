import {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import {Link} from "react-router-dom";

import ProductService from "../../Services/ProductService";
import {useDispatch, useSelector} from "react-redux";
import "./BuyProduct.css"

export default function BuyProduct(){
    let [b, setB] = useState(0)
    let params = useParams()
    let dispatch = useDispatch()
    let product = useSelector((state => state.ProductReducer.product))
    let user = useSelector((state => state.UserReducer.currentUser))
    let token = useSelector((state => state.UserReducer.token))
    useEffect(()=>{
        if(user.role === "admin" || user.role === "worker"){
        setB(1)
    }
        ProductService.GetProduct(params.id).then(value=>{
            console.log("ff", value.user);
            dispatch({type: "SET_PRODUCT", payload: value.user})
        })
    }, [])

    function Delete(e){
        e.preventDefault()
        let q = prompt('Are you sure?  Enter 1')
        if(q){
            ProductService.DeleteProduct(token, product.id)
        }
    }
    return (
        <div>
            <center><h3>{product.name}</h3></center>
            <hr/>
            <div className={"WrapProduct"}>
                <center>
                    <div className={"Information"}>
                        <img alt={product.name} src={product.img}/>
                        <hr/>
                        <p>Price - {product.price} grn</p>
                        <hr/>
                        <p>Is available - {product.number}</p>
                        <hr/>
                        <button>Buy</button>
                </div>
                    </center>
                <div className={"descInform"}>
                    <p className={"word"}>Description:</p>
                    <hr/>
                    <div className={"Description"}>
                        {product.description}
                    </div>
                </div>
                <div>
                    {
                        b ? <div className={"UpDel"}><Link to={"/upDateProduct/" + product.id}><button>UpDate</button></Link><button onClick={Delete}>Delete</button></div> : <div></div>
                    }
                </div>
            </div>
        </div>
    )
}