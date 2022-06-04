import '../users/login/login.css'
import {useState} from "react";
import {useSelector} from "react-redux";
import ProductService from "../../Services/ProductService";

export default function UpDateProduct() {
    let [data, setData] = useState({})
    let user = useSelector((state => state.UserReducer))
    let product = useSelector((state => state.ProductReducer.product))
    function UpDate(e){
        e.preventDefault()
        setData(data.name = e.target.name.value)
        setData(data.price = e.target.price.value)
        setData(data.number = e.target.number.value)
        setData(data.description = e.target.description.value)
        setData(data.img = e.target.image.value)
        ProductService.UpDateProduct(user.token, product.id, data)
    }
    return (
        <div className={"backImg"}>
            <center>
                <div className={"sign"}>Up Date Product</div>
                <div className={"enter"}>
                    <form method={"PUT"} onSubmit={UpDate}>
                        <input name={"name"} type={"text"} placeholder={"Enter your name"}/><br/>
                        <input name={"price"} type={"number"} step={"0.1"} placeholder={"price"}/><br/>
                        <input name={"number"} type={"number"} placeholder={"number"}/><br/>
                        <input name={"description"} type={"text"} placeholder={"description"}/><br/>
                        <input name={"image"} type={"text"} placeholder={"Enter your url of image"}/><br/>
                        <button type={'submit'}>UpDate</button>
                    </form>
                </div>
            </center>
        </div>
    )
}