import React from 'react';
import moment from 'moment';
import './countdownTimer.css';

class CountdownTimer extends React.Component {

  constructor(props) {
    super(props);

    // console.log("props: "+props.then);
    const { then, timeFormat } = this.props
    

    this.state = {
      days: undefined,
      hours: undefined,
      minutes: undefined,
      seconds: undefined,
      then: undefined
    };    
  }  
//   "04 17 2020, 6:33 pm", "MM DD YYYY, h:mm a"
    componentDidMount() {
        
        console.log("format_prop: "+this.props.timeFormat);
        console.log("then_prop: "+this.props.then);
        
        // const { timeTillDate, timeFormat } = this.props;
		// const then = moment("04 17 2020, 6:00 pm", "MM DD YYYY, h:mm a");
        // const { thenTime } = moment(this.props.then, this.props.timeFormat);   
        // const { timeFormat } = "MM DD YYYY, h:mm a";
        // const then = moment(timeTillDate, timeFormat);
        this.interval = setInterval(() => { 
            // this.setState({ then: this.props.then});
            const now = moment();
            console.log("now:" + now);
            console.log("then:" + this.props.then);
            const countdown = moment(this.props.then - now).add({hours: -31});
            const days = countdown.format('D');
            const hours = countdown.format('HH');
            const minutes = countdown.format('mm');
            const seconds = countdown.format('ss');

            this.setState({ days, hours, minutes, seconds });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    render() {
        const { days, hours, minutes, seconds } = this.state;

        // Mapping the date values to radius values
        const daysRadius = mapNumber(days, 31, 0, 0, 360);
        const hoursRadius = mapNumber(hours, 24, 0, 0, 360);
        const minutesRadius = mapNumber(minutes, 60, 0, 0, 360);
        const secondsRadius = mapNumber(seconds, 60, 0, 0, 360);

        if (!seconds) {
            return null;
        }

        return (
            <div>
              <div className="container">                
              {/* <h1>Countdown</h1> */}
                <div className="row count-center">
                  <div className="countdown-wrapper">
                    
                    {days && (
                        <div className="countdown-item">
                            <SVGCircle radius={daysRadius} />
                            {days}
                            <span>days</span>
                        </div>
                    )}
                    {hours && (
                        <div className="countdown-item">
                            <SVGCircle radius={hoursRadius} />
                            {hours}
                            <span>hours</span>
                        </div>
                    )}
                    {minutes && (
                        <div className="countdown-item">
                            <SVGCircle radius={minutesRadius} />
                            {minutes}
                            <span>minutes</span>
                        </div>
                    )}
                    {seconds && (
                        <div className="countdown-item">
                            <SVGCircle radius={secondsRadius} />
                            {seconds}
                            <span>seconds</span>
                        </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
        );
    }
}

const SVGCircle = ({ radius }) => (
    <svg className="countdown-svg">
        <path
            fill="none"
            stroke="#333"
            stroke-width="4"
            d={describeArc(50, 50, 48, 0, radius)}
        />
    </svg>
);

// From StackOverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
        x: centerX + radius * Math.cos(angleInRadians),
        y: centerY + radius * Math.sin(angleInRadians)
    };
}

function describeArc(x, y, radius, startAngle, endAngle) {
    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    var d = [
        'M',
        start.x,
        start.y,
        'A',
        radius,
        radius,
        0,
        largeArcFlag,
        0,
        end.x,
        end.y
    ].join(' ');

    return d;
}

// From StackOverflow: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber(number, in_min, in_max, out_min, out_max) {
    return (
        ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
    );
}

export default CountdownTimer;