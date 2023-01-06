import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
      <h5>Welcome to My Shop</h5>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pdtList && (
          <div>
            {pdtList.map((pdt) => {
              const { id, title, image, price } = pdt;
              return (
                <div key={id} className="col l3 s6">
                  <Link to={`/details/${id}`}>
                    <img height={100} width={100} src={image} alt="" />
                    <p>{title.slice(0, 15)}...</p>
                    <p>{price}</p>
                  </Link>
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
