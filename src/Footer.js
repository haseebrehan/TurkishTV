/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgArrowUpO } from "react-icons/cg";
import { FaInstagram,FaGithub, FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";
import MapContainer from "./MapContainer";

const Footer = () => 
<footer className="p-5 bg-danger text-white">
  <div className="container">
      <div className="row">
                <div className="col-md-4 text-center align-self-center">
                  <h4>Turkish Tv Inc. </h4>
                  <p>Address: CRA 151 # 64 -72 Bis <br/>
                  Autopista Norte, Bogota (Colombia) <br/>
                  Contact . No :+57-89785634 <br/>
                   </p>
                </div>
              <div className="col-md-4 text-center align-self-center">
                    {/* <!-- Facebook --> */}
                    <a className="btn m-2 p-0 bg-white" href=""><FaFacebookSquare color='blue' size='2em'/></a>
                    <a className="btn m-2 p-0 bg-white" href=""><FaGithub color='black' background="white" size='2em'/></a>
                    <a className="btn m-2 p-0 bg-white" href=""><FaTwitterSquare color='#00BFFF' size='2em'/></a>
                    <a className="btn m-2 p-0 bg-white" href=""><FaInstagram className="instagram" size='2em'/></a>
                    <p className="lead">Copyright &copy; 2021 Turkish TV</p>
                </div>
                <div className="col-md-4">
                <MapContainer/>
                </div>
    </div>
            <div className="float-end p-2">
            <a href="/home" className="position-relative align-self-center p-2">
                  <CgArrowUpO size="2em" color='white' />
                  </a>
            </div>
            
  </div>
</footer>

export default Footer