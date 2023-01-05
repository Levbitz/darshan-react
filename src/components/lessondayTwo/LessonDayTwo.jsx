import React, { useState } from "react";

function LessonDayTwo() {
  const [isAdmin, setIsAdmin] = useState(false);

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <div className="container">
        <input
          value={name}
          type="text"
          placeholder="Enter your Name"
          name=""
          id=""
        />
        <input type="text" placeholder="Enter your Age" name="" id="" />
        <input type="text" placeholder="Enter your Email" name="" id="" />

        <button className="btn red">Join Cheat</button>
      </div>

      <div>
        {isAdmin ? (
          <h4>Your are a Admin</h4>
        ) : (
          <h4> you are not a admin please wait for .....</h4>
        )}

        <button
          onClick={() => setIsAdmin(true)}
          className="btn indigo darken-4"
        >
          Click to become Admin
        </button>
      </div>
    </div>
  );
}

export default LessonDayTwo;
