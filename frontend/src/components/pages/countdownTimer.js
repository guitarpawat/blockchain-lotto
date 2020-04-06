import React, { useEffect, useState, Component } from "react";

class CountdownTimer extends Component {

  constructor(props) {
    super(props);  
    
    this.state = {
      timeCount: []
    }
    
    
  }    
  
  // componentDidMount() {
  //   axios 
  //       .get(`http://localhost:3001/api/v1/status`)
  //       .then(res => {
  //           console.log(res.data);
  //           const full_data = res.data;
  //           this.setState(
  //               {
  //                   full_data: full_data,
  //               },
  //               () => {
  //                   // console.log(this.state.isLive);
  //                   // console.log(this.state.nextDate);
  //                   console.log(this.state.full_data.nextLive);
  //                   // console.log("con:" + this.state.threadPoperties[0].country);
  //               }
  //           );
            
  //       })
  //       .catch(err => console.log(err));
  //       this.Count()
  // }

  Count = () => {
    const calculateTimeLeft = () => {
      const difference = +new Date("2020-02-28") - +new Date();
      let timeLeft = {};
    
      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / ((1000 * 60 * 60)) % 24) - 7),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
    
      return timeLeft;
    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    
    useEffect(() => {
      setTimeout(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
    });
    
    const timerComponents = [];
    
    Object.keys(timeLeft).forEach(interval => {
      if (!timeLeft[interval]) {
        return;
      }
    
      timerComponents.push(
        <span>
          {timeLeft[interval]} {interval}{" "}
        </span>
      );
    });

    this.setState({
      timeCount: timerComponents 
    });
    console.log("timeCount : " + this.state.timeCount);
    console.log("timeComp : " + timerComponents);
    
    // return (        
    //   <div>
    //   <h1>Alligator.io New Year's 2020 Countdown</h1>
    //   <h2>With React Hooks!</h2>
    //   {timerComponents.length ? timerComponents : <span>Draw the number!</span>}
    // </div>         
    // );

  }
  

  render() { 
    
      return (  
      
      <div className="ctd-center bg-text">
                    { this.Count}
                     <h2>C O U N T D O W N &nbsp;	&nbsp;  T O  &nbsp;	&nbsp;	 G E T &nbsp;	 &nbsp;	 T H E &nbsp;	 &nbsp;	B I G G E S T &nbsp;	 &nbsp;	 P R I Z E</h2>
                     {this.state.timeCount.length ? this.state.timeCount : <span>Draw the number!</span>}
                   </div>
      );
  }
}

export default CountdownTimer;
