import { render } from '@testing-library/react';
import React, {Component} from 'react';

class Memberjoin extends Component{
    render(){
        return (
            <article>
                <h2>Membership Join</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.ID.value,
                            e.target.PW.value
                        );
                    }.bind(this)}>
                    <p><input type="text" name="ID" placeholder="Enter ID"></input></p>
                    <p><input type="text" name="PW"placeholder="Enter PassWord"></input> </p>
                    <p><input type="submit" value="submit"></input> </p>
                </form>
            </article>
        );
    }
}
export default Memberjoin;