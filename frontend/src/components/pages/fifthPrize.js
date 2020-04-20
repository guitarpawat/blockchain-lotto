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

function TitleName() {
    return (
        <div className="col ltr-txt">
            The Lottery
        </div>
    );
}

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
        <div className="col ltr-txt">
        The Last Two Digits Prize
        </div>
    );
}

function LastThreePrizeName() {
    return (
        <div className="col ltr-txt">
        The Last Three Digits Prize
        </div>
    );
}

function FirstThreePrizeName() {
    return (
        <div className="col ltr-txt">
        The First Three Digits Prize
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

let j = null;
class FifthPrize extends Component {

    constructor(props) {
      super(props); 

    //   const {count} = this.props
    //   console.log("prop_count: "+count)      
    const {count, data} = this.props  

      this.state = {
        show1: undefined,
        show2: undefined,
        show3: undefined,
        show4: undefined,
        show5: undefined,
        show6: undefined,
        title: undefined,
        name: undefined,
        rank: undefined
      }     
        

        let i = 0; 
        j = 4;       
        let prizeF = [this.props.data.first]
        let prizeT = [this.props.data.lastTwo]
        let prize = [this.props.data.fifth, //0
                    this.props.data.forth, //1
                    this.props.data.third, //2
                    this.props.data.second, //3
                    this.props.data.frontThree, //4
                    this.props.data.lastThree, //5
                    prizeF, //6
                    this.props.data.besideFirst, //7
                    prizeT] //8
        
        const interval = setInterval(() => {
            
            this.setQ();
            //รางวัลเลขท้าย2ตัว
            if((j == 8)){
                this.LastTwoPrize(prize[j][i])
                setTimeout(()=>{
                    if(i==0){
                        j+=1;
                        this.setState({
                            name: j
                        })
                          
                    }
                    clearInterval(interval);
                },10000)
            }
            else{ 
                if(j == 5){
                    // รางวัลเลขท้าย3ตัว
                    this.LastThreePrize(prize[j][i])
                    
                }else{
                    //รางวัลอื่นๆ
                    this.OtherPrize(prize[j][i]);
                }        
                      
                i+=1;
                if(i === prize[j].length){
                    this.setState({
                        title: i,
                        name: j,
                        rank: prize[j].length
                    })   
                    j+=1;
                    i = 0;  
                }          
            }      
                         
                  
        }, 10000);  
    

    }

    FirstPrize = (data) => {
        this.ShowNumber(data); 
        console.log(data);       
    }

    LastTwoPrize = (data) => {
        setTimeout(()=>{
            this.setState({
                show1 : undefined
            })
        }, 1000)
        setTimeout(()=>{
            this.setState({
                show2 : undefined,
            })
        }, 2000)
        setTimeout(()=>{
            this.setState({
                show3 : undefined,
            })
        }, 3000)
        setTimeout(()=>{
            this.setState({
                show4 : undefined,
            })
        }, 4000)
        setTimeout(()=>{
            this.setState({
                show5 : data.charAt(0),
            })
        }, 5000)
        setTimeout(()=>{
            this.setState({
                show6 : data.charAt(1)    
            })
        }, 6000)
        console.log("lastTwoPrize");
    }

    LastThreePrize = (data) => {
        setTimeout(()=>{
            this.setState({
                show1 : undefined
            })
        }, 1000)
        setTimeout(()=>{
            this.setState({
                show2 : undefined,
            })
        }, 2000)
        setTimeout(()=>{
            this.setState({
                show3 : undefined,
            })
        }, 3000)
        setTimeout(()=>{
            this.setState({
                show4 : data.charAt(0),
            })
        }, 10000)
        setTimeout(()=>{
            this.setState({
                show5 : data.charAt(1),
            })
        }, 11000)
        setTimeout(()=>{
            this.setState({
                show6 : data.charAt(2)    
            })
        }, 12000)
        console.log(data);
    }
    

    OtherPrize = (data) => {
        setTimeout(()=>{
        this.ShowNumber(data);
        },10000)
        console.log(data)
         
    }

    ShowNumber = (num) => {
        setTimeout(()=>{
            this.setState({
                show1 : num.charAt(0)
            })
        }, 1000)
        setTimeout(()=>{
            this.setState({
                show2 : num.charAt(1),
            })
        }, 2000)
        setTimeout(()=>{
            this.setState({
                show3 : num.charAt(2),
            })
        }, 3000)
        setTimeout(()=>{
            this.setState({
                show4 : num.charAt(3),
            })
        }, 4000)
        setTimeout(()=>{
            this.setState({
                show5 : num.charAt(4),
            })
        }, 5000)
        setTimeout(()=>{
            this.setState({
                show6 : num.charAt(5)    
            })
        }, 6000)
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

    setQ = () => {
        this.setState({
            show1: "q",
            show2: "q",
            show3: "q",
            show4: "q",
            show5: "q",
            show6: "q",
        })
    }

    showTitle = (show) => {
        let showNum = undefined
        switch (show) {
            case 0:
                showNum = <FifthPrizeName/>
            break;
            case 1:
                showNum = <FourthPrizeName/>
            break;
            case 2:                
                showNum = <ThirdPrizeName/>
            break;
            case 3:
                showNum = <SecondPrizeName/>
            break;
            case 4:
                showNum = <FirstThreePrizeName/>
            break;
            case 5:
                showNum = <LastThreePrizeName/>
            break;
            case 6:
                showNum = <FirstPrizeName/>
            break;
            case 7:
                showNum = <FirstSidePrizeName/>
            break;
            case 8:
                showNum = <LastTwoPrizeName/>
            break;
            default:
                showNum = <TitleName/>
            break;
        }
        return showNum;
    }
  

    render() {
        
    
        return (  
            <div>
                <div className="container">
                    {this.showTitle(this.state.name)}
                </div>

                <div className="container">
                    <DrawingCircle/>
                </div>

                <div className="container">
                    <div className="row">
                        {this.ChooseShow(this.state.show1)}
                        {this.ChooseShow(this.state.show2)}
                        {this.ChooseShow(this.state.show3)}
                        {this.ChooseShow(this.state.show4)}
                        {this.ChooseShow(this.state.show5)}
                        {this.ChooseShow(this.state.show6)}
                        
                    </div>                    
                </div>

                <div className="container">
                    <div className="row rank-num">
                        <div className="col-12">
                            rank: {this.state.title} of {this.state.rank}
                        </div>
                    </div>
                </div>
                
                
            </div>
        );
    }
}

export default FifthPrize;