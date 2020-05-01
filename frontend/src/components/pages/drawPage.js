import React, { Component } from "react";
import './drawPage.css';
import CountdownTimer from './countdownTimer';
import Header from '../headerComponents/header.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import moment from 'moment';
import axios from 'axios';
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
import RulePage from "./rulePage";

const images = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, numQ]

function DrawingCircle() {
    return (

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

let i = 0;
let j = 0;
let Lottery = {
    fifth : undefined,
    forth : undefined,
    third : undefined,
    second : undefined,
    frontThree : undefined,
    lastThree : undefined,
    first : undefined,
    besideFirst : undefined,
    lastTwo : undefined

}

class DrawPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLive: false,
            full_data: [],
            nextLive: undefined,
            number_data: [],
            show1: undefined,
            show2: undefined,
            show3: undefined,
            show4: undefined,
            show5: undefined,
            show6: undefined,
            title: undefined,
            name: undefined,
            rank: undefined,
            poc: "init",
            head: "Welcome to the lottery drawing",
            number: undefined
        }

        this.status = {
            INIT: 0,
            COUNT_DOWN: 1,
            WAITING_LIVE_ID: 2,
            FIFTH_LIVE_1: 3,
            FIFTH_BREAK: 4,
            FIFTH_LIVE_2: 5,
            FORTH_BREAK: 6,
            FORTH_LIVE: 7,
            THIRD_BREAK: 8,
            THIRD_LIVE: 9,
            SECOND_BREAK: 10,
            SECOND_LIVE: 11,
            FIRST_BREAK: 12,
            FIRST_LIVE: 13,
            PARTIAL_BREAK: 14,
            PARTIAL_LIVE: 15,
            FINISHED: 16,
        };
        
        Object.freeze(this.status);

        this.currentStatus = this.status.INIT
        this.currentIndex = 0
        this.nextStatus = null

    }

    fetchPrize(){
        axios
            // 5e707e43068877ec5e53fa55
            // +this.state.full_data.liveId
            .get("http://localhost:3001/api/v1/results/"+this.state.full_data.liveId)
            .then(res => {
                console.log(res.data)
                const number_data = res.data;
                this.setState(
                    {
                        number_data: number_data,
                    })
                console.log("fetch")
                if(number_data.fifth !== undefined){
                    if(Lottery.fifth !== undefined){
                        // if(Lottery.fifth[50].charAt[5] !== ("-" || undefined)){
                        // this.GetData();                                
                        // }
                    }
                }
            })
    }

    fetchData() {
        axios
            .get(`http://localhost:3001/api/v1/status`)
            .then(res => {
                console.log(res.data);
                const full_data = res.data;
                this.setState(
                    {
                        nextLive: moment(full_data.nextLive),
                        full_data,
                    },
                    () => {
                        if (this.state.full_data.isLive){
                            this.fetchPrize()                       
                        }                    
                    }
                );                
                //  console.log("nextLive: "+this.state.nextLive);  
                     
            })
            .catch(err => console.log(err));
    }

    // componentDidMount() {
    //     this.interval = setInterval(() => this.fetchData(), 10000);        
    //     // this.fetchData()
    // }

    GetData = () => {

        let prizeF = [Lottery.first]
        let prizeT = [Lottery.lastTwo]
        let prize = [Lottery.fifth, //0
                    Lottery.forth, //1
                    Lottery.third, //2
                    Lottery.second, //3
                    Lottery.frontThree, //4
                    Lottery.lastThree, //5
                    prizeF, //6
                    Lottery.besideFirst, //7
                    prizeT] //8

        const interval = setInterval(() => {
            this.setQ();
            //รางวัลเลขท้าย2ตัว
            if ((j === 8)) {
                this.LastTwoPrize(prize[j][i])
                setTimeout(() => {
                    if (i === 0) {
                        j += 1;
                        // this.setState({
                        //     name: j
                        // })

                    }
                    clearInterval(interval);
                }, 10000)
            }
            else {
                if (j === 5) {
                    // รางวัลเลขท้าย3ตัว
                    this.LastThreePrize(prize[j][i])
                } else {
                    //รางวัลอื่นๆ
                    this.OtherPrize(prize[j][i]);
                }

                i += 1;
                if (i === prize[j].length) {
                    // this.setState({
                    //     title: i,
                    //     name: j,
                    //     rank: prize[j].length
                    // })
                    j += 1;
                    i = 0;
                }
            }
            // if((prize[j][i] === "-") || (prize[j][i] === undefined)){
            //     console.log("fetch in get")
                this.fetchData()
            // }


        }, 10000);
    }

    FirstPrize = (data) => {
        this.ShowNumber(data);
        console.log(data);
    }

    LastTwoPrize = (data) => {
        setTimeout(() => {
            this.setState({
                show1: undefined
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                show2: undefined,
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                show3: undefined,
            })
        }, 3000)
        setTimeout(() => {
            this.setState({
                show4: undefined,
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                show5: data.charAt(0),
            })
        }, 5000)
        setTimeout(() => {
            this.setState({
                show6: data.charAt(1)
            })
        }, 6000)
        console.log(data);
    }

    LastThreePrize = (data) => {
        setTimeout(() => {
            this.setState({
                show1: undefined
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                show2: undefined,
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                show3: undefined,
            })
        }, 3000)
        setTimeout(() => {
            this.setState({
                show4: data.charAt(0),
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                show5: data.charAt(1),
            })
        }, 5000)
        setTimeout(() => {
            this.setState({
                show6: data.charAt(2)
            })
        }, 6000)
        console.log(data);
    }

    FrontThreePrize = (data) => {
        setTimeout(() => {
            this.setState({
                show1: data.charAt(0)
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                show2: data.charAt(1),
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                show3: data.charAt(2),
            })
        }, 3000)
        setTimeout(() => {
            this.setState({
                show4: undefined,
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                show5: undefined,
            })
        }, 5000)
        setTimeout(() => {
            this.setState({
                show6: undefined
            })
        }, 6000)
        console.log(data);
    }


    OtherPrize = (data) => {
        setTimeout(() => {
            this.ShowNumber(data);
        }, 10000)
        console.log(data)

    }

    ShowNumber = (num) => {
        console.log("in showNumber");
        setTimeout(() => {
            this.setState({
                show1: num.charAt(0)
            })
        }, 1000)
        setTimeout(() => {
            this.setState({
                show2: num.charAt(1),
            })
        }, 2000)
        setTimeout(() => {
            this.setState({
                show3: num.charAt(2),
            })
        }, 3000)
        setTimeout(() => {
            this.setState({
                show4: num.charAt(3),
            })
        }, 4000)
        setTimeout(() => {
            this.setState({
                show5: num.charAt(4),
            })
        }, 5000)
        setTimeout(() => {
            this.setState({
                show6: num.charAt(5)
            })
        }, 6000)
    }

    ChooseShow = (show) => {
        if ((show === undefined) || (show === "-")){
            return (
                <div className="col-2">
                    <img className="image" src={numQ} alt={'num' + show} id="num_size" />
                </div>
            )
        }else{
            return (
                <div className="col-2">
                    <img className="image" src={images[show]} alt={images[show]} id="num_size" />
                </div>
            )
        }
        
    }

    setQ = () => {
        this.setState({
            show1: undefined,
            show2: undefined,
            show3: undefined,
            show4: undefined,
            show5: undefined,
            show6: undefined,
        })
    }

    showTitle = (show) => {
        if (typeof show !== 'number')
            return (
                <div className="col ltr-txt">
                    The Lottery
                </div>
            )

        const texts = [
            'The 5th Prize',
            'The 4th Prize',
            'The 3rd Prize',
            'The 2nd Prize',
            'The First Three Digits Prize',
            'The Last Three Digits Prize',
            'The 1st Prize',
            'The 1st Prize Neighbors',
            'The Last Two Digits Prize',
        ]

        return (
            <div className="col ltr-txt">
                {texts[show]}
            </div>
        )
    }

    ShowLottery = (num1, num2, num3, num4, num5, num6) => {
        return (
            <div>
                <div className="container">
                    <div className="col ltr-txt">
                        {this.state.head}
                    </div>                    
                </div>

                <div className="container">
                    <DrawingCircle />
                </div>

                <div className="container">
                    <div className="row">
                        {this.ChooseShow(num1)}
                        {this.ChooseShow(num2)}
                        {this.ChooseShow(num3)}
                        {this.ChooseShow(num4)}
                        {this.ChooseShow(num5)}
                        {this.ChooseShow(num6)}

                    </div>
                </div>

                <div className="container">
                    <div className="row rank-num">
                        <div className="col-12">
                            prize: {this.currentIndex} of {this.state.number}
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    ShowFinish = () => {
        return (
                <div className="container">
                    <div className="col ltr-txt">
                        {this.state.head}
                    </div>               
                    <div className="col poc-txt">
                        {this.state.poc}
                    </div>     
                </div>
        )
    }

    AddArray = (data) => {
        let dataArr = [];
        let arr = data;
        let num = arr.toString().split(',');
        num.forEach(function (obj) {
            dataArr.push(obj);
        });
        return dataArr;
    }
    
    setNextStatus = (status, results) => {
        if(this.currentStatus === this.status.INIT) {
            if(status.isLive) {
                if(status.liveId) {
                    if(results.lastTwo && results.lastTwo != "" && results.lastTwo.substring(1,2) !== "-") {
                        this.currentStatus = this.status.PARTIAL_LIVE // includes front 3, last 3 and last 2
                    } else if(results.first && results.first != "" && results.first.substring(5,6) !== "-") {
                        this.currentStatus = this.status.FIRST_LIVE
                    } else if(results.second && results.second[0] && results.second[0].substring(5,6) !== "-") {
                        this.currentStatus = this.status.SECOND_LIVE
                    } else if(results.third && results.third[0] && results.third[0].substring(5,6) !== "-") {
                        this.currentStatus = this.status.THIRD_LIVE
                    } else if(results.forth && results.forth[0] && results.forth[0].substring(5,6) !== "-") {
                        this.currentStatus = this.status.FORTH_LIVE
                    } else if(results.fifth && results.fifth[50] && results.fifth[50].substring(5,6) !== "-") {
                        this.currentStatus = this.status.FIFTH_LIVE_2
                        this.currentIndex = 50
                    } else if(results.fifth && results.fifth[0] && results.fifth[0].substring(5,6) !== "-") {
                        this.currentStatus = this.status.FIFTH_LIVE_1
                    } else {
                        this.currentStatus = this.status.WAITING_LIVE_ID // impossible use case!
                    }
                } else {
                    this.currentStatus = this.status.WAITING_LIVE_ID // live but no block confirmed
                }
            } else {
                if(status.nextLive) {
                    console.log(this.status.nextLive)
                    this.currentStatus = this.status.COUNT_DOWN // waiting for live
                } else {
                    this.currentStatus = this.status.FINISHED // nextLive is null when drawing session finished
                }
            }
        } else if(this.currentStatus === this.status.COUNT_DOWN) {
            if(status.isLive) {
                if(results.fifth && results.fifth[0] && results.fifth[0].substring(5,6) !== "-") {
                    this.currentStatus = this.status.FIFTH_LIVE_1 // live started!
                } else {
                    this.currentStatus = this.status.WAITING_LIVE_ID // live but no block confirmed
                }
            } else {
                return this.currentStatus === this.status.COUNT_DOWN // not live, continue count down
            }
        } else if(this.currentStatus === this.status.WAITING_LIVE_ID) {
            if(results.fifth && results.fifth[0] && results.fifth[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.FIFTH_LIVE_1 // live started!
            } else {
                return this.currentStatus === this.status.WAITING_LIVE_ID // live but no block confirmed
            }
        } else if(this.currentStatus === this.status.FIFTH_LIVE_1) {
            if(this.currentIndex !== 50) {
                return null // not finish fifth live 1 yet, fail fast
            } else if(results.fifth && results.fifth[50] && results.fifth[50].substring(5,6) !== "-") {
                this.currentStatus = this.status.FIFTH_LIVE_2
            } else {
                this.currentStatus = this.status.FIFTH_BREAK
            }
        } else if(this.currentStatus === this.status.FIFTH_BREAK) {
            if(results.fifth && results.fifth[50] && results.fifth[50].substring(5,6) !== "-") {
                this.currentStatus = this.status.FIFTH_LIVE_2
            } else {
                return null // fifth live 2 is not available yet
            }
        } else if(this.currentStatus === this.status.FIFTH_LIVE_2) {
            if(this.currentIndex !== 100) {
                return null // not finish fifth live 2 yet, fail fast
            } else if(results.forth && results.forth[0] && results.forth[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.FORTH_LIVE
                this.currentIndex = 0 // reset array index to 0
            } else {
                this.currentStatus = this.status.FORTH_BREAK
            }
        } else if(this.currentStatus === this.status.FORTH_BREAK) {
            if(results.forth && results.forth[0] && results.forth[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.FORTH_LIVE
                this.currentIndex = 0 // reset array index to 0
            } else {
                return null // forth live is not available yet
            }
        } else if(this.currentStatus === this.status.FORTH_LIVE) {
            if(this.currentIndex !== 50) {
                return null
            } else if(results.third && results.third[0] && results.third[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.THIRD_LIVE
                this.currentIndex = 0
            } else {
                this.currentStatus = this.status.THIRD_BREAK
            }
        } else if(this.currentStatus === this.status.THIRD_BREAK) {
            if(results.third && results.third[0] && results.third[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.THIRD_LIVE
                this.currentIndex = 0
            } else {
                return null
            }
        } else if(this.currentStatus === this.status.THIRD_LIVE) {
            if(this.currentIndex !== 10) {
                return null
            } else if(results.second && results.second[0] && results.second[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.SECOND_LIVE
                this.currentIndex = 0
            } else {
                this.currentStatus = this.status.SECOND_BREAK
            }
        } else if(this.currentStatus === this.status.SECOND_BREAK) {
            if(results.second && results.second[0] && results.second[0].substring(5,6) !== "-") {
                this.currentStatus = this.status.SECOND_LIVE
                this.currentIndex = 0
            } else {
                return null
            }
        } else if(this.currentStatus === this.status.SECOND_LIVE) {
            if(this.currentIndex !== 5) {
                return null
            } else if(results.first && results.first != "" && results.first.substring(5,6) !== "-") {
                this.currentStatus = this.status.FIRST_LIVE
                this.currentIndex = 0
            } else {
                this.currentStatus = this.status.FIRST_BREAK
            }
        } else if(this.currentStatus === this.status.FIRST_BREAK) {
            if(results.first && results.first != "" && results.first.substring(5,6) !== "-") {
                this.currentStatus = this.status.FIRST_LIVE
                this.currentIndex = 0
            } else {
                return null
            }
        } else if(this.currentStatus === this.status.FIRST_LIVE) {
            if(this.currentIndex !== 1) {
                return null
            } else if(results.lastTwo && results.lastTwo != "" && results.lastTwo.substring(1,2) !== "-") {
                this.currentStatus = this.status.PARTIAL_LIVE
                this.currentIndex = 0
            } else {
                this.currentStatus = this.status.PARTIAL_BREAK
            }
        } else if(this.currentStatus === this.status.PARTIAL_BREAK) {
            if(results.lastTwo && results.lastTwo != "" && results.lastTwo.substring(1,2) !== "-") {
                this.currentStatus = this.status.PARTIAL_LIVE
                this.currentIndex = 0
            } else {
                return null
            }
        } else if(this.currentStatus === this.status.PARTIAL_LIVE) {
            if(this.currentIndex !== 5) {
                return null
            } else {
                this.currentStatus = this.status.FINISHED
            }
        } else {
            return null // already finished, do nothing
        }
    
        return this.currentStatus
    }
    
    getNextNumber = (results) => {
        if(this.currentStatus === this.status.FIFTH_LIVE_1) {
            if(this.currentIndex === 50) return null // already finished, fail fast
            this.setState({head: "5th Prizes", number: 100})
            return results.fifth[this.currentIndex++]
        } else if(this.currentStatus === this.status.FIFTH_LIVE_2) {
            if(this.currentIndex === 100) return null
            this.setState({head: "5th Prizes", number: 100})
            return results.fifth[this.currentIndex++]
        } else if(this.currentStatus === this.status.FORTH_LIVE) {
            if(this.currentIndex === 50) return null
            this.setState({head: "4th Prizes", number: 50})
            return results.forth[this.currentIndex++]
        } else if(this.currentStatus === this.status.THIRD_LIVE) {
            if(this.currentIndex === 10) return null
            this.setState({head: "3rd Prizes", number: 10})
            return results.third[this.currentIndex++]
        } else if(this.currentStatus === this.status.SECOND_LIVE) {
            this.setState({head: "2nd Prizes", number: 5})
            if(this.currentIndex === 5) return null
            return results.second[this.currentIndex++]
        } else if(this.currentStatus === this.status.FIRST_LIVE) {
            this.setState({head: "1st Prize", number: 1})
            if(this.currentIndex === 1) return null
            this.currentIndex++
            return results.first
        } else if(this.currentStatus === this.status.PARTIAL_LIVE) {
            if(this.currentIndex === 5) return null
            this.currentIndex++
            if(this.currentIndex === 1) {
                this.setState({head: "Front 3 Digits Prizes", number: 2})
                return results.frontThree[0]
            }
            if(this.currentIndex === 2) {
                this.setState({head: "Front 3 Digits Prizes", number: 2})
                return results.frontThree[1]
            }
            if(this.currentIndex === 3) {
                this.setState({head: "Last 3 Digits Prizes", number: 2})
                return results.lastThree[0]
            }
            if(this.currentIndex === 4) {
                this.setState({head: "Last 3 Digits Prizes", number: 2})
                return results.lastThree[1]
            }
            if(this.currentIndex === 5) {
                this.setState({head: "Last 2 Digits Prize", number: 1})
                return results.lastTwo
            }
        } else {
            return null // drawing finished or just init, do nothing
        }
    }
    

    fetchStatus = async () => {
        const data = await fetch("/api/v1/status")
        return await data.json()
    }

    fetchResults = async(liveId) => {
        const data = await fetch(`/api/v1/results/${liveId}`)
        return await data.json()
    } 

    fetchAndRender = async() => {
        if(this.currentStatus === this.status.FINISHED) {
            this.setState({poc: "... See you next drawing ...", head: "Thank you for joining!"})
            return
        }
        const result = this.getNextNumber(this.state.number_data)
        if(result) {
            this.setQ();
            this.setState({poc: result})
            if((this.currentStatus === this.status.PARTIAL_LIVE) && ((this.currentIndex === 1) || (this.currentIndex === 2))){ // front 3
                this.FrontThreePrize(this.state.poc);
            }
            else if((this.currentStatus === this.status.PARTIAL_LIVE) && ((this.currentIndex === 3) || (this.currentIndex === 4))){// last 3
                this.LastThreePrize(this.state.poc);
            }
            else if((this.currentStatus === this.status.PARTIAL_LIVE) && (this.currentIndex === 5)){ //last 2
                this.LastTwoPrize(this.state.poc);
            }else{
                this.ShowNumber(this.state.poc);
            }
            return
        }
        const statusData = await this.fetchStatus()
        this.setState({full_data: statusData})

        console.log(statusData)
        
        if(statusData.liveId) {
            const results = await this.fetchResults(statusData.liveId)
            this.setState({number_data: results})
            console.log(results)
        }

        this.nextStatus = this.setNextStatus(this.state.full_data, this.state.number_data)
        // TODO
        if(this.nextStatus === this.status.COUNT_DOWN) {
            // this.setState({poc: "counting down"})
            return <CountdownTimer then={moment(this.state.full_data.nextLive)} timeFormat="MM DD YYYY, h:mm a"/>
        }
        if(this.nextStatus === this.status.WAITING_LIVE_ID) {
            // Show Rule Page
            // this.setState({poc: "lottery drawing will be starting soon..."})
            return <RulePage/>
        }
        if(this.nextStatus === this.status.FIFTH_BREAK || this.nextStatus === this.status.FORTH_BREAK || 
            this.nextStatus === this.status.THIRD_BREAK || this.nextStatus === this.status.SECOND_BREAK || 
            this.nextStatus === this.status.FIRST_BREAK || this.nextStatus === this.status.PARTIAL_BREAK) {
            // this.setState({poc: "waiting for next prize"})
            return <RulePage/>
        }
    }

    ShowPage = () => {
        console.log(this.nextStatus)
        let count = null;
        let wait = null;
        if(this.currentStatus === this.status.COUNT_DOWN){
            count = this.nextStatus
            console.log("if count: "+count)
            return <CountdownTimer then={moment(this.state.full_data.nextLive)} timeFormat="MM DD YYYY, h:mm a"/>
        }else if(this.currentStatus === this.status.WAITING_LIVE_ID){
            wait = this.nextStatus
            console.log("if wait: "+wait)
            return <RulePage/>
        }else if(this.nextStatus === this.status.FIFTH_BREAK || this.nextStatus === this.status.FORTH_BREAK || 
            this.nextStatus === this.status.THIRD_BREAK || this.nextStatus === this.status.SECOND_BREAK || 
            this.nextStatus === this.status.FIRST_BREAK || this.nextStatus === this.status.PARTIAL_BREAK){
            return <RulePage/>
        }else if(this.nextStatus === this.status.FIFTH_LIVE_1 || this.nextStatus === this.status.FIFTH_LIVE_2 || 
            this.nextStatus === this.status.FORTH_LIVE || this.nextStatus === this.status.THIRD_LIVE || 
            this.nextStatus === this.status.SECOND_LIVE || this.nextStatus === this.status.FIRST_LIVE ||
            this.nextStatus === this.status.PARTIAL_LIVE){
            return this.ShowLottery(this.state.show1,this.state.show2,this.state.show3,this.state.show4,this.state.show5,this.state.show6)
        }else if(this.nextStatus === this.status.FINISHED){
            return this.ShowFinish()
        }else{
            if(count){
                console.log("if count: "+count)
                return <CountdownTimer then={moment(this.state.full_data.nextLive)} timeFormat="MM DD YYYY, h:mm a"/>
            }else if(wait){
                console.log("else wait: "+wait)
                return <RulePage/>
            }else{
                console.log("else null")
                console.log("else null count: "+count)
                console.log("else null wait: "+wait)
                return <LinearProgress/>
            }
        }
        console.log(count)
    }

    componentDidMount() {
        setInterval(this.fetchAndRender, 7000)
    }


    render() {

        return (
            <div>
                {/* <h1 className="lead">{this.state.head}</h1> */}
                {/* <h1>{this.state.poc}</h1> */}
                <Header/>
                {this.ShowPage()}
            </div>
        )
    }
}

export default DrawPage;


