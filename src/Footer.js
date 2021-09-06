/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CgArrowUpO } from "react-icons/cg";
import { FaInstagram,FaGithub, FaFacebookSquare, FaTwitterSquare} from "react-icons/fa";

const Footer = () => 
<footer className="p-5 bg-danger text-white text-center-justify position-relative">
        <div className="container">
            <div className="row">
                <div className="col-4">
                  <h4> Address Turkish Tv Inc. </h4>
                  <p>CRA 151 # 64 -72 Bis <br/>
                  Autopista Norte, Bogota (Colombia) <br/>
                  Contact . No :+57-89785634 <br/>
                   </p>
                </div>
              <div className="col-4 text-center">
                <section class="mb-4">
                    {/* <!-- Facebook --> */}
                    <a className="btn m-2 p-0 bg-white" href=""><FaFacebookSquare color='blue' size='2em'/></a>
                    <a className="btn m-2 p-0 bg-white" href=""><FaGithub color='black' background="white" size='2em'/></a>
                    <a className="btn m-2 p-0 bg-white" href=""><FaTwitterSquare color='#00BFFF' size='2em'/></a>
                    <a className="btn m-2 p-0 bg-white" href=""><FaInstagram className="instagram" size='2em'/></a>
                </section>
                <p className="lead">Copyright &copy; 2021 Turkish TV</p>
                </div>
                <div className="col-4">
                  <a href="/home" className="position-absolute bottom-0 end-0 p-5">
                  <CgArrowUpO size="4em" color='white' />
                  </a>
                </div> 
            </div>
        </div>
      </footer>

export default Footer