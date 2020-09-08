import React, { useEffect } from 'react'
const Cockpit = (props) => {
    //func w args arg1=func to execute arg2= lis of comonnets, change in which will trigger this
    useEffect(() => {
      console.log("[Cockpit.js] useEffect")
    //const timer = 
    setTimeout(()=>{
        alert("Saved Data to cloud!");},
        1000)
        return () => {
          //clearTimeout(timer)
          console.log("[Cockpit.js] useEffect cleanUp!!") //works like componentWillUnmount when [] is second arg of useeffect
        }
}, []); //[] will call this whenever cockpit is destroyed
//code before return runs when mcockpit mounts and after return runs after cockpit unmounts(this is becaue of [])

    return (<div>
          { !props.isShow && (
          <button onClick={props.show}>Show</button>)}
          { props.isShow && (
            <div>
          <button onClick={props.show}>Hide</button>
          {props.persons}
          </div>)}
    </div>)
}

export default Cockpit