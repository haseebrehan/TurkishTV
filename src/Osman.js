import React from 'react'
import { Link } from 'react-router-dom';
import { CgArrowLeftO } from "react-icons/cg";

function Osman() {
    return (
            <section className="p-md-5 p-2">
                
            <div className="container">
                <div className="row text-center g-4 d-flex justify-content-center">
                    <div className="col-md-6">
                        <div className="card bg-secondary text-light mt-2">
                            <div className="card-body text-center">
                                <h3 className="card-title mb-3">
                                Kurulus Osman Season 1
                                </h3>
                                <img src="https://i.ytimg.com/vi/ccszFWqdo1E/maxresdefault.jpg" width="100%" alt="" />
                                <p className="card-text">
                                Kuruluş: Osman is a Turkish historical drama television series created by Mehmet Bozdağ
                                </p>
                                <Link to="/osm/se1" className="btn btn-primary">Watch Season 1</Link>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-md-6">
                        <div className="card bg-dark text-light mt-2">
                            <div className="card-body text-center">
                                <h3 className="card-title mb-3">
                                Kurulus Osman Season 2
                                </h3>
                                <img src="https://i.ytimg.com/vi/ccszFWqdo1E/maxresdefault.jpg" width="100%" alt="" />
                                <p className="card-text">
                                Kuruluş: Osman is a Turkish historical drama television series created by Mehmet Bozdağos.
                                </p>
                                <Link to="/osm/se2" className="btn btn-primary">Watch Season 2</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/home" className="position-relative align-self-center mt-3">
                      <CgArrowLeftO size="2em" color='red' /> <p>Go Back</p></Link>
            </div>
          </section>
          
    )
}

export default Osman
