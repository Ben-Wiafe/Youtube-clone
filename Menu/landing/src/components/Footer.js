import React from "react";
import "./Footer.css";
import chair2 from '../assets/images.jpeg';
import chair3 from '../assets/white-chair-oJdLAD2-600-removebg-preview.png';

import chair from "../assets/images__1_-removebg-preview.png";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
function Footer() {
  return (
    <div className="footer">
      <div className="town">
        <h1 className="header">Why we are best in our Town</h1>
        <p className="review">
          We have 5000+ review and our Customers trust on our Quality product
          and trust own our product. If you order More than $500 we can deliver
          free like Express delivery
        </p>

        <div className="arrow">
          <ArrowForwardOutlinedIcon />
        </div>
      </div>
      <div className="prop1">
        <img src={chair} alt="image name" width='170px' />
        <p className="text">Metal chair</p>
        <h3 className="price">$50</h3>
      </div>
      <div className="prop2">
        <img src={chair2} alt="image name" width='240px' />
        <p className="text">Ergonomic chair</p>
        <h3 className="price">$50</h3>
      </div>
      <div className="prop3">
        <img className="imgChair" src={chair3} alt="image name"  width='300px'/>
        <p className="text">Home plastic chair</p>
        <h3 className="price">$50</h3>
      </div>
    </div>
  );
}

export default Footer;
