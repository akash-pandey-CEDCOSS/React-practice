// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
// import Greet from './components/greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import Story from './components/Story';
// import EventBind from './components/EventBind';
// import ChildComponent from './components/ChildComponent';
// import ParentComponent from './components/ParentComponent';
import Login from './components/login' 

// import { re  z nder } from '@testing-library/react';

class App extends Component {

  getDataFromChild11 = (data) => {
    console.log(data)
  }

  render() {
    return (
     
      <div style={{backgroundColor:'#0f09'}} className="App">
        <Login />
        {/* <ParentComponent /> */}
        {/* <EventBind /> */}
        {/* <Story /> */}
       
        {/* <Message /> */}
        {/* <Counter /> */}
        {/* <Greet age="18" sendToParent1={this.getDataFromChild11} name="Akash" heroName="Iron Man" /> */}
        {/* <Greet name="Sam" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <FunctionClick />
        <Welcome name="Bruce" heroName="Batman" />
        <ClassClick /> */}


        {/* <Hello /> */}
        {/* <Greet name="Amee"/>
        <Greet name="Shubham"/> */}
      </div>
      
    );
  }
}

export default App;
