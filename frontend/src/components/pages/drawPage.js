import React, { Component } from "react";
import './drawPage.css';
import CountdownTimer from './countdownTimer';
import FifthPrize from './fifthPrize';
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
                  
                    // console.log("con:" + this.state.threadPoperties[0].country);
                }
            );
            
        })
        .catch(err => console.log(err));
  }  
  
  //  const calculateTimeLeft = () => {
  //   const difference = +new Date("2020-02-28") - +new Date();
  //   let timeLeft = {};

  //   if (difference > 0) {
  //     timeLeft = {
  //       days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //       hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
  //       minutes: Math.floor((difference / 1000 / 60) % 60),
  //       seconds: Math.floor((difference / 1000) % 60)
  //     };
  //   }

  //   return timeLeft;
  // };

  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // useEffect(() => {
  //   setTimeout(() => {
  //     setTimeLeft(calculateTimeLeft());
  //   }, 1000);
  // });

  // const timerComponents = [];

  // Object.keys(timeLeft).forEach(interval => {
  //   if (!timeLeft[interval]) {
  //     return;
  //   }

  //   timerComponents.push(
  //     <span>
  //       {timeLeft[interval]} {interval}{" "}
  //     </span>
  //   );
  // });

  // hasLive() {
  //   var isLive = this.props.isLive;
  //     if(isLive)
  //       return <div>draw the number</div>
  //     else return <div className="ctd-center bg-text">
  //                   <h2>C O U N T D O W N &nbsp;	&nbsp;  T O  &nbsp;	&nbsp;	 G E T &nbsp;	 &nbsp;	 T H E &nbsp;	 &nbsp;	B I G G E S T &nbsp;	 &nbsp;	 P R I Z E</h2>
  //                   else
  //                   {/* {timerComponents.length ? timerComponents : <span>Time's up!</span>} */}
  //                   {/* { this.CountdownTimer()} */}
  //                 </div>
  // }

  render() {
    
      return (
        
          <div>
            <Header/>
            {/* <Timer date={this.state.nextLive}/>     */}
            <Fifth/>        
          </div>
          
      );
  }
}

export default DrawPage;


