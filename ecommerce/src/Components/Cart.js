import React from 'react'

function Cart() {

    
    
 

  return (
    
      <>
      
     {/* This section contain import the navbar code from header.html  */}
     
     
    <div className="container my-3">
        <div className="row">
            {/* Part 1: List of Items  */}
            <div className="col-md-8">
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require("./Images/w3.jpeg")} className="card-img" alt="Product 1" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">saree</h5>
                                <p className="card-text">Price: ₹500.00</p>
                                <button className="btn btn-danger delete-button"><i className="fa fa-trash"></i></button>
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-outline-secondary minus"><i className="fa fa-minus"></i></button>
                                    </span>
                                    <input type="number" className="form-control quantity-input" value="1" id="quantity" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-outline-secondary plus"><i className="fa fa-plus"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Similar card structure for Product 2  */}
                
                <div className="card mb-3">
                    <div className="row no-gutters">
                        <div className="col-md-4">
                            <img src={require("./Images/w.jpeg")} className="card-img" alt="Product 1" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">saree</h5>
                                <p className="card-text">Price: ₹500.00</p>
                                <button className="btn btn-danger delete-button"><i className="fa fa-trash"></i></button>
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-outline-secondary minus"><i className="fa fa-minus"></i></button>
                                    </span>
                                    <input type="number" className="form-control quantity-input" value="1" id="quantity" />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-outline-secondary plus"><i className="fa fa-plus"></i></button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Part 2: Summary  */}
            <div className="col-md-4">
                <div className="card mb-3">
                    <div className="card-header">Summary</div>
                    <div className="card-body">
                        <p className="card-text">Total Price: ₹1000.00</p>
                        <p className="card-text">Shipping: ₹100.00</p>
                        <hr />
                        <p className="card-text">Total Cost: ₹1100.00</p>
                        <button className="btn btn-primary checkout-button">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    </div>



     
    
   

    
      </>
   
  )
}

export default Cart
