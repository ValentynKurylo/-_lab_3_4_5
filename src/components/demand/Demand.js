import './PostDemand.css'

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import DemandService from "../../Services/DemandService";

export default function Demand() {
    let user = useSelector((state => state.UserReducer))
    let demand = useSelector((state => state.DemandReducer))
    let dispatch = useDispatch()

    useEffect(()=>{
        DemandService.GetDemand(user.token).then(value => {
            console.log(value);
            dispatch({type: 'SET_DEMAND', payload: value})
        })
    }, [])
    return (
        <div className={"backgroundDemand"}>
            <center>
                <div className={"Top"}>People want</div>
            </center>
            {
                demand.demands.map(value => <center>
                    <div className={"WrapDemand"}><p className={"pDemand"}>User Id - {value.user_id}</p><p
                        className={"pDemand"}>Product name - {value.nameProduct}</p><p className={"pDemand"}>Message
                        - {value.message}</p></div>
                </center>)
            }
        </div>
    )
}