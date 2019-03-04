import React, {Component} from 'react';
import Head from "../head";
import Banner from "../banner";
import Category from "../category";
import Recommend from "../recommend";
import Conference from "../conference";
import Goods from "../goods";
import Tabbar from "../tabbar";

class Index extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <Head />
                    <Banner />
                    <Category />
                    <Recommend />
                    <Conference />
                    <Goods />
                    {/*<Tabbar />*/}
                    {/*<My />*/}
                    {/*<Shopcart />*/}
                </div>
            </div>
        );
    }
}

export default Index;