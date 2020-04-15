import React, { Component } from "react";
import './drawPage.css';
import CountdownTimer from './countdownTimer';
import FifthPrize from './fifthPrize';
import RulePage from './rulePage';
import Header from '../headerComponents/header.js';
import axios from 'axios';


const Timer = () => {
  return (
    <CountdownTimer/>
  );
}

const Fifth = () => {
  return (
    <FifthPrize/>
  );
}

const Rule = () => {
  return (
    <RulePage/>
  );
}



class DrawPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isLive: false,
      full_data: []
    }
    
  }

  componentDidMount() {
    axios 
        .get(`http://localhost:3001/api/v1/status`)
        .then(res => {
            console.log(res.data);
            const full_data = res.data;
            this.setState(
                {
                    full_data: full_data,
                },
                () => {
                    // console.log(this.state.isLive);
                    // console.log(this.state.nextDate);
                    console.log(this.state.full_data.nextLive);

                    if (this.state.full_data.isLive){
                      axios
                      .get("http://localhost:3001/api/v1/results/"+this.state.full_data.liveId)
                      .then(res =>{
                        console.log(res.data)
                        const number_data = res.data;
                        this.setState(
                          {
                            number_data: number_data,
                          })
                      })
                    }
                  
                    // console.log("con:" + this.state.threadPoperties[0].country);
                }
            );
            
        })
        .catch(err => console.log(err));
  }
  
  render() {
    
      return (
        
          <div>
            <Header/>
            {/* <Timer date={this.state.nextLive}/>     */}
            {/* <Timer
              timeTillDate="05 25 2020, 6:00 am" 
              timeFormat="MM DD YYYY, h:mm a"
              /> */}
            {/* <Rule/>   */}
            <Fifth/>        
          </div>
          
      );
  }
}

export default DrawPage;


