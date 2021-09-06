import {Nav} from 'react-bootstrap'
import React from 'react'

function Header() {
    return (
        <Nav className="navbar-light bg-light fs-4 fixed-top" >
        <a className="navbar-brand" href="/home">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Turkey-tv-stub.svg" width="40" height="40" alt=""/>
        </a>
          <Nav.Item>
              <Nav.Link className="text-danger" href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item >
              <Nav.Link className="text-danger"  href="/about">About</Nav.Link>
          </Nav.Item>
          <Nav.Item >
              <Nav.Link className="text-danger"  href="/contact">Contact</Nav.Link>
          </Nav.Item>
      </Nav>
    )
}

export default Header







