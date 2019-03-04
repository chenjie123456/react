import React, {Component} from 'react';
import './css/index.scss'
class Goods extends Component {
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/goods')
            .then(res=>res.json())
            .then(data=>{
                if(data.status === 200){
                    this.setState({
                        data:data.data
                    })
                }
            })
    }

    render() {
        return (
            <div className={'goods'}>
                <ul>
                    {
                        this.state.data.length>0 && (
                            this.state.data.map((item,index)=>{
                                return (
                                    <li key={item.id}>
                                        <a href="/">
                                            <img src={item.picurl} alt={item.alt}/>
                                            <div className={'info'}>
                                                <p className={'goods_title'}>{item.title}</p>
                                                <p className={'goods_des'}>{item.des}</p>
                                                <p className={'goods_price'}>{item.symbol}{item.price}{item.font}</p>
                                            </div>
                                        </a>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default Goods;