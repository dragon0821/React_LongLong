import React, {Component} from 'react';
import ProblemRead from './ProblemRead';
import Problempage from './Problempage';

class Problemmanage extends Component{
    constructor(props){
            super(props);
            this.max_problem_id = 1;
            this.state={
                mode:'p_read',
                Problems:[
                    {id:1,title:'수수께끼',address:'www.naver.com',no:123,origin:'sw',date:'2021-06-22'}
                ]
            }
    }
    render(){
        var _article=null;
       if(this.state.mode === 'p_read')
        {
            if(this.props.mode===null){
            _article = <ProblemRead data = {this.state.Problems}></ProblemRead>
            }
        }
    
    return(
        <div>
            <Problempage mode={this.state.mode} onChangeMode={function(_mode){
                this.setState({
                    mode:_mode
                });
            }.bind(this)}></Problempage>
            {_article}
        </div>
    );
    }
}
    
export default Problemmanage;