import React, { Component } from "react";
import './fifthPrize.css';
import num1 from './image/num1.png';
import num2 from './image/num2.png';
import num3 from './image/num3.png';
import num4 from './image/num4.png';
import num5 from './image/num5.png';
import num6 from './image/num6.png';
import num7 from './image/num7.png';
import num8 from './image/num8.png';
import num9 from './image/num9.png';
import num0 from './image/num0.png';
import numQ from './image/numQ.png';

function FifthPrizeName() {
    return (
        <div className="col ltr-txt">
            The 5th Prize
        </div>
    );
}

function FourthPrizeName() {
    return (
        <div className="col ltr-txt">
        The 4th Prize
        </div>   
    );
}

function ThirdPrizeName() {
    return (
        <div className="col ltr-txt">
        The 3rd Prize
        </div>
    );
}

function SecondPrizeName() {
    return (
    // <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
    //     THE &nbsp;&nbsp;SECOND &nbsp;&nbsp;PRIZE
    // </div>
    <div className="col ltr-txt">
    The 2nd Prize
    </div>
    );
}

function FirstPrizeName() {
    return (
        <div className="col ltr-txt">
        The 1st Prize
        </div>
    );
}

function FirstSidePrizeName() {
    return (
        <div className="col ltr-txt">
        The 1st Prize Neighbors
        </div>
    );
}

function LastTwoPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;LAST TWO DIGITS&nbsp;&nbsp;PRIZE
    </div>
    );
}

function LastThreePrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;LAST THREE DIGITS&nbsp;&nbsp;PRIZE
    </div>
    );
}

function DrawingCircle() {
    return(
            
                    <div className="row centered">                    

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                    <div id="zero" class="zero ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div class="col-2">    
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                    <div id="zero" class="zero ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                    <div id="zero" class="zero ball"></div>
                                </div>            
                            </div>
                        </div>

                    
                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                    <div id="zero" class="zero ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                    <div id="zero" class="zero ball"></div>
                                </div>            
                            </div>
                        </div>

                        <div className="col-2">
                            <div class="box">
                                <div id="balls">
                                    <div id="one" class="one ball"></div>
                                    <div id="two" class="two ball"></div>
                                    <div id="three" class="three ball"></div>
                                    <div id="four" class="four ball"></div>
                                    <div id="five" class="five ball"></div>
                                    <div id="six" class="six ball"></div>
                                    <div id="seven" class="seven ball"></div>
                                    <div id="eight" class="eight ball"></div>
                                    <div id="nine" class="nine ball"></div>
                                    <div id="zero" class="zero ball"></div>
                                </div>            
                            </div>
                        </div>                        

                        
                </div>
    );
}


class FifthPrize extends Component {

    constructor(props) {
      super(props); 

    //   const {count} = this.props
    //   console.log("prop_count: "+count)      
    const {count, data} = this.props  

      this.state = {
        data: undefined,
        show1: undefined,
        show2: undefined,
        show3: undefined,
        show4: undefined,
        show5: undefined,
        show6: undefined
      }     
        
      this.interval = setInterval(()=>{
        this.setState({
            data: this.props.data
        }) 
        this.FirstPrize(this.state.data.first);
        // this.OtherPrize(this.state.data.besideFirst);
    }, 5000)
    
    

    }

    componentWillUnmount() {
        if (this.interval) {
            clearInterval(this.interval);
        }
    }

    FirstPrize = (data) => {
        console.log("first ja")
        this.ShowNumber(data);        
    }

    OtherPrize = (data) => {
        console.log("first side ja")
        for(let i = 0; i < data.length; i++){
            // setInterval(()=>{
            this.ShowNumber(data[i]);
            // },3000)
            console.log("else")
        }     
         
    }


    FirstThreedigitsPrize = () => {
        
    }
    
    LastThreeDigitsPrize = () => {
        
    }

    LastTwoDigitsPrize = () => {
        
    }

    ShowNumber = (num) => {
        this.setState({
            show1 : num.charAt(0),
            show2 : num.charAt(1),
            show3 : num.charAt(2),
            show4 : num.charAt(3),
            show5 : num.charAt(4),
            show6 : num.charAt(5)
        })            
    }

    ShowZero = () => {
        return (
            <div className="col-2">
                <img className="image" src={num0} alt="num0" id="num_size"/>
            </div>
        );
    }

