import React, {Component} from 'react';

class MemberControl extends Component{
    shouldComponentUpdate(newProps,newState){
        if(newProps.data === this.props.data)
         {
              return false;
        }
        return true;
    }
        render(){
            var lists = [] ;
            var data = this.props.data;
            var i = 0;
            while(i < data.length){
                lists.push(
                <li key={data[i].id}>
                    <p>{data[i].member_id}</p>
                </li>);
                i = i + 1;
            }
          return(
            <nav>
              <ul>
                 {lists}
              </ul>
            </nav>
          );
        }
    }
    
export default MemberControl;