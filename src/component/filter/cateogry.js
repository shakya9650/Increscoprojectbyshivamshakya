import React, { useState } from "react";
import Brand from "./brand";
export default function Cateogry(props) {
  // const [newdata, setnewdata] = useState(undefined);

  let newdata = props?.obj2?.data?.filters?.primaryFilters?.[5]?.filterValues;
  // console.log(newdata);

  // useEffect(() => {
  //   setnewdata(data?.filters?.primaryFilters?.[3]?.filterValues);
  // }, [data]);
  //   console.log(newdata);
  let data = props.obj2.data;
  let genderdata = props.obj2.genderinput;
  let searchdata = props.obj2.searchdata;
  const [catdata, setcatdata] = useState("");
  let obj1 = {
    data,
    catdata,
    genderdata,
    searchdata,
  };

  return (
    <>
      <div style={{}}>
        <h1>Cateogry filter</h1>
        {newdata &&
          newdata.map((value) => {
            return (
              <>
                <label>{value.id}</label>
                <input
                  type="checkbox"
                  name={`${value.id}`}
                  onClick={(e) => setcatdata(e.target.name)}
                ></input>
              </>
            );
          })}
      </div>
      <Brand obj1={obj1} />
    </>
  );
}
