import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Footer from './components/footerComponents/footer';
import Homepage from './components/pages/homePage';
import CheckPage from './components/pages/checkPage';
import CountdownTimer from './components/pages/drawPage';

class App extends Component {
    render(){
    return (          
          <div className="bg-cl">
                           
              <Router >
                <Route exact path="/" component={Homepage}/>
                <Route path="/draw" component={CountdownTimer} />
                <Route path="/check" component={CheckPage} />
              </Router>
             {/* <CountdownTimer/> */}
             {/* // <Footer/> */}
          </div>       
      
    );
  }
}

export default App;
