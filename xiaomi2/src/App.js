import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Tabbar from './component/tabbar'
import Home from './component/home'
import My from './component/my'
import Shopcart from './component/shopcart'
import Shopbuy from './component/shop'
class App extends Component {
  render() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path={'/'} component={Home} />
                    <Route path={'/my'} component={My} />
                    <Route path={'/shopbuy/:shopid'} component={Shopbuy} />
                    <Route path={'/shopcart'} component={Shopcart} />
                </Switch>
                <Tabbar />
            </div>
        </Router>

    );
  }
}

export default App;
