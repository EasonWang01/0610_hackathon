import React, { Component } from 'react';
import './App.css';
import contract01 from './contract01.js' //引入contract
var Web3 = require('web3');
var web3 = new Web3();

 class Overview extends Component{
	constructor() {
    super();
  }
  componentWillMount() {
    console.log(web3);
    window.tokenContract = web3.eth.contract(contract01.ABI).at(contract01.address);
    window.web3 = web3;
    web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545')); //指定為RPC server的位置
    this.setState({ accounts: web3.eth.accounts });

    web3.eth.defaultAccount = web3.eth.accounts[0]
  }
  render() {
    return (
    <div >
       <div style={{width: '90%', height: '100px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '10px', padding: '10px'}}>
          <div style={{marginTop: '10px'}}>aspirin</div>
          <div style={{color: '#b0d9cf'}}>Reaction</div>
          <div >cause</div>
          <div style={{float: 'right'}}>
          <div style={{color: '#b0d9cf',marginTop: '-45px'}}>Severity</div>
          <div >severe</div>
        </div>
      </div>

      <div style={{width: '90%', height: '100px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '10px', padding: '10px'}}>
        <div>Personal Details</div>
        <div style={{color: '#bdbbbe'}}>NHS Number</div>
        <div style={{color: '#bdbbbe'}}>Specialty</div>
        <div style={{color: '#bdbbbe'}}>Consultant</div>

        <div style={{float: 'right'}}>
          <div style={{color: '#b0d9cf',marginTop: '-65px'}}>299-111-249</div>
          <div >Nephrology</div>
          <div >KJ orm</div>
         </div>
      </div>

      <div style={{width: '90%', height: '70px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '10px', padding: '10px'}}>
        <div>Diagnoses</div>
        <div style={{color: '#bdbbbe'}}>ACUTE DIAGNOSES</div>
        <div style={{color: '#bdbbbe'}}>Typhoid fever</div>

        <div style={{float: 'right'}}>      
          <div style={{marginTop: '-25px'}}>10 JUL 2017</div>
         </div>
      </div>

      <div style={{textAlign: 'center', fontSize: '8px', marginTop: '15px'}}>STREAMS ID: 2884</div>

      <div style={{borderTop: '1px solid #e5e4e5', marginTop: '5px', display: 'flex', justifyContent:  'space-around', paddingTop: '10px'}}>
        <div><i  style={{fontSize: '30px'}} className="fa fa-search bottomIcon" aria-hidden="true"></i></div>
        <i  style={{fontSize: '30px'}} className="fa fa-bell-o bottomIcon" aria-hidden="true"></i>
        <i  style={{fontSize: '30px'}} className="fa fa-cog bottomIcon" aria-hidden="true"></i>


      </div>

     <div style={{marginTop: '0px', display: 'flex', justifyContent:  'space-around', marginLeft: '10px'}}>
        <div style={{marginLeft: '-5px'}}>Search</div>
        <div>Alert</div>
        <div>Setting</div>
      </div>
    </div>

    )
  }
 }

 export default Overview

