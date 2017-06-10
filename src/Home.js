import React, { Component } from 'react';
import './App.css';

 class Home extends Component{
	constructor() {
		super();
		this.state = {
      overviewTab: true
    }
  }
  clickoverview() {
    this.props.history.push("/overview");
    this.setState({overviewTab: true})
    this.setState({pathologyTab: false})
  }

  clickpathology() {
    this.props.history.push("/pathology");
    this.setState({overviewTab: false})
    this.setState({pathologyTab: true})
  }

   render() {
		return (
      <div>
          <div style={{width: '100%', height: '200px', background: '#4686a4'}}>
            <i style={{color: 'white', padding: '20px'}} className="fa fa-arrow-left" aria-hidden="true"></i>
            <div style={{color: 'white', textAlign: 'center', paddingTop: '20px',fontSize: '20px', marginTop: '-60px'}}>Patient Profile</div>
            
            <div style={{padding: '20px'}}>
            <i style={{color: 'white', marginRight: '10px'}} className="fa fa-venus" aria-hidden="true"></i><span style={{color: 'white'}}>DORYPHEB</span> <br/>
            <i style={{color: 'white', marginRight: '10px'}} className="fa fa-user-circle" aria-hidden="true"></i><span style={{color: 'white'}}>DOB 01 DEC 1954 (61yr) -- MRN</span> <br/>
            <i style={{color: 'white',  marginRight: '10px'}}  className="fa fa-map-marker" aria-hidden="true"></i><span  style={{color: 'white'}}>12-WEST-02</span>

            <i style={{float: 'right'}} className="fa fa-star-o" aria-hidden="true"></i>


            </div>
              <div style={{textAlign: 'center', marginTop: '20px'}}>
              <span onClick={() => this.clickoverview()} className={this.state.overviewTab ? "tab" : ''} style={{color: 'white', width: '50%', display: 'inline-block',height: '30px', marginTop: '-20px', paddingTop: '10px'}}>Overview</span>
              <span onClick={() => this.clickpathology()} className={this.state.pathologyTab ? "tab" : ''} style={{color: 'white', width: '50%', display: 'inline-block',height: '30px',  marginTop: '-20px', paddingTop: '10px'}}>Pathology</span>
            </div>
          </div>
        </div>

    )
  
 }
 }

export default Home;