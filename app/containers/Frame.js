/**
 * Created by wangzhuang on 11/6/17.
 */
import React,{Component} from 'react';

class Frame extends Component{
    render(){
        return(
            <div className="frame">
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
};

export default Frame;