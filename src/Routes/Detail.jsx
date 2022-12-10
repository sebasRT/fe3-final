import React, { useContext } from 'react'
import {useParams } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
import Form from '../Components/Form';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const params = useParams();
  const dentisUrl = `https://jsonplaceholder.typicode.com/users/${params.id}`
  const {theme} = useContext(ContextGlobal);
  const [userData, setUserData] = useState({
    name: "",
    email:"",
    phone:"",
    website:""
})

  useEffect(()=>{
    axios(dentisUrl)
    .then(data=> {const dataUser = data.data;
    setUserData({
      name:dataUser.name,
      email: dataUser.email,
      phone: dataUser.phone,
      website: dataUser.website
    })
  })
    } , [])
    const addFav = ()=>{
      // Aqui iria la logica para agregar la Card en el localStorage
    }
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className="main detailsClass">

      <h2>Detail Dentist {params?.id} </h2>
      <div className='details'>

      
        {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
        <div className="detailsCard" style={{backgroundColor: theme.cardColor}}>
        <img src= "../images/doctor.jpg" className="docImage" alt=''/>
        <p>{userData.name}</p>
        <p>{userData.email}</p>
        <p>{userData.phone}</p>
        <p>{userData.website}</p>

        {/* <button onClick={addFav} className="favButton"
        style={{background: theme.background, color: theme.color, borderTopStyle: 'groove'}}>Add fav</button> */}
        </div>
        <div className='formContainer'>
          <h5>Contact this dentist</h5>
        <Form/>

        </div>

      </div>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </div>
  )
}

export default Detail