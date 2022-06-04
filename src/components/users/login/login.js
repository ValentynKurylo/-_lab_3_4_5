import './login.css'

import {Link} from "react-router-dom";
import {useState, useEffect} from 'react'
import UserService from "../../../Services/UserService";
import {useDispatch, useSelector} from "react-redux";

export default function Login() {
    let [data, setData] = useState({})
    let [token, setToken] = useState('')
    const user = useSelector((state => state.UserReducer))
    const dispatch = useDispatch()
    function login(e){
        e.preventDefault()
        setData(data.login = e.target.username.value)
        setData(data.password = e.target.password.value)
        console.log(data)
        UserService.EnterUser(data).then(value => {
            setToken(value.token)
            dispatch({type:'SET_TOKEN', payload:value.token})
            if(value.token) {
                GetCurrentUser(value.token)
                alert("You logined")
            }
        })
  }
  function GetCurrentUser(token){
        UserService.GetCurrentUser(token).then(response => {
                console.log(response.user)
                dispatch({type: 'SET_CURRENT_USER', payload: response.user})
            })
  }
    console.log(token);


    return (
        <div className={"backImg"}>
            <div>
                <center>
                    <div className={"sign"}>Sign in</div>
                    <div className={"enter"}>
                        <form method={"POST"} onSubmit={login}>
                            <input name={"username"} type={"text"} placeholder={"Enter your login"}/><br/>
                            <input name={"password"} type={"text"} placeholder={"Create your password"}/><br/>
                            <button type={'submit'}>Enter</button>
                        </form>
                        <div>
                            <p className={"reg"}>If you are not yet registered</p>
                            <Link to={'/registration'}>
                                <button>Registration</button>
                            </Link>
                        </div>
                    </div>
                </center>
        </div>
        </div>
    )
}