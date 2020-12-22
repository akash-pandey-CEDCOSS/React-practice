// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
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
import Login from './components/login';
// import ConditionalRender from './components/ConditionalRender'
// import NameList from './components/NameList'
import ContactUs from './components/ContactUs';
import About from './components/About';



// import { re  z nder } from '@testing-library/react';

class App extends Component {

  getDataFromChild11 = (data) => {
    console.log(data)
  }

  render() {
    return (
      <Router>
        <div>
          <nav>

            <Link className='nav-links' to="/">Home </Link>
            <Link className='nav-links' to="/about">About </Link>
            <Link className='nav-links' to="/contact">ContactUs </Link>
            <Link className='nav-links' to="/login">Login </Link>
          </nav>


          {/* <Navigation /> */}

          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={ContactUs} />
            <Route path='/login' component={Login} />
          </Switch>



          {/* <NameList /> */}
          {/* <ConditionalRender /> */}
          {/* <Login /> */}
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
      </Router>

    );
  }
}
const Home = () => (
  <div>
    <h2>Home page</h2>
  </div>
);

export default App;
