import React, { useEffect, useState, Component } from "react";
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

function FifthPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FIFTH &nbsp;&nbsp;PRIZE
    </div>
    );
}

function FourthPrizeName() {
    return (
    <div className="container">
        <div className="row">
            {/* <div className="col-4"> 1 of 50</div> */}
            <div className="col-4 offset-4 topic-txt ltr-border ltr-border-shadow">                                
                THE &nbsp;&nbsp;4th &nbsp;&nbsp;PRIZE
            </div>
            {/* <div className="col-4"> 1 of 50</div> */}
        </div>
    </div>    
    
    
    );
}

function ThirdPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;THIRD &nbsp;&nbsp;PRIZE
    </div>
    );
}

function SecondPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;SECOND &nbsp;&nbsp;PRIZE
    </div>
    );
}

function FirstPrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FIRST &nbsp;&nbsp;PRIZE
    </div>
    );
}

function FirstSidePrizeName() {
    return (
    <div className="col-4 topic-txt ltr-border ltr-border-shadow">                                
        THE &nbsp;&nbsp;FIRST SIDE&nbsp;&nbsp;PRIZE
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

function ShowNumber() {
    return (
        <div className="row">
            <div className="col-2">
            <img className="image" src={num1} alt="num1" id="num_size"/>

            </div>
            <div className="col-2">
                <img className="image" src={num5} alt="num5" id="num_size"/>
            </div>
            <div className="col-2">
                <img className="image" src={num3} alt="num3" id="num_size"/>
            </div>
            <div className="col-2">
                <img className="image" src={num6} alt="num6" id="num_size"/>
            </div>
            <div className="col-2">
                <img className="image" src={num7} alt="num7" id="num_size"/>
            </div>
            <div className="col-2">
                <img className="image" src={num9} alt="num9" id="num_size"/>
            </div>
           

        </div>
    );
}


class FifthPrize extends Component {

    constructor(props) {
      super(props);  
      
      this.state = {
        timeCount: []
      }     
      
    }

    FifthPrize = () => {
        
    }

    FirstThreedigitsPrize = () => {
        
    }
    
    LastThreeDigitsPrize = () => {
        
    }

    LastTwoDigitsPrize = () => {
        
    }

    FirstPrizeSide = () => {
        
    }   
  

    render() { 

        let prize = null;
        if (prize != null) {
            prize = <FifthPrizeName/>;
          } else {
            prize = <FourthPrizeName/>
          }
    
        return (  
            <div>
                <div className="container">
                    {/* <div className="row"> */}
                        {prize}
                    {/* </div> */}
                </div>

                <div className="container">
                    <DrawingCircle/>
                </div>

                <div className="container">
                    <ShowNumber/>
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