import React, {Component} from 'react';

class Problemcreate extends Component{
    render(){
        var  _today=new Date();
        return (
            <article>
                <h2>Problem Create</h2>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.title.value,
                            e.target.address.value,
                            e.target.no.value,
                            e.target.origin.value,
                            _today
                        );
                    }.bind(this)}>
                    <p><input type="text" name="title" placeholder="Enter Problem title"></input></p>
                    <p><input type="text" name="address"placeholder="Enter Problem address"></input> </p>
                    <p><input type="text" name="no" placeholder="Enter Problem no"></input></p>
                    <p><input type="text" name="no" placeholder="Enter Problem no"></input></p>
                    <p><input type="submit" value="submit"></input> </p>
                </form>
            </article>
        );
    }
}
export default Problemcreate;