import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PdtDetailPage() {
  const { id } = useParams();
  const [singlePd, setSInglePdt] = useState("");

  const api = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    fetch(api)
      .then((res) => res.json())
      .then((data) => setSInglePdt(data));
  }, [id]);

  return (
    <div>
      <div className="container">
        <h4>Details</h4>

        <div>
          {setSInglePdt ? (
            <div>
              <h1>{singlePd.title}</h1>
              <img width={200} height={200} src={singlePd.image} alt="" />
              <h5>{singlePd.price} rupees</h5>
              <p>{singlePd.description}</p>
            </div>
          ) : (
            <h3>loading</h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default PdtDetailPage;
