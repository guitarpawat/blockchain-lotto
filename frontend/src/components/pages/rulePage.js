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
                    {/* <div className="txt">We will start at the 5th prize</div>
                    <div className="txt">There are 100 prizes and the reward is 20,000 baht per prize</div> */}
                    <table class="tg" align="center">
                      <tr>
                        <th class="tg-0lax">The prize</th>
                        <th class="tg-0lax">Reward (THB)</th>
                        <th class="tg-0lax">Amount (Prizes)</th>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">The 1st Prize</td>
                        <td class="tg-0lax"> 6,000,000฿</td>
                        <td class="tg-0lax"> 1</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">The 2nd Prize</td>
                        <td class="tg-0lax">200,000฿</td>
                        <td class="tg-0lax">5</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">The 3rd Prize</td>
                        <td class="tg-0lax">80,000฿</td>
                        <td class="tg-0lax">10</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">The 4th Prize</td>
                        <td class="tg-0lax">40,000฿</td>
                        <td class="tg-0lax">50</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">The 5th Prize</td>
                        <td class="tg-0lax">20,000฿</td>
                        <td class="tg-0lax">100</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">The 1st Neighbors Prize</td>
                        <td class="tg-0lax">100,000฿</td>
                        <td class="tg-0lax">2</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">First Three Digits Prize</td>
                        <td class="tg-0lax">4,000฿</td>
                        <td class="tg-0lax">2,000</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">Last Three Digits Prize</td>
                        <td class="tg-0lax">4,000฿</td>
                        <td class="tg-0lax">2,000</td>
                      </tr>
                      <tr>
                        <td class="tg-0lax txt-left">Last Two Digits Prize</td>
                        <td class="tg-0lax">2,000฿</td>
                        <td class="tg-0lax">10,000</td>
                      </tr>
                    </table>
                  </div>
                    
                                  
              </div>
            </div>
            
        );

      }
}

export default RulePage;