import React, { useState } from "react";
import Cateogry from "./cateogry.js";

export default function Gender(props) {
  // const [newdata, setnewdata] = useState(undefined);

  let newdata = props?.obj3?.data?.filters?.primaryFilters?.[3]?.filterValues;
  // console.log(newdata);

  // useEffect(() => {
  //   setnewdata(data?.filters?.primaryFilters?.[3]?.filterValues);
  // }, [data]);
  const [genderinput, setgenderinput] = useState("");
  let searchdata = props.obj3.searchdata;
  let data = props.obj3.data;

  let obj2 = {
    data,
    genderinput,
    searchdata,
  };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Gender filter</h1>
        {newdata &&
          newdata.map((value) => {
            return (
              <>
                <label>{value.id}</label>
                <input
                  type="checkbox"
                  name={`${value.id}`}
                  onClick={(e) => setgenderinput(e.target.name)}
                ></input>
              </>
            );
          })}
      </div>
      <Cateogry obj2={obj2} />
    </>
  );
}
