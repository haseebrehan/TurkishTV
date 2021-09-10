import {Nav} from 'react-bootstrap'
import React from 'react'

function Header() {
    return (
        <Nav className="navbar-light bg-dark fs-4 fixed-top" >
        <a className="navbar-brand" href="/home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Turkey-tv-stub.svg" width="40" height="40" alt=""/>
        </a>
          <Nav.Item>
              <Nav.Link className="text-warning" href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item >
              <Nav.Link className="text-warning"  href="/ertu">Dirilis Ertugrul</Nav.Link>
          </Nav.Item>
          <Nav.Item >
              <Nav.Link className="text-warning"  href="/osm">Kurulus Osman</Nav.Link>
          </Nav.Item>
          <Nav.Item >
              <Nav.Link className="text-warning"  href="/contact">Contact</Nav.Link>
          </Nav.Item>
      </Nav>
    )
}

export default Header







