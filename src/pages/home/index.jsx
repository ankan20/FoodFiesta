import React, { useState } from 'react'
import Header from '../../components/header';
import TabOptions from '../../components/tabOptions';
import Footer from '../../components/footer';
import Nightlife from '../../components/nightLife';
import DiningOut from '../../components/diningOut';
import Delivery from '../../components/delivery';


const HomePage = () => {
  const [activeTab,setActiveTab] =useState("Delivery");
  


  const getCorrectScreen =(tab)=>{
    if(tab=="Delivery"){
      return <Delivery />
    }
    else if(tab == "Dining Out"){
      return <DiningOut />
    }
    else if(tab == "Nightlife"){
      return <Nightlife />
    }
    else {
      return <DiningOut/>
    }
  }

  
  return (
    <>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab}/>
      {getCorrectScreen(activeTab)}
      <Footer/>
    </>
  )
}

export default HomePage;
