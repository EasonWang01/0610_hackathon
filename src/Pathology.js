import React, { Component } from 'react';
import './App.css';

 class Pathology extends Component{
	constructor() {
    super();
  }
  componentDidMount() {
    window.Highcharts.chart('container', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Potassium'
    },
    subtitle: {
        text: 'Lab reference range 3.5-5.1 mmol/L'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'mmol/L'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Historical Results',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 20.5, 16.2, 20.5, 20.3, 18.3, 13.9, 9.6]
    }]
});
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
          <div style={{marginTop: '10px'}}>eGFR(MDRD)</div>``
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


      <div id="container" style={{minWidth: '310px', height:' 400px', margin: '0 auto'}}></div>

    </div>

    )
  }
 }

 export default Pathology