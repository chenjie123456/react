import {combineReducers} from "redux";
import cartCount  from './cartReduce'
import user  from './user'

export default combineReducers({
    cartCount,
    user
})
/*
* 随着程序越来越复杂，
* */