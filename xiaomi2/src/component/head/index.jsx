import React, {Component} from 'react';
import './css/index.scss'
class Head extends Component {
    state = {
        data:'react实战'
    }
    componentDidMount() {

        // fetch('http://47.100.98.54:9020/api/name')
        //     .then(res=>{
        //         console.log(res)
        //     })
        fetch('http://47.100.98.54:9020/api/name')
            .then(res=>res.json())
            .then(data=>{
                if(data.status === 200){
                    this.setState({
                        data:data.name
                    })
                }
                //console.log(data)
            })
    }

    render() {
        return (
            <div className={'header'}>
                <div className={'logo'}>
                    <img src={require('./img/logo.png')} alt=""/>
                </div>
                <div className={'search'}>
                    <i></i>
                    <span>{this.state.data}</span>
                </div>
                <div className={'login'}>

                </div>
            </div>
        );
    }
}

export default Head;