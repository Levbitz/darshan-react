import React, { useState, useEffect } from "react";

function Products() {
  const [pdtList, setPdtList] = useState([]);
  const [loading, setLoading] = useState(true);

  const myApi = "https://fakestoreapi.com/products";

  useEffect(() => {
    setLoading(true);
    fetch(myApi)
      .then((resoponse) => resoponse.json())
      .then((data) => {
        //console.log(data);
        setPdtList(data);
      });
    setLoading(false);

    // .then((res) => res.json())
    // .then((json) => console.log(json));
    // effect;
    // return () => {
    //   cleanup
    // };
  }, []);

  return (
    <div className="row">
      <h3>Welcome to My Shop</h3>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pdtList && (
          <div>
            {pdtList.map((pdt) => {
              const { id, title, image, price } = pdt;
              return (
                <div className="col l3 s6">
                  <img height={100} width={100} src={image} alt="" />
                  <p>{title.slice(0, 15)}...</p>
                  <p>{price}</p>
                </div>
              );
            })}
          </div>
        )
      )}
    </div>
  );
}

export default Products;
