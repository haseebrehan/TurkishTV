import React, { useState, useMemo } from 'react';
import Pagination from './Pagination';
import { CgArrowLeftO } from "react-icons/cg";
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import data from './data/dataes1s.json'

let PageSize = 9;

export default function Pages1() {
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  console.log(currentTableData)
  return (
    <>
          <div className="container p-5 mx-auto">
              <Link to="/ertu" className="position-relative align-self-center">
                          <CgArrowLeftO size="2em" color='red' /> <p>Go Back</p></Link>
              <h2 className="bg-danger text-light text-center">Season 1 Ertugul Ghazi</h2>
          <div className="row mt-4">

        {/* loop over the books */}
        {currentTableData.map((inf) => (
        <Card key={inf.id} className="col-lg-4 video-responsive item">
          <Card.Title>
            <h4 className="text-center">Episode.No {inf.id}</h4>
            </Card.Title>
          <Card.Body className="d-flex justify-content-center ">
          <iframe
            width="270"
            height="200"
            src={inf.link}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Osman series"
          />
         
          </Card.Body> 
        </Card>
         
        ))}
      </div>
      </div>

          <Pagination
            className="pagination-bar row"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={page => setCurrentPage(page)}
          />
    </>
  );
}
