import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    console.log('successfully mount')
  }
  render() {
    return (
      <div>
        <nav className="navbar  navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Famazon%2Famazon_PNG22.png&f=1&nofb=1"
              width="30" height="30" className="d-inline-block align-top" alt="" />
            Amazon
          </a>
          <button type="button" className="btn btn-success">Cart</button>
        </nav>
        <div className="container">
          <p className="sh">Laptops</p>
          <div className="row">
            <div className="col-3">
              <div className="my-list">
                <img
                  className="imm"
                  src="https://rukminim1.flixcart.com/image/704/704/jdyuefk0/computer/t/u/4/hp-na-laptop-original-imaf2rdcgrw8nzfv.jpeg?q=70"
                  alt="dsadas" width="300" height="230"
                />
                <h3>HP Core i3 6th Gen</h3>
                <span> RS:45K </span>
                <a href="#" className="btn btn-info">Add To Cart</a>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end">
            <button type="button" className="btn btn-primary" id="er">Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;