import React, { PureComponent } from 'react'

class Life extends PureComponent {
//STEPS BEFORE RENDER

//1 get default props
//2 set Default state
state = {
  title:'Life cycles'
 }
 /*
//3 Before RENDER
componentWillMount(){
  console.log("//3 Before RENDER")  
}
componentWillUpdate(){
  console.log("//3U BEFORE UPDATE")
}
componentDidUpdate(){
  console.log("//5U AFTER UPDATE")
}

componentWillReceiveProps(){
  console.log("BEFORE RECEIVE PROPS!")
}

componentWillUnmount(){
  console.log("UNMOUNT")
}

shouldComponentUpdate(nextProps,nextState){
  if(nextState.title === this.state.title){
    return false
  }
  return true;
}
*/

//4 RENDER JSX
 
render() {
  console.log("//4 RENDER")
  return (
    <div>
      <h3>{this.state.title}</h3>
      <div onClick={()=> this.setState({title:'DATACYCLE'}) }>CLICK TO CHANGE TITLE</div>
    </div>
  )
}
//5 AFTER JSX
/* componentDidMount(){
  console.log("//5 AFTER JSX")
  document.querySelector('h3').style.color = 'red'
} */
}



export default Life;