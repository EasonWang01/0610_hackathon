import React, { Component } from 'react';
import './App.css';

 class Pathology extends Component{
	constructor() {
    super();
  }
  render() {
    return (
    <div >
      <div style={{color: '#8a888b', margin: '10px'}}>RENAL PROFILE</div>
      <div style={{color: '#bdbbbe', fontSize: '10px', marginLeft: '10px'}}>COLLECTED</div>
      <div style={{color: '#bdbbbe', fontSize: '10px', marginLeft: '10px', float: 'right', marginTop: '-20px', marginRight: '10px'}}>10:00 - 10 JUL - YESTERDAY</div>
       <div style={{width: '90%', height: '30px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '5px', padding: '5px', lineHeight: '7px'}}>
          <div style={{marginTop: '10px'}}>Creatinite</div>
          <div style={{marginTop: '-7px', float: 'right', marginRight: '45px'}}>2115</div><span style={{fontSize: '6px', float: 'right', marginTop: '-5px'}}>umol/L</span>
      </div>

       <div style={{width: '90%', height: '30px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '5px', padding: '5px', lineHeight: '7px'}}>
          <div style={{marginTop: '10px'}}>Sodium</div>
          <div style={{marginTop: '-7px', float: 'right', marginRight: '45px'}}>8</div><span style={{fontSize: '6px', float: 'right', marginTop: '-5px'}}>umol/L</span>
      </div>
      <div style={{width: '90%', height: '30px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '5px', padding: '5px', lineHeight: '7px'}}>
          <div style={{marginTop: '10px'}}>Potassium</div>
          <div style={{marginTop: '-7px', float: 'right', marginRight: '45px', color: 'red'}}>17</div><span style={{fontSize: '6px', float: 'right', marginTop: '-5px'}}>umol/L</span>
      </div>

      <div style={{width: '90%', height: '30px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '5px', padding: '5px', lineHeight: '7px'}}>
          <div style={{marginTop: '10px'}}>eGFR(MDRD)</div>
          <div style={{marginTop: '-7px', float: 'right', marginRight: '45px'}}>10</div><span style={{fontSize: '6px', float: 'right', marginTop: '-5px'}}>mL/min</span>
      </div>

      <div style={{width: '90%', height: '30px', border: '1px solid #e5e4e5', margin: '0 auto', marginTop: '5px', padding: '5px', lineHeight: '7px'}}>
          <div style={{marginTop: '10px'}}>Urea</div>
          <div style={{marginTop: '-7px', float: 'right', marginRight: '45px'}}>9</div><span style={{fontSize: '6px', float: 'right', marginTop: '-5px'}}>mmol/L</span>
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

 export default Pathology