import React, { Component } from 'react'
import LOGO from './img/air-jordan-1-retro-high-og-shoes-fTHb42.jpeg'
import LOGO2 from './img/air-jordan-1-zoom-cmft-2-valentines-day-shoes-pcNKwH.jpeg'
import LOGO3 from './img/f411a3ec-39b7-490e-b2c8-335264adb054.webp'
import './App.css'
export default class classComponent extends Component {


    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    handleDecrement = () => {
        this.setState(prevState => {
            if (prevState.count > 0) {
            return {
                count: prevState.count - 1
            }
        } else {
            return{
            count: 0
        }
        }
        });
    }

    handleIncrement = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    handleCart = () => {
        alert( this.state.count+" " + this.props.item + " " + 'added');
    };

  render() {
    return (
      <div className='app'>
      <h1 className='title'>SHOPPING BAG</h1>
      <table  width={1000}>
      <table border={1}>
      <tbody>
      <tr>
      <td width={500}><img src={LOGO} alt={this.props.item}height="10%" width="30%"></img></td>
      
      <td>
      <h3>{this.props.item}</h3>
      <p>{this.props.desc}</p>
      </td>
      <td>
      <button onClick={this.handleDecrement}>-</button>
      {this.state.count}
      <button onClick={this.handleIncrement}>+</button>
      </td>
      <td>INR 10000{this.props.price} /-</td>
      
      </tr>
      </tbody>
      </table>
          
          <table border={1}>
          <tbody>
          <tr>
          <td width={500}><img src={LOGO2} alt={this.props.item}height="10%" width="30%"></img></td>
          <td>
          <h3>{this.props.item}</h3>
          <p>{this.props.desc}</p>
          </td>
          <td>
          <button onClick={this.handleDecrement}>-</button>
          {this.state.count}
          <button onClick={this.handleIncrement}>+</button>
          </td>
          <td>INR 10000{this.props.price} /-</td>
          
          </tr>
          </tbody>
          </table>
                <table border={1}>
                <tbody>
                <tr>
                <td width={500}><img src={LOGO3} alt={this.props.item}height="10%" width="30%"></img></td>
                <td>
                <h3>{this.props.item}</h3>
                <p>{this.props.desc}</p>
                </td>
                <td>
                <button onClick={this.handleDecrement}>-</button>
                {this.state.count}
                <button onClick={this.handleIncrement}>+</button>
                </td>
                <td>INR 10000{this.props.price} /-</td>
                
                </tr>
                </tbody>
                </table>
                </table>
      </div>
    )
  }
}