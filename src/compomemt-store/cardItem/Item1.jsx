import React from 'react'
import Navbar from '../../component-home/Navbar'
import Footer from '../../component-home/Footer'
import DataItem1 from './componentItem1/DataItem1';
import dataItem1 from './componentItem1/dataItem1.json'

    

function Item1() {
   
   
  return (
    <>
      
      <DataItem1 dataItem1 = {dataItem1}  />
      <Footer />
    </>
  );
}

export default Item1