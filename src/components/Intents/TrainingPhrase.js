import React, { Component } from 'react';
import { render } from '@testing-library/react';
import classes from './Intent.module.css';

class TrainingPhrase extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <input className={classes.phrase} type="text" placeholder={this.props.placeholder} value={this.props.value} onKeyDown={this.props.change} ref={this.props.callRef}></input>
        )}
}
export default TrainingPhrase