import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <footer
        className={
          isHomePage ? "homePage_footer otherPage_footer" : "otherPage_footer"
        }
      >
        <div className="container">
          <h4>LUXURY RENTALS</h4>
          <p>
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'/termsandconditions'}>Term & Condition</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="container">
          <h4>Contact With Us</h4>
          <p>tel:9859566734</p>
          <p>ProasadKshirsagar98@gmail.com</p>
          <p>All Right Reserved By Prasad Kshirsagar</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
