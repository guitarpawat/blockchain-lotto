import React, { Component } from "react";
import './drawPage.css';
import CountdownTimer from './countdownTimer';
import FifthPrize from './fifthPrize';
import Header from '../headerComponents/header.js';
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


let j = null;
let Lottery = new Object();
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
            lottery: []
        }

    }

    componentDidMount() {
        console.log("111")
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
                        // if (this.state.full_data.isLive){
                        axios
                            // 5e707e43068877ec5e53fa55
                            // +this.state.full_data.liveId
                            .get("http://localhost:3001/api/v1/results/5e707e43068877ec5e53fa55")
                            .then(res => {
                                console.log(res.data)
                                const number_data = res.data;
                                this.setState(
                                    {
                                        number_data: number_data,
                                    })
                                console.log("222")
                            })
                    }
                    // }
                );

                //  console.log("nextLive: "+this.state.nextLive);          

            })


            .catch(err => console.log(err));

    }

    GetData = (data) => {


        let i = 0;
        j = 0;
        // let prizeF = [this.state.number_data.first]
        // let prizeT = [this.state.number_data.lastTwo]
        // let prize = [Lottery.fifth, //0
        //             this.state.number_data.forth, //1
        //             this.state.number_data.third, //2
        //             this.state.number_data.second, //3
        //             this.state.number_data.frontThree, //4
        //             this.state.number_data.lastThree, //5
        //             prizeF, //6
        //             this.state.number_data.besideFirst, //7
        //             prizeT] //8
        //             console.log()
        const interval = setInterval(() => {
            this.setQ();
            //รางวัลเลขท้าย2ตัว
            if ((j == 8)) {
                this.LastTwoPrize(data[i])
                setTimeout(() => {
                    if (i == 0) {
                        j += 1;
                        this.setState({
                            name: j
                        })

                    }
                    clearInterval(interval);
                }, 10000)
            }
            else {
                if (j == 5) {
                    // รางวัลเลขท้าย3ตัว
                    this.LastThreePrize(data[i])
                } else {
                    //รางวัลอื่นๆ
                    this.OtherPrize(data[i]);
                }

                i += 1;
                if (i === data.length) {
                    this.setState({
                        title: i,
                        name: j,
                        rank: data.length
                    })
                    j += 1;
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
        console.log("lastTwoPrize");
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
        }, 10000)
        setTimeout(() => {
            this.setState({
                show5: data.charAt(1),
            })
        }, 11000)
        setTimeout(() => {
            this.setState({
                show6: data.charAt(2)
            })
        }, 12000)
        console.log(data);
    }


    OtherPrize = (data) => {
        setTimeout(() => {
            this.ShowNumber(data);
        }, 10000)
        console.log(data)

    }

    ShowNumber = (num) => {
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
        if (typeof show !== 'number')
            return (
                <div className="col-2">
                    <img className="image" src={numQ} alt={'num' + show} id="num_size" />
                </div>
            )
        return (
            <div className="col-2">
                <img className="image" src={images[show]} alt={images[images[show]]} id="num_size" />
            </div>
        )
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
                <div className="col ltr-txt">
                    {texts[show]}
                </div>
            </div>
        )
    }

    ShowLottery = () => {
        return (
            <div>
                <div className="container">
                    {this.showTitle(this.state.name)}
                </div>

                <div className="container">
                    <DrawingCircle />
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
        )
    }

    AddArray = (data) => {
        let dataArr = [];
        let arr = data;
        let num = arr.toString().split(',');
        num.forEach(function (obj) {
            dataArr.push(obj);
        });
        //   console.log(dataArr);
        return dataArr;
    }


    render() {
        let { number_data, nextLive } = this.state
        console.log("num_render: " + number_data)
        console.log("nextLive: " + nextLive);
        console.log("333")


        if (number_data.fifth != (undefined || null)) {
            if (Lottery.fifth = this.AddArray(number_data.fifth)) {
                console.log(Lottery)
                // this.GetData(Lottery.fifth)
            }
            // Lottery.fifth = this.AddArray(number_data.fifth);

        }

        return (

            <div>
                <Header />
                {number_data.forth ? this.ShowLottery() : <CountdownTimer then={nextLive} timeFormat="MM DD YYYY, h:mm a" />}
            </div>

        );
    }
}

export default DrawPage;


