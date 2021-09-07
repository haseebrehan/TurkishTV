/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Carousel} from 'react-bootstrap';
function Home() {
    return (
    <>
      <section className="bg-dark text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
      <div className="container">
        <div className="d-sm-flex align-items-center justify-content-between">
          <div>
            <h1>Enjoy Turkish <span className="text-warning">Series </span></h1>
            <p className="lead my-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, odit cumque inventore dignissimos consectetur, sapiente minima, velit maxime voluptates explicabo cum sit blanditiis? Sapiente, officiis! Consectetur praesentium ipsam quod saepe!</p>
          </div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Turkey-tv-stub.svg"  width="200" height="150" alt="showcase"/>
        </div>
      </div>
    </section>

  <section className=" text-light p-4 ">
      <div className="container1 m-auto">
        <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 mx-auto"
                src="https://cdn.siasat.com/wp-content/uploads/2020/04/Ertugrul.webp"
                alt="First slide"/>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
              <img
                className="d-block  w-100 h-75 mx-auto"
                src="https://myinfomaster.com/wp-content/uploads/2020/05/thumb-1920-645099-1536x864.jpg"
                alt="Second slide"/>

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <img
            className="d-block  w-100 mx-auto"
            src="https://www.bbcnews1.com/wp-content/uploads/2021/06/%D9%85%D8%B3%D9%84%D8%B3%D9%84-%D9%82%D9%8A%D8%A7%D9%85%D8%A9-%D8%B9%D8%AB%D9%85%D8%A7%D9%86-64.jpg"
            alt="Third slide"/>

                    <Carousel.Caption>
                      <h3>Third slide label</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  </section>
  {/* Section- Series */}
  <section className="p-5">
        <div className="container">
            <div className="row text-center g-4">
                <div className="col-md">
                    <div className="card bg-secondary text-light mt-2">
                        <div className="card-body text-center">
                            <h3 className="card-title mb-3">
                                Ertugrul Ghazi
                            </h3>
                            <img src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/11/06/thumbs_b_c_66b4118acfb58dbd9b4996a5790d377f.jpg?v=153328" width="100%" alt="" />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi inventore, quas voluptate sed dignissimos.
                            </p>
                            <a href="/ertu" className="btn btn-dark">Watch Series</a>
                        </div>
                    </div>
                </div>
                <div className="col-md">
                    <div className="card bg-dark text-light mt-2">
                        <div className="card-body text-center">
                            <h3 className="card-title m-3">
                                Kurulus Osman
                            </h3>
                            <img src="https://i.ytimg.com/vi/ccszFWqdo1E/maxresdefault.jpg" width="100%" height="270px" alt="" />
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi inventore, quas voluptate sed dignissimos.
                            </p>
                            <a href="/osman" className="btn btn-primary">Watch Series</a>
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
