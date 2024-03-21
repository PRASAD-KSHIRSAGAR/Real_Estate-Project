import React from "react";
import {RiFacebookBoxLine,RiInstagramLine,RiTwitterXFill} from "react-icons/ri";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact">
      <h1>CONTACT US</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aperiam
        expedita quidem commodi deleniti facere, laudantium excepturi tenetur
        voluptatibus velit!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        eligendi et provident rerum dolorem nemo molestias quisquam explicabo ad
        facere vero fugit, sequi veniam at totam? Cumque consectetur deserunt
        quae!
      </p>
      <div className="container">
        <img src="./about.jpg" alt="about" />
        <div className="content">
          <h3>Let's Connect</h3>
          <div>
            <p>Phone</p>
            <span>+91 9850566734</span>
          </div>
          <div>
            <p>Email</p>
            <span>prasadkshirsagar@gmail.com</span>
          </div>
          <div>
            <p>Address</p>
            <span>Chh.Sambhanji Nagar</span>
          </div>
          <ul>
            <Link to={"/"} target="_blank">
              <RiFacebookBoxLine />
            </Link>
            <Link to={"/"} target="-blank">
              <RiInstagramLine />
            </Link>
            <Link to={"/"} target="_blank">
              <RiTwitterXFill />
            </Link>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
