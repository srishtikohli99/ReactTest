import React, { Component } from 'react'


class Person extends Component {

    //= (props) => {
    render(){
        console.log("[Person.js] rendering...")
        return (
            <div>
                <h1 onClick = {this.props.click}>Hi I am {this.props.name}</h1> 
                <input type="text" onChange = {this.props.change} value = {this.props.name}></input>
            </div>
        )
    }
}

export default Person