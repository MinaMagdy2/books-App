import React from 'react'
import './foot.css';

export default function Footr () {
  return (
    <div>
        
<footer className="footer">
<div className="container">
  <div className="row">
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading"><a href="#" className="logo">Vacation Rental</a></h2>
      <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
      <a href="#">Read more <span className="fa fa-chevron-right" style={{fontSize: '11px'}} /></a>
    </div>
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading">Services</h2>
      <ul className="list-unstyled">
        <li><a href="#" className="py-1 d-block">Map Direction</a></li>
        <li><a href="#" className="py-1 d-block">Accomodation Services</a></li>
        <li><a href="#" className="py-1 d-block">Great Experience</a></li>
        <li><a href="#" className="py-1 d-block">Perfect central location</a></li>
      </ul>
    </div>
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading">Tag cloud</h2>
      <div className="tagcloud">
        <a href="#" className="tag-cloud-link">apartment</a>
        <a href="#" className="tag-cloud-link">home</a>
        <a href="#" className="tag-cloud-link">vacation</a>
        <a href="#" className="tag-cloud-link">rental</a>
        <a href="#" className="tag-cloud-link">rent</a>
        <a href="#" className="tag-cloud-link">house</a>
        <a href="#" className="tag-cloud-link">place</a>
        <a href="#" className="tag-cloud-link">drinks</a>
      </div>
    </div>
    <div className="col-md-6 col-lg-3 mb-md-0 mb-4">
      <h2 className="footer-heading">Subcribe</h2>
      <form action="#" className="subscribe-form">
        <div className="form-group d-flex">
          <input type="text" className="form-control rounded-left" placeholder="Enter email address" />
          <button type="submit" className="form-control submit rounded-right"><span className="sr-only">Submit</span><i className="fa fa-paper-plane" /></button>
        </div>
      </form>
      <h2 className="footer-heading mt-5">Follow us</h2>
      <ul className="ftco-footer-social p-0">
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Twitter"><span className="fa fa-twitter" /></a></li>
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Facebook"><span className="fa fa-facebook" /></a></li>
        <li className="ftco-animate"><a href="#" data-toggle="tooltip" data-placement="top" title="Instagram"><span className="fa fa-instagram" /></a></li>
      </ul>
    </div>
  </div>
</div>

</footer>
    </div>
  )
}
