import React, { Component } from 'react';
import './header.css'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';

export default class Header extends Component {
  render() {

    let status = null;
    if (window.location.href.indexOf("/draw") > -1) {
      status = "- Drawing the number -";
    }else{
      status = "- Checking the number -";
    }

    return (

      <div className="my-app">
        <Router className="App container">          
          <nav className="navbar is-light" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            
              <Button animated className="basic"
                onClick={next => {   
                  window.location.href = '/'
                }}>
                <Button.Content visible>Back</Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow left" />
                  {/* <a href="/" className="navbar-item nav-space "></a> */}
                </Button.Content>
              </Button>
            
          </div>
          <div className="nav-center">
              {status}
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              {/* <Link to="/draw" className="navbar-item">Draw&nbsp;&nbsp;&nbsp;</Link>
              <Link to="/check" className="navbar-item">Check</Link> */}

              <Button animated className="basic"
                onClick={next => {     
                  window.location.href = '/draw'
                }}>
                <Button.Content visible>Draw</Button.Content>
                <Button.Content hidden>
                  <Icon name="random" />
                </Button.Content>
              </Button>

              <Button animated className="basic"
                onClick={next => {     
                  window.location.href = '/check'
                }}>
                <Button.Content visible>Check</Button.Content>
                <Button.Content hidden>
                  <Icon name="trophy" />
                </Button.Content>
              </Button>

            </div>
          </div>
        </div>
      
      </nav>
      {/* <Route exact path="/" component={Homepage} /> */}
      {/* <Route exact path="/draw" component={CountdownTimer} />
      <Route path="/check" component={CheckPage} /> */}
        </Router>
      </div>
      
      
    );
  }
}


