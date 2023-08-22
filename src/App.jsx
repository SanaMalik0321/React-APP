import { useEffect, useState } from 'react'
import './App.css'
import UserComponent from '../components/userComponent'
import Header from '../components/header'
import Loading from '../components/loadingComponent'

function App() {
  const api = "https://randomuser.me/api"
  const [isLoading, setIsLoading] = useState(true)
  const [userData, setUserData] = useState({})

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();     
      setUserData(data);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData(`${api}/?results=1000`);
  }, [])

 
  return (
  <>  
  {isLoading ? (
    <Loading/>
  ) : (
    <>
    <Header data={userData.results} setData={setUserData}/>
    <UserComponent data={userData.results} setData={setUserData}/>
    </>
  )}  
  </>
  )
}
export default App
