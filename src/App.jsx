import { useState } from 'react'
import './styles/header.css'
import Loading from './components/loading'
import useFetch from './hooks/useFetch'
import { API_URL } from './const/string'
import MainUser from './components/mainUser'
function App() {
  
  const [activeRowColor, setActiveRowColor] = useState(false)
  const {userList, setUserList, isLoading, initial_User_List} = useFetch(`${API_URL}/?results=100`);
  
  return (
   <>
  {isLoading ? (
    <Loading/>
  ):(   
   <MainUser userData={userList} setUserData={setUserList} initialData={initial_User_List.current} activeRowColor={activeRowColor} setActiveRowColor={setActiveRowColor}/>   
  )}  
  </>
  )
}
export default App
