'use client'
import React, { createContext, useEffect, useState } from 'react';
import { useLocalStorage } from '../utils/useLocalStorage.js';

// Build Context
const UserContext = createContext();

export const UserSelectionProvider = ({ children, hamburgerOpen, validUser}) => {

  const newTourAvoid = [
    -1,                     //0 tourid
    [0,"",0],               //1 pricetour:["idprices","nombre","subTotalTour"]
    [1,"",0,0],             //2 persons:["idservice","nombre","precio","passengersnumber"]
    [2,"",0,0,0,[0,0,0]],       //3 hotel:["idservice","nombre","precio","preciosolo","preciob2b",["single,double,triple"]]
    [3,"days",0,[]]         //9 daysintour:["idservice","nombre","precio","dates of tour"]
  ]

  

  
  //tours in cart tour: all tours added by customer to cart with all information 
  const [tiCt, settiCt] = useLocalStorage("tiCt",[]);
  //settings in cart tour: settings for each tour added to cart
  const [stTct, setstTct] = useLocalStorage("stTct",[])
  //settings in extras: settings for each extra services for customer package
  const [eXscS, seteXscS] = useLocalStorage("eXscS",[
    [[0,"","",0,0,[0,0,0],0,0]],   //0 hotel:["idservice", "place", "nombreCategory","precio","persons",["single,double,triple"],"date","days"]
    [1,"",0,0,0],           //1 transferin:["idservice","nombre","precio","persons","date"]
    [2,"",0,0,0],           //2 transferout:["idservice","nombre","precio","persons","date"]
    [3,"",0,-1]              //3 language:["idservice","nombre","precio",index]
  ])

  useEffect(() => {
    const storedCartTours = tiCt;
    const storedstTct = stTct
    const storedeXscS = eXscS
    if (storedCartTours) {
      settiCt(storedCartTours);
    }
    if(storedstTct){
      setstTct(storedstTct)
    }
    if(storedeXscS){
      seteXscS(storedeXscS)
    }
  }, []);

  useEffect(() => {
    //settiCt(tiCt)
    settiCt(tiCt);
  }, [tiCt]);

  useEffect(() => {
    //setstTct(stTct)
    setstTct(stTct);
  }, [stTct]);

  useEffect(()=>{
    seteXscS(eXscS);
  },[eXscS])

  //INNER FUNCTIONS
  const checkIfIsAddedTour = (dataSelected) => {
    const result = tiCt.find((item)=>item.id===dataSelected.id)
    if(result){
      const newArray = tiCt.filter(item => item.id !== dataSelected.id);
      settiCt(newArray)
      const deleteSettingsTour = stTct.filter(item => item[0] !== dataSelected.id);
      setstTct(deleteSettingsTour)
    }
    return result
  }

  const addSettingsTour = async(dataSelected) =>{
    newTourAvoid[0]=dataSelected.id
    newTourAvoid[1][1]="subtotal"
    newTourAvoid[1][2]=dataSelected.price
    await setstTct( arr => [...arr, newTourAvoid])
  }

    
  //OUTER FUNCTIONS
  const addTourInCart = async (dataSelected) => {
    if(!checkIfIsAddedTour(dataSelected)){
      await settiCt( arr => [...arr, dataSelected])
      await addSettingsTour(dataSelected)
      return true
    }else{
      return false
    }
  }
  
  const updateSettingsTour = async(idtour, idservice, data) =>{
    // console.log({data})
    const indexTour = await stTct.findIndex(item=>item[0]===idtour)
    const indexService = await stTct[indexTour].findIndex(item=>item[0]===idservice)
    // console.log({"😒":data})
    if(indexService>=0){
      const newData = [...stTct]
      newData[indexTour][indexService] = data
      setstTct(newData)
    }
  }

  const updateSettingsExtras = async(idService, data) => {
    // console.log({oldeXscS:eXscS})
    if(idService===0){
      const dataExtraHotels = [...eXscS]
      dataExtraHotels[0] = data[0]
      seteXscS(dataExtraHotels)
    }else{
      const newData = [...eXscS]
      newData[idService] = data
      seteXscS(newData)
    }
  }
  
  // const updateTourService = (idTour, property,) => {
  //   stTct[property].map((item)=>{
  //     position = item.findIndex((tour)=>tour[0]==idTour)
  //   })
  //   setstTct(prevObjeto => ({
  //     ...prevObjeto,
  //     propiedad: [
  //       'nuevo dato',
  //       ...prevObjeto.propiedad.slice(1)
  //     ],
  //   }));
  // };

  // const addTourService = (property,arrayData) => {
  //   setstTct(previousData => ({
  //     ...previousData,
  //     [property]: [...previousData[property], arrayData],
  //   }));
  // };
  
  

  return (
    <UserContext.Provider
      value={{
        stTct,
        tiCt, 
        settiCt,
        
        addTourInCart,
        updateSettingsTour,
        updateSettingsExtras,
        
        hamburgerOpen,
        validUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;

