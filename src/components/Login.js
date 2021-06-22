import React, {Component} from 'react';

class Login extends Component{
    render(){
        return(
            <article>
                <h1>Login Page</h1>
                <form action="/login_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        console.log(e.target.login_ID.value, e.target.login_PW.value);
                        this.props.onSubmit(
                            e.target.login_ID.value,
                            e.target.login_PW.value
                        );
                    }.bind(this)}>
                    <p><input type="text" name="login_ID" placeholder="Enter ID"></input></p>
                    <p><input type="text" name="login_PW" placeholder="Enter PW"></input></p>
                    <p><input type="submit" value="submit"></input></p>
                </form>
            </article>
        );
    }
}
export default Login;