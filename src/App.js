import React from 'react';
import logo, { ReactComponent } from './logo.svg';
import './App.css';
import productfile from './components/productfile';
const productsArray =[
  {
  "id" : 1,
  "title" : "One Plus 8",
  "price" : "Rs 45,000",
  "image" : "https://images-na.ssl-images-amazon.com/images/I/61P6u9SWzRL._SL1000_.jpg"
},
{
  "id" : 2,
  "title" : "Samsung",
  "price" : "Rs 25,000",
  "image" : "https://csmobiles.com/18725-large_default/samsung-galaxy-a30s-a307-64gb-dual-sim-black.jpg"
},
{
  "id" : 3,
  "title" : "iphone X",
  "price" : "Rs 80,000",
  "image" : "https://cdn.tmobile.com/content/dam/t-mobile/en-p/cell-phones/apple/Apple-iPhone-11-Pro/Midnight-Green/Apple-iPhone-11-Pro-Midnight-Green-frontimage.jpg"
}
]
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      firstState: 'hello World',
      cartCount: 0 ,
      alertOncartCount : 10 ,
      products : []
    }
  }
  componentDidMount() {
    this.setState({
      firstState: 'Welcome to our shop'
    })
  }
  componentDidUpdate(prevProps, prevState){
    if(this.state.cartCount >= this.state.alertOncartCount)
    {
      alert('Oops cart limit exceeded')
    }
  }
  cons
  addCount()
  {
    const newCount = this.state.cartCount + 1;
    this.setState({cartCount : newCount
    })
  }
  loadproducts()
  {
    this.setState({
      products: productsArray
    })
  }
  render() {
    const productlist = this.state.products.map((product) =>{
      return productfile(this.addCount.bind(this),product)
    })
    console.log(productlist)
    return (
      <div>
        <nav className="navbar  navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Famazon%2Famazon_PNG22.png&f=1&nofb=1"
              width="30" height="30" className="d-inline-block align-top" alt="" />
            Amazon
          </a>
          {this.state.firstState}
          <button onClick={() =>{this.loadproducts()}}>load products</button>
          <button type="button" className="btn btn-success"  
          >Cart {this.state.cartCount}
          </button>
        </nav>
        <div className="container">
          <p className="sh">Laptops</p>   
          {productlist}
          <div className="row d-flex justify-content-end">
            <button type="button" className="btn btn-primary" id="er">CHECKOUT </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;