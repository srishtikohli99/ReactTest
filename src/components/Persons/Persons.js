import React, {Component} from 'react'
import Person from './Person'

class Persons extends Component {

        // static getDerivedStateFromProps(props, state)
        // {
        //   console.log("[Persons.js] getDerivedStateFromProps")
        //   return state;
        // }

        /* ******hooks for class based components ********/

        //if we need to check for all props simply extend pure component instead of component
        shouldComponentUpdate (nextProps, nextState) {
          console.log("[Persons.js] shouldComponetUpdate")
          // if(nextProps.persons!=this.props.persons)
          //   return true;
          // else
          //   return false
          return true
        }

        getSnapshotBeforeUpdate (prevProps, prevState ){
          console.log("[Persons.js] getSnapshotBeforeUpdate");
          return {message: 'Snapshot!'}
        }

        componentDidUpdate (prevProps, prevState, snapshot){ //to save data before update and use after
          console.log("[Persons.js] componentDidUpdate")
          console.log(snapshot)
        }
        //just before component removed
        componentWillUnmount() {
          console.log("[Persons.js] componentWillUnmount")
        }

        render() {
          console.log("[Persons.js] rendering...")
          return (this.props.persons.map((person,index) => {
          return ( <Person 
            name = {person.name}
            click = {() => this.props.delete(index)}
            key = {index}
            change = {this.props.change} /> )
      }))
    }
}

export default Persons