import React, { useEffect, useState, Component } from "react";
import './secondPrize.css';

class SecondPrize extends Component {

    constructor(props) {
      super(props);  
      
      this.state = {
        timeCount: []
      }     
      
    }


    SecondPrize = () => {
        
    }
  

    render() { 
    
        return (  
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4"></div>
                            <div className="col-4 topic-txt ltr-border ltr-border-shadow">
                                
                                THE &nbsp;&nbsp;SECOND &nbsp;&nbsp;PRIZE
                            </div>
                        <div className="col-4"></div>                        
                    </div>
                </div>

                <div className="container">
                    <div className="row centered">                    

                    <div className="col-2">
                        <div class="box">
                        {/* <img className="image" src={logo} alt="Logo" /> */}
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
                            </div>            
                        </div>
                    </div>
                </div>


                </div>
            </div>
        );
    }
}

export default SecondPrize;