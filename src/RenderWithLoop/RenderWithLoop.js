import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  producList = [
    {
      id: 1,
      name: "black car",
      price: 10000,
      img: "./carbasic/products/xe_den.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 10000,
      img: "./carbasic/products/xe_do.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 10000,
      img: "./carbasic/products/xe_xam.jpg",
    },
    {
      id: 4,
      name: "blue car",
      price: 10000,
      img: "./carbasic/products/xe_xanh.jpg",
    },
  ];

  renderTable = () => {
    //Cách 1:
    //   let mangTrComponent = [];
    //   for (let index = 0; index < this.producList.length; index++) {
    //     let product = this.producList[index];
    //     //Đối tượng jsx (có thể console.log để kiểm tra)
    //     //console.log(<tr></tr>)
    //     let trJSX = (
    //       <tr key={index}>
    //         <td>{product.id}</td>
    //         <td>{product.name}</td>
    //         <td>{product.price}</td>
    //         <td>
    //           <img style={{ width: "100px" }} src={product.img} alt=""></img>
    //         </td>
    //         <td></td>
    //       </tr>
    //     );
    //     mangTrComponent.push(trJSX);
    //   }
    //   return mangTrComponent;
    // };

    //Cách 2: DÙng map
    let mangTrComponent = this.producList.map((product, index) => {
      return (
        <tr>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img src={product.img} style={{ width: "160px" }}  alt="" />
          </td>
          <td></td>
        </tr>
      );
    });
    return mangTrComponent;
  };
  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
              <th />
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
