// import React from 'react';

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>oppss!!!</h1>

      <Link to="/">
        {" "}
        <button className="btn">Go back to home </button>{" "}
      </Link>
    </div>
  );
};

export default Error;
