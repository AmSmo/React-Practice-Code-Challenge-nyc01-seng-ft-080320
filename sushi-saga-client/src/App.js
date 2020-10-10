import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Momoney from './components/Momoney'
// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    budget: 30,
    eaten: []
  }

  componentDidMount = () => {
   this.getSushis()
  }

  getSushis = () => {
    fetch(API)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ sushis: data })
      })
  }
  deduct = (sushi) => {
    if (this.state.budget >= sushi.price) {
      this.setState(prevState => {
        let newBudget = prevState.budget - sushi.price
        let amountEaten = [...prevState.eaten, sushi]
        return { budget: newBudget, eaten: amountEaten }
      })
      return true
    } else {
      return false
    }
  }

  addMoney = (e) => {
    e.preventDefault()
    let money = parseInt(e.target.cash.value)
    this.setState(prevState => {
      let newMoney = prevState.budget + money
      return { budget: newMoney }
    })
  }
  moreSushi = () => {
    this.setState(prevState => {
      let newArray = prevState.sushis.splice(4)
      if (newArray.length === 0){
        this.getSushis()
      }else{
      return { sushis: newArray }}
    })
  }

  onlyFour = () => {
    return this.state.sushis.slice(0, 4)
  }
  render() {
    
    return (
      <div className="app">
        { this.state.sushis.length > 0 ? <SushiContainer sushis={this.onlyFour()} moreHandler={this.moreSushi} deduct={this.deduct} eaten={this.state.eaten} /> : <div> Please Wait </div>}
        <Table budget={this.state.budget} plates={this.state.eaten} />
        <Momoney addMoney={this.addMoney} />
      </div>
    );
  }
}

export default App;