import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import ProductService from "../../Services/ProductService";
import Product from "./Product";
import {Link} from "react-router-dom";
import "./Product.css"

export default function Products() {
    const dispatch = useDispatch()
    const product = useSelector((state => state.ProductReducer))
    const user = useSelector((state => state.UserReducer))
    useEffect(()=>{
            ProductService.GetProducts().then(value => {
                console.log(value);
                dispatch({type: "SET_PRODUCTS", payload: value})
            })
        }, [])
    console.log("CurrentUser", user.currentUser)
    let b = 0
    if(user.currentUser.role === "worker" || user.currentUser.role === "admin"){

        console.log(user.currentUser.role)
        b = 1
    }
    return (
        <div className={"back"}>
            <div>
                {
                    b ? <div><Link to={'/addProduct'}>
                        <button className={"ButAdd"}>Add product</button>
                    </Link> <Link to={'/Demand'}>
                        <button className={"ButAdd"}>Demand</button>
                    </Link></div> : <center><p id={"ourProduct"}>Our products</p></center>
                }
            </div>
                {
                    product.products.map(value => <Product item={value} key={value.id}/>)
                }
        </div>
    )
}