import React, { Component } from "react";
import "./Chonxechitiet.css";
import DataTransfer from "../Data/arrayFeatures.json";
import DataWheel from "../Data/wheels.json";

export default class Chonxechitiet extends Component {
      //Tạo ra state chứa thông tin xe thay đổi

      state = {
        carCurrent: {
            "id": 4,
            "title": "Rallye Red",
            "type": "Metallic",
            "img": "./images/icons/icon-red.jpg",
            "srcImg": "images-red/images-red-1/",
            "color": "Red",
            "price": "22,550",
            "engineType": "In-Line 4-Cylinder",
            "displacement": "1996 cc",
            "horsepower": "158 @ 6500 rpm",
            "torque": "138 lb-ft @ 4200 rpm",
            "redline": "6700 rpm",
            "wheels": [
              {
                "idWheel": 1,
                "srcImg": "images-red/images-red-1/"
              },
              {
                "idWheel": 2,
                "srcImg": "images-red/images-red-2/"
              }
            ]
          }
    }

    //Viết phương thức xử lý đổi xe = cách set lại giá trị mới cho carCurrent từ carItem
    changeCar = (newCar) => {
        this.setState({
            carCurrent:newCar
        })
        //fix lỗi nhấn liên tiếp bị lỗi ko chạy dc9
        if (typeof Node === 'function' && Node.prototype) {
          const originalRemoveChild = Node.prototype.removeChild;
          Node.prototype.removeChild = function (child) {
            if (child.parentNode !== this) {
              if (console) {
                console.warn('Cannot remove a child from a different parent', child, this);
              }
              return child;
            }
            return originalRemoveChild.apply(this, arguments);
          };
        
          const originalInsertBefore = Node.prototype.insertBefore;
          Node.prototype.insertBefore = function (newNode, referenceNode) {
            if (referenceNode && referenceNode.parentNode !== this) {
              if (console) {
                console.warn(
                  'Cannot insert before a reference node from a different parent',
                  referenceNode,
                  this
                );
              }
              return newNode;
            }
            return originalInsertBefore.apply(this, arguments);
          };
        }
    } 

    
  renderIcon = () => {
    return DataTransfer.map((item, index) => {
      return (
        
        <div onClick={()=>{this.changeCar(item)}} style={{cursor:'pointer'}} className="crystal row mt-1 border border-color-default m-3" key={index}>
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "80px" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10 align-self-center">
            <h3 className="px-3">{item.title}</h3>
            <span className="px-3">{item.type}</span>
          </div>
        </div>
      );
    });
  };

  changeWheel = (newWheel) => {
    //Tìm trong state hiện tại (this.state.carCurrent.wheels) 
    let obWheel = this.state.carCurrent.wheels.find(item => item.idWheel === newWheel.idWheel);
    if(obWheel!==-1){
        //lấy ra source hình ảnh từ this.state.carCurrent.wheels
        this.setState({
            carCurrent:{...this.state.carCurrent,srcImg:obWheel.srcImg}
        })
    }
     //fix lỗi nhấn liên tiếp bị lỗi ko chạy dc
     if (typeof Node === 'function' && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.warn('Cannot remove a child from a different parent', child, this);
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      };
    
      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.warn(
              'Cannot insert before a reference node from a different parent',
              referenceNode,
              this
            );
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      };
    }
  }
  renderWheel = () => {
    return DataWheel.map((item, index) => {
      return (
        <div className="crystal row mt-1 border border-color-default m-3" onClick={()=>{this.changeWheel(item)}} key={index}>
          <div className="col-2">
            <img
              className="p-1"
              style={{ width: "90px" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10 d-flex flex-colum align-items-center">
            <span className="p-3">{item.title}</span>
          </div>
        </div>
      );
    });
  };

  componentDidMount = () => {
    let tagScript =  document.createElement('script');
    tagScript.src = 'https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/2.4.1/js-cloudimage-360-view.min.js';

    document.querySelector('#appendScript').appendChild(tagScript);
  };

  componentDidUpdate = () => {
    //Hàm này chạy sau khi state thay đổi (Tự kích hoạt sau render)
    //Lưu ý: Không được phép setState tại component này vì infinity loop

    //clean ảnh cũ
    document.querySelector('#carCurrent').innerHTML = '';
    let tagScript =  document.createElement('script');

   tagScript.src =  'https://cdn.scaleflex.it/filerobot/js-cloudimage-360-view/v2.0.0.lazysizes.min.js';

    //clear script cũ trước khi append script mới của thư viện vào
    document.querySelector('#appendScript').innerHTML =  "";
    document.querySelector('#appendScript').appendChild(tagScript);
  }

  render() {
    return (
      <div className="container-fluid bg-color">
       
        <div className="row">
          <div className="col-6">
            <div className="model"  style={{ width: '100%' }}>
              {/* <img
                style={{ width: "100%" }}
                src="./images/images-black/images-black-1/civic-1.jpg"
                alt="civic-black"
              /> */}
              <div
                id="carCurrent" 
                style={{ minWidth: '100%' }}
                className="cloudimage-360"
                data-folder={ "./images/" + this.state.carCurrent.srcImg}
                data-filename="civic-{index}.jpg"
                data-amount="8"
              ></div>
            </div>
            <div id="appendScript">

            </div>
            <div className="mt-2">
              <h5 className="card-header text-default">Exterior color</h5>

              <table className="table border border-color-light" border="1">
                <thead>
                  <tr>
                    <th>{this.state.carCurrent.title}</th>
                    <th>{this.state.carCurrent.color}</th>
                  </tr>
                  <tr className="price">
                    <th>Price</th>
                    <th>${this.state.carCurrent.price}</th>
                  </tr>
                  <tr>
                    <th>Engine Type</th>
                    <th>{this.state.carCurrent.engineType}</th>
                  </tr>
                </thead>
              </table>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-left">
              <h5 className="card-header text-primary">Exterior color</h5>
              <div className="container-fluid">{this.renderIcon()}</div>
            </div>
            <div className="card text-left mt-3">
              <h5 className="card-header text-primary">Wheels</h5>
              <div className="container-fluid">{this.renderWheel()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
