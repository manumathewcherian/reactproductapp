import React from "react";
export default function productfile() {
    return (
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
                <a href="#" className="btn btn-info" onClick={() => {this.addCount()}
          }>Add To Cart</a>
              </div>
            </div>
          </div>
    )
  }