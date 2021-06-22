import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Problemcreate from './Problemcreate';

class Home extends Component{
  render(){
    return (
        <div>
           <Router>
                <ul>
                    <li><Link to="/Problems/create"><button onClick={function(e){
                      this.props.onChangeMode('p_create');
                    }.bind(this)}>Problem Create</button>
                    </Link></li>
                </ul>
                <Switch>
                    <Route path="/Problems/create"></Route>
            </Switch>
          </Router>
        </div>

    );
  }
}
export default Home;
