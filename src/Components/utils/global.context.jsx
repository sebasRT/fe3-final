import axios from "axios";
import { useReducer } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import favorites from "./favorites";

const url = "https://jsonplaceholder.typicode.com/users"
const themes = {
  light:{
    color: 'black',
    background: 'white',
    cardColor:'rgb(240, 240, 240)',
    secondBackground: 'rgb(235, 235, 235)',
    img:"./LogoHeader.svg",
  },
  dark: {
    color: 'white',
    background: 'rgb(30, 30, 30)',
    cardColor: 'rgb(50, 50, 50)',
    secondBackground:'rgb(175, 0, 0)',
    img: "https://dh-frontend.cdn.prismic.io/dh-frontend/f197059f-7cf3-4a35-a182-314ea08cb560_LogoHeader.svg"
  }
};
const routes = {
  Home: "/",
  Contact: "/contact",
  Favs: "/favs",
}

const reducer = (state = themes.dark,action = "ChangeTheme")=>{
  if (action.type === "ChangeTheme") {
    if (state === themes.dark) {
      state = themes.light
    }else{state = themes.dark}
    }
  return state;
}
export const ContextGlobal = createContext();

export const ContextProvider = ({children}) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [useFavDocs,setUseFavDocs] =  useState(favorites())
  const [users, setUsers]= useState([]);

  
  useEffect(()=>{
    axios(url)
    .then(data => setUsers(data.data))
  },[])

  // const [theme , setTheme]= useState(themes.dark)
  const [theme, dispacth]= useReducer(reducer,reducer());

  // const handleChangeTheme = () => {
  // if (theme === themes.dark) setTheme(themes.light)
  // if (theme === themes.light) setTheme(themes.dark)
  // }
  const handleChangeTheme = () =>{
  dispacth({type: "ChangeTheme"})
  }
// const providerValue = useMemo(()=>({theme,handleChangeTheme}),[theme,handleChangeTheme])
  
  return (
    
    <ContextGlobal.Provider value={{theme,handleChangeTheme,routes,useFavDocs,setUseFavDocs,users}}>  
      {children}
    </ContextGlobal.Provider>
  );
};
