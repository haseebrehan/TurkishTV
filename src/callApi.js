import { useState, useEffect } from 'react';
function CallApi() {
const [info, setInfo] = useState(null);
    
     // + adding the use
  useEffect(() => {
    getData();

    // we will use async/await to fetch this data
        async function getData() {
      const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");
      const data = await res.json();

      // store the data into our books variable
      //console.log(data.show)
        const dataPic = data.map((item) => item.show )

        setInfo(dataPic) ;
      console.log(dataPic.id)
    }
  }, []); // <- you may need to put the setBooks function in this array

  return (
    <div>
    <h1>Game of Thrones Books</h1>
    {/* display books from the API */}
    {info && (
      <div className="row mx-auto">

        {/* loop over the books */}
        {info.map((inf) => (
        <div key={inf.id} className="col-md-2 mb-3 ">
            
            <a href={inf.url}><button className="btn btn-dark text-light">Episode.No {inf.id}</button></a>
            
        </div>
         
        ))}

      </div>
    )}
    </div>
  )
}

export default CallApi
