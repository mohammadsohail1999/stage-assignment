"use client";


const fetchFilms = ()=>{


   return fetch(`${BaseURL}/v23/assignment/row-data`,{
        method:"get"
    })


}


import React, { useEffect, useState } from 'react'
import { BaseURL } from '../client/client';
import Card from './Card';
import { useMediaQuery } from '../hooks/useMediaQuery';

const CardListing = () => {



 const [rowData,setRowData] = useState(null);
 const rootUrlHorizontal =  rowData?.data?.rootUrlHorizontal ? rowData?.data?.rootUrlHorizontal  : ""
 const rootUrlVertical =  rowData?.data?.rootUrlVertical ? rowData?.data?.rootUrlVertical  : ""

 

 useEffect(()=>{
    fetchFilms().then(res=>res.json()).then(res=>{
        setRowData(res);
    })
 },[])


 
 const isMobile =  useMediaQuery("(max-width: 768px)");

 




 console.log(rowData,isMobile);




  return (
    // <div className='overflow-hidden'>

    //  <div className='overflow-x-auto'>

    //  {rowData?.data?.rowData?.map(el=>{
    //         return <Card imgPath={`${rootUrlHorizontal}/${el?.horizontal}`} key={el?._id}/>
    //   })}
    //  </div>

      

        

    // </div>
    <div className="mx-5 mt-6">
        <p className="font-bold text-2xl px-4 text-white">Movies</p>
        <div className="p-4 flex space-x-4 overflow-x-auto scrollbar-hide">
          {rowData?.data?.rowData?.map((el) => {
                return (
                  <Card
                  imgPath={`${isMobile ? rootUrlVertical  : rootUrlHorizontal}/${isMobile ? el?.vertical : el?.horizontal}`} key={el?._id}
                  />
                );
              })}
        </div>
      </div>
  )
}

export default CardListing