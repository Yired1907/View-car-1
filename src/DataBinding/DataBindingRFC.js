import React from 'react'

export default function DataBindingRFC() {
  const name = "Quí Nguyễn";
  const school = "CKC";
  const student ={
    name: 'Quí Nguyễn',
    age: 20
  }
  const InforYi = () => {
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
  return (
    <div>
      <hr />
      <h1>React function component data binding</h1>
      <h1 className="text-success">{name}</h1>
      <h1>
        Name: {student.name} Age: {student.age} School: {school}
      </h1>
      {InforYi()}
    </div>
  );
}