    ShowOne = () => {
        return (
            <div className="col-2">
                <img className="image" src={num1} alt="num1" id="num_size"/>
            </div>
        );
    }

    ShowTwo = () => {
        return (
            <div className="col-2">
                <img className="image" src={num2} alt="num2" id="num_size"/>
            </div>
        );
    }

    ShowThree = () => {
        return (
            <div className="col-2">
                <img className="image" src={num3} alt="num3" id="num_size"/>
            </div>
        );
    }

    ShowFour = () => {
        return (
            <div className="col-2">
                <img className="image" src={num4} alt="num4" id="num_size"/>
            </div>
        );
    }

    ShowFive = () => {
        return (
            <div className="col-2">
                <img className="image" src={num5} alt="num5" id="num_size"/>
            </div>
        );
    }

    ShowSix = () => {
        return (
            <div className="col-2">
                <img className="image" src={num6} alt="num6" id="num_size"/>
            </div>
        );
    }

    ShowSeven = () => {
        return (
            <div className="col-2">
                <img className="image" src={num7} alt="num7" id="num_size"/>
            </div>
        );
    }

    ShowEight = () => {
        return (
            <div className="col-2">
                <img className="image" src={num8} alt="num8" id="num_size"/>
            </div>
        );
    }

    ShowNine = () => {
        return (
            <div className="col-2">
                <img className="image" src={num9} alt="num9" id="num_size"/>
            </div>
        );
    }

    ShowQ = () => {
        return (
            <div className="col-2">
                <img className="image" src={numQ} alt="numQ" id="num_size"/>
            </div>
        );
    }

    FirstThreedigitsPrize = () => {
        
    }
    
    LastThreeDigitsPrize = () => {
        
    }

    LastTwoDigitsPrize = () => {
        
    }
    
    ChooseShow = (show) => {
        let showNum = undefined;
        
        switch (show) {
            case "1":
                showNum = <this.ShowOne/>
            break;
            case "2":
                showNum = <this.ShowTwo/>
            break;
            case "3":                
                showNum = <this.ShowThree/>
            break;
            case "4":
                showNum = <this.ShowFour/>
            break;
            case "5":
                showNum = <this.ShowFive/>
            break;
            case "6":
                showNum = <this.ShowSix/>
            break;
            case "7":
                showNum = <this.ShowSeven/>
            break;
            case "8":
                showNum = <this.ShowEight/>
            break;
            case "9":
                showNum = <this.ShowNine/>
            break;
            case "0":
                showNum = <this.ShowZero/>
            break;
            default:
                showNum = <this.ShowQ/>
            break;
        }
        return showNum;
        
    }
  

    render() {
        let prize = null;
        if (prize != null) {
            prize = <FifthPrizeName/>;
          } else {
            prize = <FirstPrizeName/>
          }
        //   console.log("show_render: "+this.state.show1);
    
        return (  
            <div>
                <div className="container">
                    {prize}
                </div>

                <div className="container">
                    <DrawingCircle/>
                </div>

                <div className="container">
                    <div className="row">
                        {/* {setTimeout(()=>{
                            console.log("set")
                            this.ChooseShow(this.state.show1)
                        })} */}
                        {/* {setInterval(()=>{
                            this.ChooseShow(this.state.show2)
                        },1000)}
                        {setInterval(()=>{
                            this.ChooseShow(this.state.show3)
                        },1000)}
                        {setInterval(()=>{
                            this.ChooseShow(this.state.show4)
                        },1000)}
                        {setInterval(()=>{
                            this.ChooseShow(this.state.show5)
                        },1000)}
                        {setInterval(()=>{
                            this.ChooseShow(this.state.show6)
                        },1000)} */}
                            {this.ChooseShow(this.state.show1)}
                            {this.ChooseShow(this.state.show2)}
                            {this.ChooseShow(this.state.show3)}
                            {this.ChooseShow(this.state.show4)}
                            {this.ChooseShow(this.state.show5)}
                            {this.ChooseShow(this.state.show6)}
                    </div>                    
                </div>
                <div className="container">
                    {/* <div class="slide-right">
                        <p>4 of 50</p>
                    </div> */}
                </div>
                
                
            </div>
        );
    }
}

export default FifthPrize;