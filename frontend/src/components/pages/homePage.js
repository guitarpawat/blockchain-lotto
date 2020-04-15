import React, { Component } from 'react';
import './homePage.css';
import 'react-awesome-button/dist/themes/theme-blue.css';
import {
  AwesomeButton
} from 'react-awesome-button';
import lotBg from './lot-bg.png';

class Homepage extends Component {    

    render(){
        return (
            
            <div>              
              {/* <img className="image" src={lotBg} alt="lotBg" id="bg" /> */}
              <div className="hr">
              <div className="ltr-center">
                <div id="dots">
                  <div id="blue" class="blue dot"></div>
                  <div id="red" class="red dot"></div>
                  <div id="yellow" class="yellow dot"></div>
                  <div id="green" class="green dot"></div>
                </div>
                
                
                <h2 className="ltr-text">T h e &nbsp; L o t t e r y</h2>
                
                </div> 
                
                <div className="row space-top">   
                <div className="col-6">
                  <AwesomeButton
                    className="Btn-Draw"
                    type="secondary"
                    onPress={next => {                    
                      window.location.href = '/draw'
                    }}
                  >
                    DRAW
                  </AwesomeButton>
                </div>          
                <div className="col-6">
                <AwesomeButton
                  className="Btn-Check"
                  type="secondary"
                  progress
                  onPress={next => {                  
                    window.location.href = '/check'
                  }}
                >
                  CHECK
                </AwesomeButton>
                </div>
              </div>
              </div>
            </div>
            
        );

      }
}

export default Homepage;