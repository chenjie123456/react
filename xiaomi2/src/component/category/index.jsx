import React, {Component} from 'react';
import './css/index.scss'
class Category extends Component {
    state={
        data:[]
    }

    componentDidMount() {
        fetch('http://47.100.98.54:9020/api/category')
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
            <div className={'category'}>
                {
                    this.state.data.length>0 && (
                        this.state.data.map((item,index)=>{
                            return (
                                <a key={item.id}><img src={item.picurl} alt={item.name}/></a>
                            )
                        })
                    )
                }
            </div>
        );
    }
}

export default Category;