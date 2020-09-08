import React, {Component, Fragment} from 'react';

import CreateIntent from '../components/Intents/CreateIntent'

import logo from '../assets/logo.svg';
import classes from './App.module.css';
import AddIntent from '../components/addIntent'
import Person from '../components/Persons/Person'
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux'
import WithClass from '../hoc/WithClass'
//import classes from '*.module.css';
/***************
class App extends Component {

  constructor(props) {
    super(props)
    console.log("[App.js] constructor")
  }
  state = {
    persons: [
      { name: 'Srishti', age: 28 },
      { name: 'Atulya', age: 29 },
      { name: 'Saloni', age: 29 }
    ],
    isShow: false,
    isCockpitShow: true
  }

  handleClick = (newName) => {
      console.log("here")
     this.setState (
       {
         persons: [ 
          { name: newName, age: 28 },
          { name: newName, age: 29 },
          { name: newName, age: 29 }
         ]
       }
     )
  }

  handleShow = event => {
    console.log(this.state.isShow)
    this.setState({
      isShow:!this.state.isShow
    })
  }

  handleChange = event => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      persons : [
        { name: 'Srishti', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Saloni', age: 18 }
    ]
    });
  }

  deletePerson = (personIndex) => {
    
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({
      persons: persons
    });
  }

  // componentWillMount(){
  //   console.log("[App.js] componentWillmount")
  // }

  componentDidMount() {
    console.log("[App.js] componentDidMount")
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log("[App.js] shouldComponetUpdate")
    return true;
  }

  componentDidUpdate (prevProps, prevState, snapshot){ //to save data before update and use after
    console.log("[App.js] componentDidUpdate")
    console.log(snapshot)
  }

  static getDerivedStateFromProps(props,state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

    render() {
      let persons = null;
      console.log("[App.js] render called")
      console.log(classes)
      //console.log("[App.js] showCockpit",isCockpitShow)
      if (this.state.isShow) {
        persons = ( 
        <div className={classes.App}>
            <Persons 
            delete = {this.deletePerson}
            change = {this.handleChange}
            persons = {this.state.persons} />
          {/*
        <Person 
        name = {this.state.persons[0].name} />
        <Person 
        name ={this.state.persons[1].name}
        click = {this.handleClick.bind(this,'Rahul')}
        change = {this.handleChange} /> 
        <button
        onClick = {() => this.handleClick('Rahul')}>
          click me
        </button> 
        }*/

        /********************* 
        </div>
        )
      }

      return (
        //<Fragment>
          <WithClass classes={classes.App}>
          <button onClick = {()=>{
            //  CORRECTLY UPDATING STATE
            this.setState( (prevState) => {
                return {
                isCockpitShow: !prevState.isCockpitShow
                }
              }
            )
          }}>Cockpit</button>
        {this.state.isCockpitShow && <Cockpit
        isShow = {this.state.isShow}
        show = {this.handleShow}
        persons = {persons}
        />}
        
        </WithClass>
        //</Fragment>
      )
    }
  }

   When no argumnent in handleClick
  render() {
      return (
        <div>
          <Person 
          name = {this.state.persons[0].name} />
          <Person 
          name ={this.state.persons[1].name}
          click = {this.handleClick} /> 
          <button
          onClick = {this.handleClick}>
            click me
          </button>
        </div>
      )
    }
  }
*******/

class App extends Component {

  state = {
    trainingPhrase :[
        { phrase: "", placeholder:"Enter a phrase to train"}
    ],
    showPhrase:false
  }
  handleChange = (event) => {
    console.log("change")
    //console.log(this.state.trainingPhrase);
    //console.log(index)
    var key = event.which || event.keyCode;
    if (key == '13') {
      //console.log(index)
      const phrases = [...this.state.trainingPhrase]
      phrases.unshift({ phrase: "", placeholder:"Enter a phrase to train"})
      this.setState({
        trainingPhrase: phrases
      });
    }
}
  render(){
    return (
      <CreateIntent trainingPhrase={this.state.trainingPhrase} 
      change={this.handleChange}>
      </CreateIntent>
    )
  }
}
export default App;
