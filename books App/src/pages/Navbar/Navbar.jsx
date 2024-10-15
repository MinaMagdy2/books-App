import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>

      
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                 <div className="wrap">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col d-flex align-items-center">
              <p className="mb-0 phone"><span className="mailus">Phone no:</span> <a href="#">+00 1234 567</a> or <span className="mailus">email us:</span> <a href="#">emailsample@email.com</a></p>
            </div>
            <div className="col d-flex justify-content-end">
              <div className="social-media">
                <p className="mb-0 d-flex">
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
                  <a href="#" className="d-flex align-items-center justify-content-center"><span className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container">
        <Link className="navbar-brand" to="home">
          Books Recomendation
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* {userData && ( */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="books">
                Books
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="author">
                Author
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="TopSearch">
              TopSearch
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="about">
              About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="contact">
              Contact
              </Link>
            </li>
          </ul>
          {/* )} */}

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* {userData && ( */}
            {/* <li  className="nav-item  d-flex justify-content-center align-items-center">
              <i  className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-twitter"></i>
            </li> */}
            {/* )} */}
            {/* {userData == null && ( */}
            <>
              <li className="nav-item">
                <Link to="login">Login</Link>
              </li>
              <li className="nav-item">
                <Link to="register">Register</Link>
              </li>
           
            </>
            {/* )} */}

            {/* {userData && ( */}
            <span style={{ cursor: "pointer" }}>LogOut</span>
            {/* )} */}
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );


}
