import React, {Component} from 'react'
import classes from './Intent.module.css'
import TrainingPhrase from './TrainingPhrase'

// class SaveIntent extends Component {
//     render() {
//         return (
//             <button type="button" className={classes.btnSave}> Save </button>
//         )
//     }
// }

class CreateIntent extends Component {

    constructor(props){
        super(props)
        this.inputElementRef = React.createRef();
        //document.querySelector('input').focus();
    }

    state = { showPhrase: false, text: "Show"}

    componentDidUpdate(){
        if(this.state.showPhrase)
            this.inputElementRef.current.focus();
        //console.log("mount")
        //document.querySelector('input').focus()
    }

    handleClick = () => {
        let text=""
        if(this.state.showPhrase)
            text="Show"
        else
            text="Hide"
        this.setState({
            showPhrase:!this.state.showPhrase,
            text: text

        })
    }

    render() {
        return (
            <div>
                    <span className={classes.text}>Intents</span>
                    <span className={classes.btnShow} onClick={this.handleClick}>{this.state.text}</span>
                    <div>
            {this.props.trainingPhrase.map((phrase,index)=>{
            return (
                    this.state.showPhrase && (
                    <TrainingPhrase
                    placeholder={phrase.placeholder}
                    value={phrase.value}
                    change={this.props.change}
                    //change={() => this.props.change(index)}
                    callRef={this.inputElementRef}
                    key={index}>
                    </TrainingPhrase>)
            )
        }
        )}
        </div>
    </div>
        )
    }

}

export default CreateIntent