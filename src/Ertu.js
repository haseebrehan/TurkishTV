import React from 'react'
import { Link } from 'react-router-dom';
import { CgArrowLeftO } from "react-icons/cg";

function Ertu() {
    return (
        
        <section className="p-5">
            
        <div className="container">
            <div className="row text-center g-4">
                <div className="col-md-4">
                    <div className="card bg-secondary text-light mt-2">
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">
                                Dirilis Ertugrul Season 1
                            </h3>
                            <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/11/06/thumbs_b_c_66b4118acfb58dbd9b4996a5790d377f.jpg?v=153328" width="100%" alt="" />
                            <p className="card-text">
                            Süleyman Şah, Bey of the Kayı sends his son, Ertuğrul, to ask for land from the Emir of Aleppo.
                            </p>
                            <Link to="/ertu/se1" className="btn btn-primary">Watch Season 1</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-dark text-light mt-2">
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">
                                Dirilis Ertugrul Season 2
                            </h3>
                            <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/11/06/thumbs_b_c_66b4118acfb58dbd9b4996a5790d377f.jpg?v=153328" width="100%" alt="" />
                            <p className="card-text">
                            The Kayı settled in Erzurum, seek refuge with the Dodurga after the Mongols led by Baycu Noyan.
                            </p>
                            <Link to="/ertu/se2" className="btn btn-primary">Watch Season 2</Link>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card bg-secondary text-light mt-2">
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">
                                Dirilis Ertugrul Season 3
                            </h3>
                            <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/11/06/thumbs_b_c_66b4118acfb58dbd9b4996a5790d377f.jpg?v=153328" width="100%" alt="" />
                            <p className="card-text">
                            The poor Kayı newcomers face Ural of the rich Çavdar trade-veterans and win the war against crusades.
                            </p>
                            <Link to="/ertu/se3" className="btn btn-primary">Watch Season 3</Link>
                        </div>
                    </div>
                </div>
            </div>
            <a href="/home" className="position-relative align-self-center mt-3">
                  <CgArrowLeftO size="2em" color='red' /> <p>Go Back</p></a>
        </div>
      </section>
      
    )
}

export default Ertu
