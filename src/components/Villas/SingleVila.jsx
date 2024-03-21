import React from "react";
import { villas } from "../../villas";
import { useParams } from "react-router-dom";
const SingleVila = () => {
  const { id } = useParams();
  const numberId = Number(id);
  const filterVilla = villas.filter((villas) => villas.id === numberId)[0];

  return (
    <>
      <section id="singleVilla" className="page">
        <div className="container">
          <h3>{filterVilla.name}</h3>
          <div className="images">
            <div className="villaImg">
              <img src={filterVilla.image} alt={filterVilla.name} />
            </div>
            <div className="otherImgs">
              <div>
                <img src="/landing.jpg" alt="landing" />
                <img src="/people.jpg" alt="people" />
              </div>
              <div>
                <img src="/people2.jpg" alt="people2" />
                <img src="/villa10.jpg" alt="Villa" />
              </div>
            </div>
          </div>
          <h4>{filterVilla.location}</h4>
          <p>
            {filterVilla.bathrooms} Bathrooms/ {filterVilla.bedrooms} BedRoom/{" "}
            {filterVilla.guests} Guest / {filterVilla.squareMeter} Area
          </p>
          <div className="checkin_out">
            <h5>
              Check In: <span>9:00 AM</span>
            </h5>
            <h5>
              Check Out: <span>11:00 PM</span>
            </h5>
          </div>
          <div className="location">
            <h4>Location</h4>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120607.2808949118!2d72.75461560864393!3d19.152460935267406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a4045ec5eb%3A0x7cdfb43dfabda6cf!2sLuxury%20villa%20104!5e0!3m2!1sen!2sin!4v1711005768390!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

          </div>
        </div>
      </section>
    </>
  );
};

export default SingleVila;
