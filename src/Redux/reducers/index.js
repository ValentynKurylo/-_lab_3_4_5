import {ProductReducer} from "./productReducer";
import {combineReducers} from "redux";
import {UserReducer} from "./userReducer";
import {DemandReducer} from "./demandReducer";

export default combineReducers({
      ProductReducer: ProductReducer,
      UserReducer: UserReducer,
      DemandReducer: DemandReducer
});