"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { BaseURL } from "../client/client";
import Image from "next/image";



const fetchFilms =  ()=>{

  return fetch(`${BaseURL}/v23/assignment/carousel-data`,{
    method:"GET"
  })

}



export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1    
  };


  const [films,setFilms] =  useState(null);

  const rootUrl =  films?.rootUrl ? films?.rootUrl   : ""  ;


  useEffect(()=>{
    fetchFilms().then(res=> res.json()).then(res=>{
      setFilms(res?.data);
    })
  },[]);





  
  return (
    <Slider  {...settings} autoplay={Boolean(films)} arrows={false}>
      {films?.carousel?.map(el=>{
        return <div className="h-[75vh]" key={el?._id}>
         <img className="w-full" src={`${rootUrl}/${el?.ratio1}`} alt="img"/>
        </div>
      })}
    </Slider>
  );
}