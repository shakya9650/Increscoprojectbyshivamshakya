import React, { useState } from "react";
import Products from "./products/product";

export default function Brand(props) {
  // const [newdata, setnewdata] = useState(undefined);

  let newdata = props.obj1.data?.filters?.primaryFilters?.[2]?.filterValues;
  // console.log(newdata);
  let data = props.obj1.data;

  let catdatas = props.obj1.catdata;
  let genderdata = props.obj1.genderdatal;
  let searchdata = props.obj1.searchdata;

  // useEffect(() => {
  //   setnewdata(data?.filters?.primaryFilters?.[3]?.filterValues);
  // }, [data]);
  //   console.log(newdata);
  const [brandinput, setbrandinput] = useState("");
  let obj = {
    data,
    brandinput,
    catdatas,
    genderdata,
    searchdata,
  };
  //   console.log(obj.brandinput);

  return (
    <>
      <div style={{}}>
        <h1>Brand filter</h1>
        {newdata &&
          newdata.map((value) => {
            return (
              <>
                <label>{value.id}</label>
                <input
                  type="checkbox"
                  name={`${value.id}`}
                  onClick={(e) => setbrandinput(e.target.name)}
                ></input>
              </>
            );
          })}
      </div>
      <div>
        <Products obj={obj} />
      </div>
    </>
  );
}
