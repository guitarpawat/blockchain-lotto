import React, { Component } from 'react';
import './checkPage.css';
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import Header from '../headerComponents/header.js';

class CheckPage extends Component {

    state = {
        startDate: new Date()
      };
     
      handleChange = date => {
        this.setState({
          startDate: date
        });
      };

    createListDate = () => {
        let listDate = []
    
        // Outer loop to create parent
        for (let i = 0; i < 10; i++) {
          let children = []
          //Inner loop to create children        
            children.push(<a class="list-group-item list-group-item-action" href="#list-prize-1">{i+1} date</a>)
          //Create the parent and add the children
          listDate.push(<tr>{children}</tr>)
        }
        return listDate
      }

      createCol2thPrize = () => {
        let col2thPrize = []
        let allCol = []
    
          for (let i = 0; i < 5; i++){
                allCol.push(<div className="col">
                            <strong class="card-text fourth-txt">111111</strong>
                        </div>)
          }
          col2thPrize.push(<div className="row">{allCol}</div>)
        
        return col2thPrize
      }

      createCol3thPrize = () => {
        let col3thPrize = []
        let allCol = []
    
          for (let i = 0; i < 5; i++){
                allCol.push(<div className="col">
                            <strong class="card-text fourth-txt">111111</strong>
                        </div>)
          }
          for (let j = 0; j < 2; j++){
          col3thPrize.push(<div className="row">{allCol}</div>)
        }
        
        return col3thPrize
      }

      createCol4thPrize = () => {
        let col4thPrize = []
        let allCol = []
    
        // Outer loop to create parent
        for (let i = 0; i < 10; i++){
                allCol.push(<div className="col">
                            <strong class="card-text fourth-txt">111111</strong>
                        </div>)
        }
        for (let j = 0; j < 5; j++){
            col4thPrize.push(<div className="row">{allCol}</div>)
        }
        return col4thPrize
      }

      createCol5thPrize = () => {
        let col5thPrize = []
        let allCol = []
    
        // Outer loop to create parent
        for (let i = 0; i < 10; i++){
                allCol.push(<div className="col">
                            <strong class="card-text fourth-txt">111111</strong>
                        </div>)
        }
        for (let j = 0; j < 10; j++){
            col5thPrize.push(<div className="row">{allCol}</div>)
        }
        return col5thPrize
      }


