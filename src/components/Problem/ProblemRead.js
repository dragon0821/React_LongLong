import React, {Component} from 'react';

class ProblemRead extends Component{
    shouldComponentUpdate(newProps,newState){//data의 변화가 있으면 render가 호출되고 아니면 render가 호출되지 않는함수
        if(newProps.data === this.props.data)
         {
              return false;
        }
        return true;
    }
        render(){
            var lists = [] ;
            var problems = this.props.data;
            var i = 0;
            while(i < problems.length){
                lists.push(
                <li key={problems[i].id}>
                    <p>title: {problems[i].title} address: {problems[i].address} no:{problems[i].no} origin: {problems[i].origin} date: {problems[i].date}</p>
                </li>);
                i = i + 1;
            }
          return(
              <div>
                {lists}
              </div>
          );
        }
    }
    
export default ProblemRead;