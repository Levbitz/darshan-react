import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ContactPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [massage, setMessage] = useState("");

  const empty = name === "" || email === "" || massage === "";

  const [result, setResult] = useState({
    name: "",
    email: "",
    massage: "",
  });

  const submitHandler = () => {
    setResult({
      name: name,
      email: email,
      massage: massage,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col l3">
          <div>
            <h5> your name is {result.name}</h5>
            <h5> your email is {result.email}</h5>
            <h5> your massage is {result.massage}</h5>
          </div>
        </div>
        <div className="col l6">
          <form method="GET" action="https://api.sreee.com">
            <input
              onChange={(e) => setName(e.target.value)}
              placeholder="userName"
              name="name"
              type="text"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              name="email"
              type="text"
            />
            <input
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              name="massage"
              type="text"
            />
            <button
              onClick={submitHandler}
              disabled={empty}
              className="btn red"
            >
              Send Msg
            </button>
          </form>
        </div>
        <div className="col l3"></div>
      </div>
    </div>
  );
}

export default ContactPage;
