import React, { Component } from "react";
import './drawPage.css';
import CountdownTimer from './countdownTimer';
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
            rank: undefined
        }

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
                                // console.log(number_data.fifth)
                                if(number_data.fifth !== undefined){
                                    if(Lottery.fifth[50].charAt[5] !== ("-" || undefined)){
                                        this.GetData();   
                                        // check if ที่นี่ให้หมดทุก case แล้วแก้ GetData                                 
                                    }
                                }
                            })                                                     
                        }                    
                    // }
                );                
                //  console.log("nextLive: "+this.state.nextLive);          
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.fetchData()
        // if(this.state.number_data.fifth !== undefined){
        //     if(Lottery.fifth[50].charAt[5] !== ("-" || undefined)){
        //         this.GetData();   
        //         // check if ที่นี่ให้หมดทุก case แล้วแก้ GetData                                 
        //     }
        // }
    }

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
            if((prize[j][i] === "-") || (prize[j][i] === undefined)){
                "fetch in get"
                this.fetchData()
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
        if (show === undefined){
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
            // <div className="col ltr-txt">
                <div className="col ltr-txt">
                    {texts[show]}
                </div>
            // </div>
        )
    }

    ShowLottery = (num1, num2, num3, num4, num5, num6) => {
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
                            rank: {this.state.title} of {this.state.rank}
                        </div>
                    </div>
                </div>
                {/* {this.fetchData()} */}
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
        
        if(number_data.fifth !== undefined){
            if (number_data.fifth.toString().substring(5,6) !== ('-' || undefined || null)) {
                //ออกครบ6หลักก่อน ค่อยaddArray แล้วโชว์
                Lottery.fifth = this.AddArray(number_data.fifth)
                if (number_data.fifth.toString().substring(355,356) !== ('-' || undefined || null)) {
                    Lottery.fifth = this.AddArray(number_data.fifth)
                }
    
            }
        }       
        if(number_data.forth !== undefined){
            if (number_data.forth.toString().substring(5,6) !== ('-' || undefined || null)) {
                Lottery.forth = this.AddArray(number_data.forth)
            }
        }
        if(number_data.third !== undefined){
            if(number_data.third.toString().substring(5,6) !== ('-' || undefined || null)){
                Lottery.third = this.AddArray(number_data.third)
            }
        } 
        if(number_data.second !== undefined){
            if(number_data.second.toString().substring(5,6) !== ('-' || undefined || null)){
                Lottery.second = this.AddArray(number_data.second)
            }
        }
        if(number_data.frontThree !== undefined){
            if(number_data.frontThree.toString().substring(2,3) !== ('-' || undefined || null)){
                Lottery.frontThree = this.AddArray(number_data.frontThree)
            }
        }
        if(number_data.lastThree !== undefined){
            if(number_data.lastThree.toString().substring(2,3) !== ('-' || undefined || null)){
                Lottery.lastThree = this.AddArray(number_data.lastThree)
            }
        }
        if(number_data.first !== (undefined || null)){
                Lottery.first = number_data.first
        }
        if(number_data.besideFirst !== undefined){
            if(number_data.besideFirst.toString().substring(5,6) !== ('-' || undefined || null)){
                Lottery.besideFirst = this.AddArray(number_data.besideFirst)
            }
        }        
        if(number_data.lastTwo !== (undefined || null)){
                Lottery.lastTwo = number_data.lastTwo
        }
        
        let show = this.ShowLottery(this.state.show1, this.state.show2, this.state.show3, this.state.show4, this.state.show5, this.state.show6);
        

        return (

            <div>
                <Header />
                {/* Lottery.fifth[50] */}
                {number_data.fifth ?  show: <CountdownTimer then={nextLive} timeFormat="MM DD YYYY, h:mm a" />}
            </div>

        );
    }
}

export default DrawPage;


