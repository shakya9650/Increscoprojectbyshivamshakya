import Searchbar from "./filter/search";
import React, { useState, useEffect } from "react";

function Home() {
  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch("https://demo7303877.mockable.io/")
      .then((res) => res.json())
      .then((json) => {
        setdata(json);
        // console.log("response:", json);
      });
  }, []);
  return (
    <>
      <div>
        <Searchbar data={data} />
      </div>
    </>
  );
}

export default Home;
