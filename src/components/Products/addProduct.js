import '../users/login/login.css'

import {useState, useEffect} from 'react'
import ProductService from "../../Services/ProductService";
import {UserReducer} from "../../Redux/reducers/userReducer";
import {useSelector} from "react-redux";
export default function AddProduct() {
    let [product, setProduct] = useState({})
    const user = useSelector((state => state.UserReducer))
    function Post(e){
        e.preventDefault();
        setProduct(product.name = e.target.name.value)
        setProduct(product.price = e.target.price.value)
        setProduct(product.number = e.target.number.value)
        setProduct(product.description = e.target.description.value)
        setProduct(product.img = e.target.image.value)
        console.log(user.token)
        ProductService.PostProduct(user.token, product)
    }
    return (
        <div className={"backImg"}>
            <center>
                <div className={"sign"}>Add Product</div>
                <div className={"enter"}>
                    <form method={"POST"} onSubmit={Post}>
                        <input name={"name"} type={"text"} placeholder={"Enter your name"}/><br/>
                        <input name={"price"} type={"number"} step={"0.1"} placeholder={"price"}/><br/>
                        <input name={"number"} type={"number"} placeholder={"number"}/><br/>
                        <input name={"description"} type={"text"} placeholder={"description"}/><br/>
                        <input name={"image"} type={"text"} placeholder={"Enter your url of image"}/><br/>
                        <button type={'submit'}>ADD</button>
                    </form>
                </div>
            </center>
        </div>
    )
}