import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from "react-router-dom";


export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/launch">Launch</Link>

      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="launch" element={< Launch />}>
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<Launchshoe />} />
        </Route>
        <Route path="*" element={<NotFound />} />


      </Routes>
    </Router>
  );
}
function NotFound () {
  return ( 
    <div>
      <h1>Not Found </h1>
      <p>Sorry your page was not found!</p>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>welcome Home!</h1>

    </div>
  );
}
function Launch() {
  return (
    <div>
      <h1>Launch</h1>
      <Outlet /> 
    </div>
  );
}
function LaunchIndex() {
  return <ul>
    {Object.entries(shoes).map(([slug, { name, img }]) =>
      <li key={slug}>
        <Link to={`/launch/${slug}`} >
        <h2> {name} </h2>
        <img src={img} alt={name} />
        </Link>
      </li>)}
  </ul>
}
function Launchshoe() {
  const { slug } = useParams();
  const shoe = shoes[slug];
  
  if (!shoe) {
    return <h2>Not Found!</h2>
  }

  const { name , img } = shoe ;


  return( 
  <div>
    <h2>{ name }</h2>
    <img src={img } alt={name } /> 
  </div>
  );
}


const shoes = {
  "air-jordan-3-valor-blue": {
    name: "Air Zoom",
    img:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/cec037b0-2bbd-45ca-bdf8-176eeb65daf5/air-zoom-pegasus-37-womens-running-shoe-Jl0bDf.jpg"
  },
  "jordan-mars-270-london": {
    name: "JORDAN MARS 270 LONDON",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  },
  "air-jordan-1-zoom-racer-blue": {
    name: "RACER BLUE",
    img:
      "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"
  }
};
