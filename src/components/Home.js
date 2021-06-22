import React, {Component} from 'react';
import Subject from './Subject';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Problemmanage from './Problem/Problemmanage';
//Switch가 있으면 가장 처음부터 path를 확인해서 원하는 값을 찾고 가장 먼저 발견되는 것을 화면에 출력하게 한다 그러므로 "/"같은 에들은 가장 뒤에 두면 됨
//혹은 exact를 두면됨
class Home extends Component{
  render(){
    return (
        <div>
           <Router>
           <div>
                <ul>
                    <li>
                    <Link to="/create" ><button onClick={function(e){
                        this.props.onChangeMode('create');
                        }.bind(this)}>Join</button>
                    </Link></li>
                    <li><Link to="/Login"><button onClick={function(e){
                      this.props.onChangeMode('login');
                    }.bind(this)}>Login</button>
                    </Link></li>
                    <li><Link to="/Manage"><button onClick={function(e){
                      this.props.onChangeMode('read');
                    }.bind(this)}>Manage</button>
                    </Link></li>
                    <li><Link to="/Problems"><button onClick={function(e){
                      this.props.onChangeMode(null);
                    }.bind(this)}>Problems</button>
                    </Link></li>
                </ul>
            </div>
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/create"></Route>
              <Route path="/Problems"><Problemmanage mode ={this.props.mode}></Problemmanage></Route>
              
            </Switch>
          </Router>
        </div>

    );
  }
}
export default Home;
