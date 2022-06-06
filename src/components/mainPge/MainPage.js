import {Link, Route, Switch, BrowserRouter as Router, BrowserRouter} from "react-router-dom";
import './MainPage.css'
import Products from "../Products/Products";
import Login from "../users/login/login";
import Registration from "../users/registration/Registration";
import BuyProduct from "../Products/BuyProduct";
import AddProduct from "../Products/addProduct";
import PostDemand from "../demand/postDemand";
import Demand from "../demand/Demand";
import UpDateProduct from "../Products/UpDateProduct";
export default function MainPage() {
    return (

            <div>
                <Router>
                    <div className={"box"}>
                        <div className={"Panel"}><Link to={'/Products'}><p className={"link"}>Products</p></Link>
                            <Link to={'/Order'}><p className={"link"}>Order</p></Link></div>
                        <center><h1 className={"Name"}>Kurylo Pharmacy</h1></center>
                        <div id={"UserPanel"}><Link to={'/login'}><p className={"link"}>Login</p></Link>
                            <Link to={'/registration'}><p className={"link"}>Registration</p></Link></div>
                    </div>

                    <Switch>
                        <Route exact={true} path={'/Products'} component={Products}/>
                        <Route exact={true} path={'/login'} component={Login}/>
                        <Route exact={true} path={'/registration'} component={Registration}/>
                        <Route exact={true} path={'/Buy/:id'} component={BuyProduct}/>
                        <Route exact={true} path={'/addProduct'} component={AddProduct}/>
                        <Route exact={true} path={'/Order'} component={PostDemand}/>
                        <Route exact={true} path={'/Demand'} component={Demand}/>
                        <Route exact={true} path={'/upDateProduct/:id'} component={UpDateProduct}/>
                    </Switch>
                </Router>
                <footer>
                    <center>
                        <div className="Contact">Our Contacts
                            <br/>
                            <hr/>
                            <div className="Phone">+3809366666<br/>+3806333333</div>
                        </div>
                    </center>
                </footer>
            </div>

    )
}
