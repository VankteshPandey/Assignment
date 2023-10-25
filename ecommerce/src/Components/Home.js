import React from 'react'
import './Home.css'


export default function Home() {

  const divStyle = {
    backgroundImage: 'url("https://wallpapercave.com/wp/wp3537586.jpg")',
    backgroundSize: '1312px 600px',
    backgroundRepeat: 'no-repeat',
    height:'500px',

  }
  return (
    <>
<div  className= 'my-1' style={ divStyle}>
      {/* This section contain impor the navbar code from header.html  */}


      <div className="head-1 ">Welcome to Drip</div>
      {/* This section contain first animmation  */}
      <div className="drop">Drop</div>
      </div>

      {/* This section contain second animation   */}
      <div className="col-md-12 clearfix d-none d-lg-block "> {/*className= add responsiveness to the code */}
        <div className="wrapper">
          <div className="static-text">Get your </div>
          <ul className="dynamic">
            <li><span>Favorite Fashion</span></li>
            <li><span>Favorite Brands</span></li>
            <li><span>Favorite Price</span></li>
            <li><span>Dream Outfit</span></li>
          </ul>
        </div>
      </div>

      <div className="col-md-9 clearfix d-none d-sm-none d-lg-none d-md-block"> {/*Show animation for Medium devices   */}
        <div className="wrapper-1">
          <div className="static-text-1">Get your </div>
          <ul className="dynamic-1">
            <li><span>Favorite Fashion</span></li>
            <li><span>Favorite Brands</span></li>
            <li><span>Favorite Price</span></li>
            <li><span>Dream Outfit</span></li>
          </ul>
        </div>
      </div>


      <div className="wrapper-2 col-sm-12 clearfix d-md-none d-sm-block"> {/*className=Show animation for small devices   */}
        <div className="static-text-2">Get your </div>
        <ul className="dynamic-2">
          <li className="list-2"><span>Favorite Fashion</span></li>
          <li className="list-2"><span>Favorite Brands</span></li>
          <li className="list-2"><span>Favorite Price</span></li>
          <li className="list-2"><span>Dream Outfit</span></li>
        </ul>
      </div>
      
      

      {/* carousel code for small medium and large devices  */}
      <div className="container" >
        <div className="col-md-12 clearfix d-none d-lg-block">
          <div id="carouselExampleCaptions1" className="carousel slide">
            <h1 className="featured">Featured products</h1>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions1"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-group">
                  <div className="card">
                    <img alt="No " src={require("./Images/ms1.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Shirts</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>

                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/mp1.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Pents</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/mk3.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kurta</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/ms4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Shirts</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group">
                  <div className="card">
                    <img alt="No " src={require("./Images/kf1.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/kf2.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/km3.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/km4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group">
                  <div className="card">
                    <img alt="No " src={require("./Images/w.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Suit</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/wS2.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Saree</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img src={require("./Images/wS3.jpeg")} className="card-img-top" alt="Hb.jpg" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Saree</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/wS4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Saree</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions1"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* carousel code for medium devices  */}
        <div className="col-md-10 clearfix d-none d-sm-none d-lg-none d-md-block">
          <div id="carouselExampleCaptions2" className="carousel slide">
            <h1 className="featured">Featured products</h1>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions2"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions2"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions2"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-group">

                  <div className="card">
                    <img alt="No " src={require("./Images/mk3.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kurta</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/ms4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Shirt</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group">

                  <div className="card">
                    <img src={require("./Images/km3.jpeg")} alt="No " className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/km4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group">

                  <div className="card">
                    <img src={require("./Images/wS3.jpeg")} className="card-img-top" alt="Hb.jpg" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Saree</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                  <div className="card">
                    <img alt="No " src={require("./Images/wS4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Saree</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions2"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        {/* carousel code for small devices */}
        <div className="col-sm-6 clearfix d-md-none d-sm-block">
          <div id="carouselExampleCaptions3" className="carousel slide">
            <h1 className="featured">Featured products</h1>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions3"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions3"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions3"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="card-group">


                  <div className="card">
                    <img alt="No " src={require("./Images/ms4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Shirt</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group">
                  <div className="card">
                    <img alt="No " src={require("./Images/km4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Kids</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="card-group">
                  <div className="card">
                    <img alt="No " src={require("./Images/wS4.jpeg")} className="card-img-top" style={{ width: '280px', height: '250px' }} />
                    <div className="card-body">
                      <h5 className="card-title">Saree</h5>
                      <p className="card-text">
                        This Product made of of cotton and it is very comfortable.
                        Get your self cloth of trands.
                      </p>

                      <h5 className="price">Price: ₹500.00</h5>
                      <button type="button" className="btn btn-outline-info" style={{ marginLeft: '60px', width: '90px' }}>Info</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions3"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

      </div>

      {/* This section import footer from footer.html */}



    </>
  )
}
