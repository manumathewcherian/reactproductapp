import React from "react";
import productfile from '../components/productfile';
export default class Cart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          cart : []
        }
    }
    componentDidMount() {
        this.initCart();
      }
    removecart()
    {
        localStorage.setItem('cart',JSON.stringify([]))
        this.setState({
            cart:[]
        })
    }
    initCart()
    {
      let mycart = localStorage.getItem('cart')
      mycart = JSON.parse(mycart)
      this.setState({
        cart: mycart || []
      })
    }
    render() {
        const productlist = this.state.cart.map((product) =>{
            return productfile(null,product)
          })
        return    ( <div>
        <nav className="navbar  navbar-dark bg-primary">
          <a className="navbar-brand" href="#">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpngimg.com%2Fuploads%2Famazon%2Famazon_PNG22.png&f=1&nofb=1"
              width="30" height="30" className="d-inline-block align-top" alt="" />
            Amazon Cart
          </a>
          <button type="button" className="btn btn-success" onClick={() => {
            this.removecart();
          }}>
            Clear Cart ({this.state.cart.length})
          </button>
        </nav>
            {productlist}
            <div className="row d-flex justify-content-end">
            <button type="button" className="btn btn-primary" id="er">CHECKOUT </button>
          </div>
        </div>
        )
    }
}