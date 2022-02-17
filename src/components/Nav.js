import React from 'react';
import { Link } from 'react-router-dom';
export default function Nav(props) {
//   const search=(e)=>{
// e.preventDefault()
//     props.textsearch(document.getElementById("serchtext").value)
//   }
  return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex " id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addproduct">Add Product</Link>
        </li>
      
      </ul>
      {/* <form className="form-inline my-2 my-lg-0" onSubmit={search}>
      <input id="serchtext" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    </div>
  </div>
</nav>;
}
