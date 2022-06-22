import Navbar from "./Component/Navbar";
import Card from "./Component/card";
import { Component } from "react";
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

class App extends Component {
  state ={
     cards:[
        {id: 0, nome: "California", price: 1.99, picture: california, quantity:0},
        {id: 1, nome: "Dynamite", price: 2.99, picture: dynamite, quantity:0},
        {id: 2, nome: "Shrimp", price: 3.99, picture: shrimp, quantity:0},
        {id: 3, nome: "Rainbow", price: 4.99, picture: rainbow, quantity:0},
        {id: 4, nome: "Philadelphia", price: 5.99, picture: philadelphia, quantity:0},
        {id: 5, nome: "Dragon", price: 9.99, picture: dragon, quantity:0},
]
}

handleDelete = cardId => {
  const cards = this.state.cards.filter(card => card.id !== cardId);
  this.setState({ cards });
}

handleIncrement = card => {
  const cards = [...this.state.cards];
  const id = cards.indexOf(card);
  cards[id] = {...card};
  cards[id].quantity++;
  this.setState({cards});
}

  render() {
    return (
      <>
      <Navbar />
      <div className="container">
      <h1>What would you like to order?</h1>
      <hr />
        <div className="row">
          {this.state.cards.map(card => (
            <Card
            key={card.id}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            card={card}
            />

          ))}
        </div>
      </div>
      </>
    );
  }
}

export default App;
