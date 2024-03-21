import React from "react";
import {villas } from "../villas";
import { Link } from "react-router-dom";
//import {RXDot } from "react-icons/rx";
import { RxDot } from "react-icons/rx";
import {IoIosPeople} from "react-icons/io";
import {FaBed,FaBath} from 'react-icons/fa';
import {BiArea} from 'react-icons/bi';
import {} from 'react-icons/rx';

const TopVilas = () => {
  return (
    <>
      <section id="topVillas">
        <h1>Top Pick Villas</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit obcaecati
          minus doloremque velit id minima, optio necessitatibus excepturi nam,
          nesciunt, a ullam repudiandae possimus. Omnis deserunt tempora minus
          necessitatibus repellendus.
        </p>
        <div className="villasContainer">
            {
                villas.slice(0,3).map(element=>{
                    return(
                        <Link className="card" to={`/villa/${element.id}`} key={element.id}>
                            <img src={element.image} alt={element.name}/>
                            <div className="location_text">
                                <span>{element.location}</span>
                                <span><RxDot /></span>
                                <span>{element.category}</span>
                            </div>
                            <div className="title_text">
                                {element.name}
                            </div>
                            <div className="specifications">
                                <div className="spec">
                                    <IoIosPeople />
                                    <span>{element.guests}</span>
                                    Guest
                                </div>
                                <div className="spec">
                                    <FaBed />
                                    <span>{element.bedrooms}</span>
                                    BeadRooms
                                </div>
                                <div className="spec">
                                    <BiArea />
                                    <span>{element.squareMeter}</span>
                                    Area
                                </div>
                                <div className="spec">
                                    <FaBath/>
                                    <span>{element.bathrooms}</span>
                                    bathrooms
                                </div>

                            </div>
                        </Link>
                    )
                })
            }
        </div>
      </section>
    </>
  );
};

export default TopVilas;
