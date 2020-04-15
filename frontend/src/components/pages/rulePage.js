import React, { Component } from 'react';
import './rulePage.css';
import LinearProgress from '@material-ui/core/LinearProgress';

class RulePage extends Component {    

    render(){
        return (
            
            <div> 
              <div className="hr-rule">
                  <div className="container">
                    <div className="txt" >Before starting drawing the lottery, you need at least </div>
                    <div className="txt">a ticket of the lottery that has 6 numbers on it. </div>
                    <div className="txt">If all of number of your ticket is equal to any prizes</div>
                    <div className="txt">you will get the reward!!!</div>
                  </div> 
                  <div className="container">
                    <LinearProgress />
                    <LinearProgress color="secondary" />
                  </div>
                  <div className="container">                      
                    <div className="txt">We will start at the 5th prize</div>
                    <div className="txt">There are 100 prizes and the reward is 20,000 baht per prize</div>
                  </div>
                    
                                  
              </div>
            </div>
            
        );

      }
}

export default RulePage;