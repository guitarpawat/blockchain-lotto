import React, { Component } from "react";
import './drawPage.css';
import CountdownTimer from './countdownTimer';
import FifthPrize from './fifthPrize';
import RulePage from './rulePage';
import Header from '../headerComponents/header.js';
import moment from 'moment';
import axios from 'axios';


class DrawPage extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      isLive: false,
      full_data: [],
      nextLive: undefined,
      number_data: []
    }
    
  }

  componentDidMount() {
    axios 
        .get(`http://localhost:3001/api/v1/status`)
        .then(res => {
            console.log(res.data);
            const full_data = res.data;
            // console.log("nextLive_from_full: " + full_data.nextLive)
            this.setState(
                {
                  nextLive: moment(full_data.nextLive),
                  full_data,
                },
                () => {
                    // if (this.state.full_data.isLive){
                      axios
                      // 5e707e43068877ec5e53fa55
                      // +this.state.full_data.liveId
                      .get("http://localhost:3001/api/v1/results/5e707e43068877ec5e53fa55")
                      .then(res =>{
                        console.log(res.data)
                        const number_data = res.data;
                          this.setState(
                            {
                              number_data: number_data,
                            })                        
                          })
                    // }
                }
            );

          //  console.log("nextLive: "+this.state.nextLive);
            
        })
        
        .catch(err => console.log(err));
        
  }

  render() {
      let {number_data, nextLive} = this.state
      console.log("num_render: "+number_data)
      console.log("nextLive: "+nextLive);

      let page;
      if((nextLive != null) && (number_data.fifth == undefined)){
        console.log("no data")
        page = <CountdownTimer then={nextLive} timeFormat="MM DD YYYY, h:mm a"/>
      } else if((nextLive != null) && (number_data.fifth != null)){
        console.log("have data")
        page = number_data.forth ? (<FifthPrize data={number_data}/>) : <RulePage/>
      }

      return (
        
          <div>
            <Header/>
            {/* <h1>{number_data.first}</h1> */}
            {/* {nextLive ? (<CountdownTimer then={nextLive} timeFormat="MM DD YYYY, h:mm a"/>) : <h1>...Loading...</h1>} */}
            {/* {this.state.isLive ? (<Fifth/>) : <h1><Rule/></h1>}   */}
            
            {page}
            
          </div>
          
      );
  }
}

export default DrawPage;


