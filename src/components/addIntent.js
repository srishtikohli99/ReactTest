import React, { Component } from 'react'

class AddIntent extends Component {
    render() {
        return (
            <div> 
                <TrainingPhraseField></TrainingPhraseField>
            </div>
        );
    }
}

class Field extends Component {
    render() {
        return (
            <input type="text" />
        )
    } 
}

const Fields = [
    0
]
let i = 1;

class TrainingPhraseField extends Component {
    constructor() {
        super()
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleNewField = this.handleNewField.bind(this);
    }
    handleChange(event) {
        this.setState(
            {value: event.target.value}
            );
    }
    
    handleNewField(event) {
        console.log("here")
        var key = event.which || event.keyCode;
        if (key == '13') {
          console.log("enterPressed")
          Fields.push(i++)
        }
      }
    render() {
        return (
            <div className="col-sm-12 text-center">
            {Fields.map(field => (
              <input type="text" key={field} onKeyDown = {this.handleNewField} />
            ))}
            </div>
        )
    }
}

export default AddIntent