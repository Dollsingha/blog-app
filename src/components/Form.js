import React, { Component } from 'react';

class Form extends Component {
    state={
        id:null,
        name:'',
        loc:''
    }
    handleChnage=(event)=>
    {
        this.setState({[event.target.name]:[event.target.value]});
    }
    render() {
        return (
            <div>
                <ul>
                    <li>ID: {this.state.id}</li>
                    <input type="text" name="id" onChange={this.handleChnage}></input>
                </ul>
            </div>
        );
    }
}

export default Form;