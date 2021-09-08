import { useState } from 'react';
function Video1() {
const [info] = useState([
  {
    "id": 1,
    "link": "https://ok.ru/videoembed/2186885991119",
  },
  {
    "id": 2,
    "link": "https://ok.ru/videoembed/2186884025039",
  },
  {"id": 3,
    "link": "https://ok.ru/videoembed/2189621988047",
  },
  {
    "id": 4,
    "link": "https://ok.ru/videoembed/2267187972815",
  },
  {
    "id": 5,
    "link": "https://ok.ru/videoembed/2186885991119",
  },
  {
    "id": 6,
    "link": "https://ok.ru/videoembed/2267187841743",
  },
  {
    "id": 7,
    "link": "https://ok.ru/videoembed/2267188038351",
  },
  {
    "id": 8,
    "link": "https://ok.ru/videoembed/2267187907279",
  },
  {
    "id": 9,
    "link": "https://ok.ru/videoembed/2189622184655",
  },
  {
    "id": 10,
    "link": "https://ok.ru/videoembed/2267188103887",
  },
  {
    "id": 11,
    "link": "https://ok.ru/videoembed/2186885860047",
  },
  {
    "id": 12,
    "link": "https://ok.ru/videoembed/2186885466831",
  }





]);
  return (
    <div className="container p-5 mx-auto text-center">
    <h2 className="bg-danger text-light">Season 1 Ertugul Ghazi</h2>
    {/* display books from the API */}
    {info && (
      <div className="row mt-4">

        {/* loop over the books */}
        {info.map((inf) => (
        <div key={inf.id} className="col-md-3 ml-0 video-responsive">
            <iframe
            width="250"
            height="200"
            src={inf.link}
            frameBorder="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Osman series"
          />
          <h4 className="text-center">Episode.No {inf.id}</h4>
            
        </div>
         
        ))}

      </div>
    )}
    </div>
  )
}

export default Video1