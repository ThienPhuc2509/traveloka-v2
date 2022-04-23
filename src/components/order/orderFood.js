import {React, useState, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";

const OrderFood = () => {
  
    return (
        <>
        <section className="header">
                <div class="container">
                <div class="row mt-2 ">
                    <div className="d-flex justify-content-between  ">
                    <div className="logo_img ">
                        <img src="/assets/img/logo.png" alt="logo" />

                    </div>
                    <div className="auth ">
                    <Link className="authA" to ="/login" element={ <Login />}>Tạo tài khoản</Link>
                    <Link className="authB" to ="/register" element={ <Register/>}>Đăng nhập</Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="nav_bar">
                <Navbar bg="light" expand="lg">
                <Container >
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="" className="text-dark">Transports</Nav.Link>
                <Nav.Link href="" className="text-dark">Accommodations</Nav.Link>
                <NavDropdown title="Things to do" id="basic-nav-dropdown" >
                <NavDropdown.Item href=""className="text-dark ">Xperience</NavDropdown.Item>
                <NavDropdown.Item href="/restaurant"className="text-dark">Eats</NavDropdown.Item>
                <NavDropdown.Item href=""className="text-dark">Healthcare</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href=""className="text-dark">Bills & Top-ups</Nav.Link>
                <Nav.Link href=""className="text-dark">Travel Add-ons</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
                </div>
        </section> 
        
        <section class="section section-lg bg-gray-1">
        <div class="container">
          <h2 class="text-center">Our Restaurant Menu</h2>
          <div class="row">
            <div class="col-12">
              <div class="tabs-custom tabs-horizontal tabs-classic" id="tabs-1">
                <ul class="nav nav-tabs nav-tabs-classic">
                  <li class="nav-item" role="presentation"><a class="nav-link active" href="#tabs-1-1" data-toggle="tab">mains</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-2" data-toggle="tab">Desserts</a></li>
                  <li class="nav-item" role="presentation"><a class="nav-link" href="#tabs-1-3" data-toggle="tab">drinks</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade show active" id="tabs-1-1">
                    <div class="box-event-modern">
                      <div class="event-item-modern">
                        <p class="event-time">$25.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Osso Buco</a></h4>
                        <div class="event-item-modern-text">
                          <p>Osso Buco is one of the Italian greats - slow cooked veal in a white wine tomato sauce. Meltingly tender, this is both hearty and luxurious.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$16.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Pappardelle Mimmo</a></h4>
                        <div class="event-item-modern-text">
                          <p>This delicious dish tops long, wide pasta with scallops, lobster, asparagus, butter, sage and truffle oil to cater every palate.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$17.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Trippa Satriano</a></h4>
                        <div class="event-item-modern-text">
                          <p>Thinly sliced herb encrusted ahi tuna topped with diced tomatoes, olives, capers, red onions and fennel. Perfect choice even for the first-time visitors!</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$18.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Filetto Di Manzo</a></h4>
                        <div class="event-item-modern-text">
                          <p>Wonderful combination of prime tenderloin, winter greens, Jerusalem artichoke puree, and oxtail reduction sauce.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-2">
                    <div class="box-event-modern">
                      <div class="event-item-modern">
                        <p class="event-time">$20.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Tiramisu</a></h4>
                        <div class="event-item-modern-text">
                          <p>A Pesto’s favorite - classic Italian dessert made with lady fingers, Mascarpone cheese & espresso. Perfect for both kids and adults.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$6.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Cannoli</a></h4>
                        <div class="event-item-modern-text">
                          <p>Trio tower of cannoli filled with smooth ricotta, sugar & cinnamon, with chocolate & raspberry sauces. Single cannoli is also available.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$5.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Pistachio Passion</a></h4>
                        <div class="event-item-modern-text">
                          <p>Layered pistachio cream, cream cheese custard & whipped cream atop a rich walnut crust.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$4.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Chocolate-and-Pistachio Biscotti</a></h4>
                        <div class="event-item-modern-text">
                          <p>At Pesto, we vary these wonderful nutty biscotti, while also dipping them in melted dark chocolate for an extra layer of flavor.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="tabs-1-3">
                    <div class="box-event-modern">
                      <div class="event-item-modern">
                        <p class="event-time">$10.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Aperol Spritz</a></h4>
                        <div class="event-item-modern-text">
                          <p>The most popular drink in Venice: refreshing, easygoing &…happy! Perfect to be sipped as an “Aperitivo” just before dinner - delightful!</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$9.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Negroni</a></h4>
                        <div class="event-item-modern-text">
                          <p>Reward yourself with a moment of relaxation & pure pleasure while enjoying the full flavour & simplicity of a Negroni, an iconic Italian cocktail.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$11.89</p>
                        <h4 class="event-item-modern-title"><a href="#">Negroni Sbagliato</a></h4>
                        <div class="event-item-modern-text">
                          <p>A cocktail for those who prefer more delicate flavours but nonetheless want a drink full of taste & personality.</p>
                        </div>
                      </div>
                      <div class="event-item-modern">
                        <p class="event-time">$8.89</p>
                        <h4 class="event-item-modern-title"><a href="#">White Peach Bellini</a></h4>
                        <div class="event-item-modern-text">
                          <p>White Peach Bellini is a classic drink from Venice Italy of white peach purée and Prosecco. It is one of our most popular drinks at Pesto.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
}

export default OrderFood;
