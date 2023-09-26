import { useState } from 'react'
import './styles/header.css'
import Loading from './components/loading'
import useFetch from './hooks/useFetch'
import { API_URL } from './const/string'
import Header from './components/header'
import User from './components/user'
function App() {
  
  const [activeRowColor, setActiveRowColor] = useState(false)
  const [filterByCountry, setFilterByCountry] = useState("");
  const {userList, setUserList, isLoading, initial_User_List} = useFetch(`${API_URL}/?results=100`);
  const DATA_USER = {
    filterByCountry: filterByCountry,
    setFilterByCountry: setFilterByCountry,
    userList: userList,
    setUserList: setUserList,
    isLoading: isLoading,
    initial_User_List: initial_User_List.current,
    activeRowColor: activeRowColor,
    setActiveRowColor: setActiveRowColor
  };  
  
  if (isLoading) return <Loading/>
  return (
    <>
       <Header {...DATA_USER}/>
       <User {...DATA_USER} />
    </>
  )   
  
}
export default App
