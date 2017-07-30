import React,{Component} from 'react';
import {connect} from 'react-redux';

import {fetchBannerList} from '../../actions/HomeAction';


import './index.less';
import Banner from '../../components/banner/';

class Home extends Component{

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount(){
        this.props.fetchBannerList();
    }

    render(){
        let {todoApp} = this.props;


        return (
            <div className="home">
                <Banner></Banner>
                <a href="#/list">8998787</a>
            </div>
        )
    }
}


// 哪些 action 创建函数是我们想要通过 props 获取的？
function mapDispatchToProps(dispatch) {
    return {
        fetchBannerList: () => fetchBannerList(dispatch)
    };
}

// 哪些 Redux 全局的 state 是我们组件想要通过 props 获取的？
function mapStateToProps(state) {
    return {
        todoApp : state.todoApp
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);