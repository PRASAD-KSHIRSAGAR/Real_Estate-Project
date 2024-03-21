import React from "react";
import { Link } from "react-router-dom";
import {RiFacebookBoxLine,RiInstagramLine,RiTwitterXFill  } from 'react-icons/ri';
const Contact = () => {
  return (
    <section id="contact_Mini">
      <div className="super_container">
        <div className="container_1">
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
              <RiInstagramLine  />
            </Link>
            <Link to={"/"} target="_blank">
              <RiTwitterXFill />
            </Link>
          </ul>
        </div>

        <div className="container_2">
            <h3>We'd loved to here from you</h3>
            <form>
                <div>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Email" />
                </div>
                <textarea rows="4" placeholder="Your massage...">
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
