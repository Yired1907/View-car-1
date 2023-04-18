import React, { Component } from 'react'
import Child from './Child'
import '../Styding/Styding.css'
export default class Styding extends Component {
  render() {
    const styleText = {
        color: 'pink',
        padding: '16px',
        backgroundColor: 'black'
    }
    return (
      <div>
        <Child/>
       <p className="txt">Đoạn text thuộc dang Styding</p>

       <span style={styleText}>Yi red</span>
    <span style={{
    margin: '15px',
    color: 'white',
    padding: '16px',
    backgroundColor: 'black'
    }}> Nguyễn Phan Thành Quí</span>
      </div>
    )
  }
}
