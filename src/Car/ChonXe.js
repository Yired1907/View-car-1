import React, { Component } from 'react'

export default class ChonXe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={"./carbasic/products/xe_den.jpg"}
              alt="blackcar"
            />
          </div>
          <div className="col-5">
            <div className="card text-white">
              <div className="btn card-header text-primary"><h5>Exterior Color</h5></div>
              <div className="card-body text-dark">
                <div className="row border border-light pt-2 pb-2 mt-2" onClick={()=>{}} style={{cursor:'pointer'}}>
                    <div className="col-2">
                        <img style={{ width: "100%" }} src={"./carbasic/icons/icon-01.png"} alt="black_icon"/>
                    </div>
                    
                    <div className="col-10">
                        <h3>Crystal Black</h3>
                        <p>Pearl</p>
                    </div>
                </div>
                <div className="row border border-light pt-2 pb-2 mt-2" onClick={()=>{}} style={{cursor:'pointer'}}>
                    <div className="col-2">
                        <img style={{ width: "100%" }} src={"./carbasic/icons/icon-02.png"} alt="red_icon"/>
                    </div>
                    
                    <div className="col-10">
                        <h3>Crystal Red</h3>
                        <p>Pearl</p>
                    </div>
                </div>
                <div className="row border border-light pt-2 pb-2 mt-2" onClick={()=>{}} style={{cursor:'pointer'}}>
                    <div className="col-2">
                        <img style={{ width: "100%" }} src={"./carbasic//icons/icon-03.png"} alt="silver_icon"/>
                    </div>
                    
                    <div className="col-10">
                        <h3>Crystal Silver</h3>
                        <p>Pearl</p>
                    </div>
                </div>
                <div className="row border border-light pt-2 pb-2 mt-2" onClick={()=>{}} style={{cursor:'pointer'}}>
                    <div className="col-2">
                        <img style={{ width: "100%" }} src={"./carbasic//icons/icon-04.png"} alt="blue_icon"/>
                    </div>
                    
                    <div className="col-10">
                        <h3>Crystal Blue</h3>
                        <p>Pearl</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
