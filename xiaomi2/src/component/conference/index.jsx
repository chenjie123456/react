import React, {Component} from 'react';
import './css/index.scss'
class Conference extends Component {
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/conference')
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
            <div className={'conference'}>
                <a href="/"><img src={this.state.data.picurl} alt=""/></a>
            </div>
        );
    }
}

export default Conference;