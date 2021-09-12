import {Nav} from 'react-bootstrap'
import React, { useState } from 'react'
import {Link} from 'react-router-dom'

function Header() {

   
        const [isNavCollapsed, setIsNavCollapsed] = useState(true);
      
        const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return (
        <div class="container">
        <section class="row">
                    <Nav className="navbar-light bg-dark fs-4 fixed-top rounded navbar-expand-lg d-flex justify-content-between" >
                    <Link to="/home"  className="text-warning text-decoration-none">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Turkey-tv-stub.svg" width="40" height="40" alt=""/>
                    </Link>

                    <button className="custom-toggler navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarsE" onClick={handleNavCollapse}>
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarsE">
                    <Nav.Item>
                        <Nav.Link>
                        <Link to="/home"  className="text-warning text-decoration-none">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link>
                        <Link to="/ertu"  className="text-warning text-decoration-none">Dirilis Ertugrul</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link >
                        <Link to="/osm"  className="text-warning text-decoration-none">Kurulus Osman</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item >
                        <Nav.Link> <Link to="/contact"  className="text-warning text-decoration-none">Contact</Link></Nav.Link>
                    </Nav.Item>
                    </div>
                </Nav>
            </section>
            </div>
        
    )
}

export default Header







