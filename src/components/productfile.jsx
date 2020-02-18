import React from "react";
export default function productfile(addtoCart,product) {
    return (
          <div className="row">
            <div className="col-3">
              <div className="my-list">
                <img
                  className="imm"
                  src={product.image}
                  alt="dsadas" width="300" height="230"
                />
                <h3>{product.title}</h3>
                <span>{product.price}</span>
                <a href="#" className="btn btn-info" onClick={() => {addtoCart(product)}
          }>Add To Cart</a>
              </div>
            </div>
          </div>
    )
  }