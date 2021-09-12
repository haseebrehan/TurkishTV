/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Carousel} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Home() {
    return (
    <>
      <section className="bg-secondary text-light pt-md-5 pl-md-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex justify-content-between">
          <div className="col-md-9 ">
            <h1>Enjoy Turkish <span className="text-warning">Series </span></h1>
            <h3 className="lead my-4">Website is dediacted to see Famous Turkish series Ertugrul Ghazi & Kurulus Osman, the father of Osman who founded the Ottoman Empire. 
            This series is created by Mehmet Bozdag (2020). The show is famous in Turkey & abroad</h3>
          </div>
          <div className="col-md-3 d-none d-sm-block">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Turkey-tv-stub.svg" alt="showcase"/>
          </div>
          
        </div>
      </div>
    </section>

  <section className=" bg-dark pt-2">
      <div className="container1 m-auto">
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://tigrepelvar.files.wordpress.com/2019/08/20180119034434m.png?w=584"
                alt="First slide"/>
            <Carousel.Caption>
              <h3>Dirilis Ertugrul</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block  w-100 "
                src="https://myinfomaster.com/wp-content/uploads/2020/05/thumb-1920-645099-1536x864.jpg"
                alt="Second slide"/>

            <Carousel.Caption>
              <h3>Dirilis Ertugrul</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block  w-100 "
            src="https://www.bbcnews1.com/wp-content/uploads/2021/06/%D9%85%D8%B3%D9%84%D8%B3%D9%84-%D9%82%D9%8A%D8%A7%D9%85%D8%A9-%D8%B9%D8%AB%D9%85%D8%A7%D9%86-64.jpg"
            alt="Third slide"/>

                    <Carousel.Caption>
                      <h3>Kurlus Osman</h3>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  </section>
  {/* Section- Series */}
  <section>
        <div className="container mx-auto">
            <div className="row text-center d-flex justify-content-md-center">
                <div className="col-md-6 mt-5 mb-3">
                    <div className="card bg-secondary text-light mt-2">
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">
                            Dirilis Ertugrul
                            </h3>
                            <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/11/06/thumbs_b_c_66b4118acfb58dbd9b4996a5790d377f.jpg?v=153328" width="100%" height="350px" alt="" />
                            <p className="card-text pt-1">
                            Diriliş: Ertuğrul is a Turkish historical fiction and adventure television series produced by Mehmet Bozdağ for TRT, starring Engin Altan Düzyatan as Ertuğrul Bey.
                            </p>
                            <Link to="/ertu" className="btn btn-primary">Watch Series</Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 mt-5 mb-3">
                    <div className="card bg-dark text-light">
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">
                                Kurulus Osman
                            </h3>
                            <img src="https://mydirilisertugrul.com/wp-content/uploads/2020/08/s6-1.jpg" width="100%" height="350px" alt="" />
                            <p className="card-text pt-2">
                            Kuruluş: Osman is a Turkish historical drama television series created by Mehmet Bozdağ and starring Burak in the
                             titular role  Osman I, founder of the Ottoman Empire.
                            </p>
                            <Link to="/osm" className="btn btn-primary">Watch Series</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
    )
}

export default Home
