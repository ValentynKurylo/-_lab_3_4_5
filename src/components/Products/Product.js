import './Product.css'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

export default function Product({item}) {
    const user = useSelector((state => state.UserReducer))

    function Buy(e) {
        //e.preventDefault()
        alert("You need login")
    }
    let b = 0
    if (user.token) {
        b = 1
    }
    return (
        <div id={"Box"}>

            <div id={"Wrap"}>
                <center><p className={"text"}>{item.name} <hr/>Price - {item.price} grn </p></center>
                <img src={item?.img} alt={item?.name}/>
                <center><p className={"text"}>Is available - {item?.number}</p></center><hr/>
                <center>
                    {
                        user.token ?
                            <Link to={'/Buy/' + item.id}>
                                <button id={"But"}>Buy</button>
                            </Link>
                            : <button id={"But"} onClick={Buy}>Buy</button>
                    }
                </center>
            </div>
        </div>
    )
}