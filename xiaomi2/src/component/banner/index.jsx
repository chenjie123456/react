import React, {Component} from 'react';
import {
    Link
} from 'react-router-dom'
import Swiper from 'swiper/dist/js/swiper.min.js'
import 'swiper/dist/css/swiper.min.css'
import './css/index.scss'
class Banner extends Component {
    state = {
        data:[]
    }
    play(){
        var mySwiper = new Swiper('.swiper-container',{
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay:true, //自动切换
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination'
            }
        })
    }

    componentDidMount() {

        fetch('http://47.100.98.54:9020/api/banner')
            .then(res=>res.json())
            .then(data=>{
                if(data.status === 200){
                    this.setState({
                        data:data.data
                    })
                    this.play() //需在动态数据加载完之后在加载swiper
                }
            })
    }

    render() {
        return (
            <div className="banner swiper-container">
                <ul className="swiper-wrapper">
                    {
                        this.state.data.length>0 && (
                            this.state.data.map((item,index)=>{
                                return (
                                    <li className="swiper-slide" key={item.id}>
                                        <Link to={`/shopbuy/${item.shopid}`}>
                                            <img src={item.picurl} alt={item.alt} />
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    }
                </ul>
                <div className='swiper-pagination'> </div>
            </div>

        );
    }
}

export default Banner;