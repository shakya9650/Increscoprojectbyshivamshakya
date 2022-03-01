import React from "react";

export default function Products(props) {
  // const [newdata, setnewdata] = useState(undefined);

  let newdata = props?.obj?.data?.products;
  // console.log(newdata);

  // useEffect(() => {
  //   setnewdata(data?.filters?.primaryFilters?.[3]?.filterValues);
  // }, [data]);
  //   console.log(props.obj.brandinput);
  let branddata = props.obj.brandinput;
  let catdatas = props.obj.catdatas;
  let genderdata = props.obj.genderdata;
  let searchdata = props.obj.searchdata;
  console.log(newdata);
  //   console.log(catdatas);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1 style={{ justifyContent: "center" }}>Products List</h1>
        {newdata &&
          newdata
            .filter((value) => {
              if (searchdata === " ") {
                return value;
              } else if (
                value.productName
                  .toLowerCase()
                  .includes(searchdata.toLowerCase())
              ) {
                return value;
              } else if (
                value.brand.toLowerCase().includes(branddata.toLowerCase())
              ) {
                return value;
              } else if (
                value.category.toLowerCase().includes(catdatas.toLowerCase())
              ) {
                return value;
              } else if (
                value.gender.toLowerCase().includes(genderdata.toLowerCase())
              ) {
                return value;
              }
            })

            .map((value) => {
              return (
                <>
                  <div
                    style={{
                      justifyContent: "center",
                      textAlign: "center",
                      height: "30%",
                      width: "30%",
                      border: "1px solid black",
                      margin: "10px",
                      padding: "10px",
                    }}
                  >
                    <img
                      src={`${value.searchImage}`}
                      alt="error"
                      style={{ height: "20%", width: "20%" }}
                    ></img>
                    <h2>{value.brand}</h2>
                    <h4>{value.productName}</h4>
                    <p>RS {value.price}</p>
                  </div>
                </>
              );
            })}
      </div>
    </>
  );
}
