// export const configStore = createStore(reduce)
import {createStore} from "redux";
import Reducers from "../reduces";

export default function (init) {
    //init 是state的初始值
    const store = createStore(
        Reducers,
        init,
        window.devToolExtension?window.devToolExtension():undefined
    )
    return store
}