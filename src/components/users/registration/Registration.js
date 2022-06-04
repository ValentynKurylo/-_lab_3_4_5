import {useEffect, useState} from 'react'
import UserService from "../../../Services/UserService";
import {Link} from "react-router-dom";

export default function Registration() {
    let [data, setData] = useState({})
    function registr(e){
        e.preventDefault()
        setData(data.name = e.target.username.value)
        setData(data.login = e.target.login.value)
        setData(data.password = e.target.password.value)
        setData(data.role = "user")
        console.log(data);
        UserService.PostUser(data)
    }
    return (
        <div className={"backImg"}>
             <div>
            <center>
                <div className={"sign"}>Registration</div>
                <div className={"enter"}>
                    <form method={"POST"} onSubmit={registr}>
                        <input name={"username"} type={"text"} placeholder={"Enter your username"}/><br/>
                        <input name={"login"} type={"text"} placeholder={"Enter your login"}/><br/>
                        <input name={"password"} type={"text"} placeholder={"Create your password"}/><br/>
                        <button type={'submit'}>Register</button>
                    </form>
                    <div>
                            <p className={"reg"}>if you have already registered</p>
                            <Link to={'/login'}>
                                <button>Sign in</button>
                            </Link>
                        </div>
                </div>
                </center>
        </div>
        </div>
    )
}