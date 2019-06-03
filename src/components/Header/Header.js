import React from "react";

export default function Header() {
  return (
    <Header>
      <div className="container-fluid">
        <div className="row align-items-center" />
        <div className="col text-center">
          <h1 className="text-light text-uppercase display-3 letter-spacing text-slanted">
            {title}
          </h1>
          <p>Hello from Header</p>
        </div>
      </div>
    </Header>
  );
}