    render(){
        return (
            <div>
                <Header/> 
                <div className="row space-top-search">
                    <div class="col-sm-3"></div>                    
                        <form class="form-inline">
                            <input class="form-control mr-sm-2 search-center" type="search" placeholder="Put the number here" aria-label="Search" size="50" maxLength="6"></input>
                            <DatePicker className="space-date"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                            <button class="btn btn-outline-primary my-2 my-sm-0 btn-search-space" type="submit">Search</button>
                        </form>                                            
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col ltr-txt">
                            The Lottery Result
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4 offset-4 date-txt">
                            16th March 2020
                            </div>
                        </div>

                    </div>
                    

                    <div className="container">
                        <div className="row">

                            <div className="col-3">
                                <div class="card text-center">
                                    <div class="card-header head-txt">
                                        THE 1st PRIZE
                                    </div>
                                    <div class="card-body">
                                        <strong class="card-text first-prize">503446</strong>
                                    </div>      
                                    <div class="card-footer text-muted">
                                        6,000,000฿ / 1 prize
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div class="card text-center">
                                    <div class="card-header head-txt">
                                        THE FIRST 3 DIGITS
                                    </div>
                                    <div class="card-body ">
                                        <div className="row">
                                            <div className="col-6">
                                                <strong class="card-text same-line">258</strong>
                                            </div>
                                            <div className="col-6">
                                                <strong class="card-text same-line">726</strong>
                                            </div>
                                        </div> 
                                    </div>      
                                    <div class="card-footer text-muted">
                                        4,000฿ / prizes
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div class="card text-center">
                                    <div class="card-header head-txt">
                                        THE LAST 3 DIGITS
                                    </div>
                                    <div class="card-body ">
                                        <div className="row">
                                            <div className="col-6">
                                                <strong class="card-text same-line">661</strong>
                                            </div>
                                            <div className="col-6">
                                                <strong class="card-text same-line">404</strong>
                                            </div>
                                        </div> 
                                    </div>      
                                    <div class="card-footer text-muted">
                                        4,000฿ / prizes
                                    </div>
                                </div>
                            </div>

                            <div className="col-3">
                                <div class="card text-center">
                                    <div class="card-header head-txt">
                                        THE LAST 2 DIGITS
                                    </div>
                                    <div class="card-body">
                                        <strong className="card-text first-prize">77</strong>
                                    </div>      
                                    <div class="card-footer text-muted">
                                        2,000฿ / prizes
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div class="card text-center">
                            <div class="card-header head-txt">
                                THE 1st PRIZE SIDE
                            </div>
                            <div class="card-body ">
                                <div className="row">
                                    <div className="col-6">
                                        <strong class="card-text same-line">503445</strong>
                                    </div>
                                    <div className="col-6">
                                        <strong class="card-text same-line">503447</strong>
                                    </div>
                                </div> 
                            </div>      
                            <div class="card-footer text-muted">
                                100,000฿ / prizes
                            </div>
                        </div>                     


                        <div class="card text-center">
                            <div class="card-header head-txt">
                                THE 2nd PRIZE
                            </div>
                            <div className="row">
                                <div className="col">
                                    <strong class="card-text same-line">156175</strong>
                                </div>
                                <div className="col">
                                    <strong class="card-text same-line">577151</strong>
                                </div>
                                <div className="col">
                                    <strong class="card-text same-line">759179</strong>
                                </div>
                                <div className="col">
                                    <strong class="card-text same-line">763348</strong>
                                </div>
                                <div className="col">
                                    <strong class="card-text same-line">849691</strong>
                                </div>
                            </div>      
                            <div class="card-footer text-muted">
                                2,000฿ / prizes
                            </div>
                        </div>

                        <div class="card text-center">
                            <div class="card-header head-txt">
                                THE 3rd PRIZE
                            </div>
                            
                            {this.createCol3thPrize()}

                            <div class="card-footer text-muted">
                                2,000฿ / prizes
                            </div>
                        </div>

                        <div class="card text-center">
                            <div class="card-header head-txt">
                                THE 4th PRIZE
                            
                            </div>
                            {this.createCol4thPrize()}

                            <div class="card-footer text-muted">
                                2,000฿ / prizes
                            </div>
                        </div>

                        <div class="card text-center">
                            <div class="card-header head-txt">
                                THE 5th PRIZE
                            </div>
                            {this.createCol5thPrize()}
                            <div class="card-footer text-muted">
                                2,000฿ / prizes
                            </div>
                        </div>

                    </div>

                {/* <div className="container space-top-prize">
                    <div className="row">
                        <div className="col-6">
                            
                            <div id="list-date" class="list-group list-group-mine">
                                    {this.createListDate()}
                            </div>
                        </div>  

                        <div className="col-6 card-hover">
                        <div data-spy="scroll" data-target="#list-date" data-offset="0" class="scrollspy-example">
                            
                            <div className="card ac-margin" id="list-prize-4">
                                <div class="card-header" id="headingOne">
                                <h5 class="mb-0">
                                    <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="flase" aria-controls="collapseOne">
                                    The 1st prize
                                    </button>
                                </h5>
                                </div>

                                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                <div class="card-body">
                                    2 3 4 5 6 7
                                </div>
                                </div>
                            </div>
                        
                        

                            <div class="card ac-margin" id="list-prize-2">
                                <div class="card-header" id="headingTwo">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    The 2nd prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                                <div class="card-body">
                                    3 4 5 6 7 8
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 3rd prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 4th prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 5th prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 6th prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 7th prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 8th prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                            <div class="card ac-margin" id="list-prize-1">
                                <div class="card-header" id="headingThree">
                                <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                                    The 9th prize
                                    </button>
                                </h5>
                                </div>
                                <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                                <div class="card-body">
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                                </div>
                                </div>
                            </div>

                        </div>

                        </div>                        


                    </div> 
                </div> */}
            </div>
            
            
        );
    }
}

export default CheckPage;