import React, {Component} from 'react';

import "./css/index.scss";
import {connect} from 'react-redux'
import {cartAdd} from '../../actions/cart'

@connect(
    state=>({shop:state}),
    {cartAdd}
)
class Index extends Component {
    state={
        data:{}
    }
    componentDidMount() {
        let id = this.props.match.params.shopid
        fetch('http://47.100.98.54:9020/api/buygoods/'+id)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                this.setState({
                    data:data
                })

            })
    }

    render() {
         console.log(this.props.data)
        let {picurl,title,des,price} = this.state.data
        return (
            <div>

                <div className="shopdedatils">
                    <img src={picurl} width="80%" />
                    <h3>{title}</h3>
                    <h3>{des}</h3>
                    <p className="money">
                        <span className="symbol">¥</span>
                        <span className="price">{price}</span>
                    </p>
                    <p className="courier">快递：包邮 <span className="fr" ></span></p>
                    <div className="buyNum clearFix">
                        <p className="fl buyfont">购买数量</p>
                            <p className="addNum fr">
                                <a href="javascript:;" className="reduce">-</a>
                            <a href="javascript:;" className="num">0</a>
                            <a href="javascript:;" className="add">+</a>
                        </p>
                    </div>
                    <div className="buy">
                        <a href="javascript:;" className="addCart" >加入购物车</a>
                        <a href="/" className="nowBuy">立即购买</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Index;