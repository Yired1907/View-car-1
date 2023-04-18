import React, { Component } from 'react'
// import HeaderDemo from '../BaitapchiaLayout/HeaderDemo';

export default class DataBinding extends Component {
  name = "Thanh Quí"; // Tạo thuộc tính
  date = "1907";

  //Thuộc tính object student
  student ={
    name: 'Quí Nguyễn',
    age: 20
  }

  game ={
    name: 'LOL',
    age: 6
  }


  //Binding phương thức (Hàm của lớp đối tượng)
renderImage =() => {
    return <img src="https://i.ex-cdn.com/mgn.vn/files/content/2022/09/21/master-yi-1-1823.jpg" alt="master-yi-1-1823.jpg"/>
}

renderMultiComponent = () => {
    return (
      <nav className="nav justify-content-center">
        <a className="nav-link active" href="#"></a>
        <a className="nav-link" href="#">Link </a>
        <a className="nav-link disabled" href="#">Disabled link</a>
      </nav>
    );
}

renderInforYi = () => {
  const virus ={
    id: 'covid19',
    name: 'corona',
    img: 'https://i.ex-cdn.com/mgn.vn/files/content/2022/09/21/master-yi-1-1823.jpg',
    alias: 'master'
  }

  return (
    <div className="card text-white bg-primary w-50 h-50">
      <img className="card-img-top" src={virus.img}/>
      <div className="card-body">
        <h4 className="card-title">{virus.name}</h4>
        <p className="card-text">{virus.alias}</p>
      </div>
    </div>
  );
}


  render() {
// BIến của hàm render => không dc sử đụng cho hàm khác
const ss = 'Yired';

    return (
      <div>
        <h1>React class component data binding</h1>
        <h2 className="text-danger" id="title">
          hello {this.name} - biệt danh: {ss} - {this.date}
        </h2>
        <h2 id="title">name: {this.student.name} - age: {this.student.age}</h2>

        <h2 id="title">Game: {this.game.name} {ss} - age: {this.game.age}</h2>
       
        <h3>Binding function</h3>
        {this.renderImage()}
        {this.renderMultiComponent()}
        {this.renderInforYi()}
      </div>
    );
  }
}
