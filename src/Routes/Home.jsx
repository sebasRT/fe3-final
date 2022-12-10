import React from 'react'
import Card from '../Components/Card';
import { useContext } from 'react';
import { ContextGlobal } from '../Components/utils/global.context';
// import Card from '../Components/Card'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Home = () => {

  const {theme,users}= useContext(ContextGlobal);

  return   (
  <main className="main" style={{background: theme.background, color: theme.color}}>
  <h1>Home</h1>
  <div className='card-grid'>
    {/* Aqui deberias renderizar las cards */}
    {users.map(user => (<Card name={user.name} key={user.id} id={user.id} username={user.username}></Card>))}
  </div>
</main>
)
}

export default Home