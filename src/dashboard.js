import React from 'react'
import './dashboard.css';
import 'bootstrap-4-grid/css/grid.min.css';
import Navbarr from './navbarr';



class dashboard extends React.Component{
   
    render(){
        return(
          <div className="bootstrap-wrapper">
           
          <div className="app-container container">
            <div className="row">
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <Navbarr/>
                 
              </div>
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <ul>
                  <li><button>Share</button></li>
                  <li><button>Export to PDF</button></li>
                </ul>          
              </div>
            </div>
            <div className="row">
              <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                <h4>Panel Bar Container</h4>
                <ol>
                  <li>In Patient Bill</li>
                  <li>Out Patient Bill</li>
                </ol>
              </div>
              <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
                <div className="row">
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h4>Inpatient Chart Container</h4>
                  </div>
               
                  <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h4>Out patient Chart Container</h4>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h4>Grid Container</h4>
                  </div>
                </div>
              </div>
            </div>
            <h4 style={{ display: 'none' }}>Dialog Shown/Hidden with Logic</h4>
          </div>
          </div>
        );
    }

}



export default dashboard;