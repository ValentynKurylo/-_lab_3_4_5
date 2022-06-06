import './PostDemand.css'
import {useSelector} from "react-redux";
import {useState} from "react";
import DemandService from "../../Services/DemandService";

export default function PostDemand() {
    const user = useSelector((state => state.UserReducer))
    let [data, setData] = useState({})
    function Order(e){
        e.preventDefault()
        console.log('token', user.token)
        if(user.token){
            setData(data.nameProduct = e.target.nameProduct.value)
            setData(data.message = e.target.message.value)
            setData(data.user_id = user.currentUser.id)
            console.log(data)
            DemandService.PostDemand(user.token, data)
        }
        else {
            alert("You need to sign in !!!")
        }
    }
    return (
        <div className={"backgroundDemand"}>
            <center>
                <div className={"OrderWord"}>Order what you want</div>
                <div className={"enter"}>
                    <form method={"POST"} onSubmit={Order}>
                        <input name={"nameProduct"} type={"text"} data-testid={"name3"} placeholder={"Enter name of product"}/><br/>
                        <input name={"message"} type={"text"} placeholder={"Leave your message"}/><br/>
                        <button type={'submit'}>Send</button>
                    </form>
                </div>
            </center>
        </div>
    )
}