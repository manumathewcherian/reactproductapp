import React from "react";
export default function productfile(addtoCart,product) {
    return (
          <div className="row">
            <div className="col-3">
              <div className="card mb-3" style={{ "maxWidth": "540px", "color": "red" }}>
                <img
                  className="imm"
                  src={product.image}
                  alt="dsadas" width="150" height="150"
                />
                <h3>{product.title}</h3>
                <span>Rs :: {product.price}</span>
                <a href="#" className="btn btn-info" onClick={() => {addtoCart(product)}
          }>Add To Cart</a>
              </div>
            </div>
          </div>
    )
  }