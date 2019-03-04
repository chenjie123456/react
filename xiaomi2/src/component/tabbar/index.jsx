import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import './css/index.scss'
class Tabbar extends Component {
    render() {
        return (
            <ul className={'tabbar'}>
                <li>
                    <NavLink to={'/'} className={'active'}>
                        <i className={'i_wallet'}></i>
                        <p>首页</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/'}>
                        <i className={'i_wallet'}></i>
                        <p>分类</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/shopcart'}>
                        <i className={'i_wallet'}></i>
                        <p>购物车</p>
                    </NavLink>
                </li>
                <li>
                   <NavLink to={'/my'}>
                        <i className={'i_mihome'}></i>
                        <p>我的</p>
                   </NavLink>
                </li>
            </ul>
        );
    }
}

export default Tabbar;