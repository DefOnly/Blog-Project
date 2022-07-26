import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Misssing = () => {
  return (
    <>
      <Nav />
      <main className="Missing">
        <h2 className="labels">Page Not Found</h2>
        <p className="labels">Well, that's disappointing</p>
        <p>
          <Link to="/">Visit Our Homepage</Link>
        </p>
      </main>
    </>
  );
};

export default Misssing;
