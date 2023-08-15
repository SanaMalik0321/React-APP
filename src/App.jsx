import { useEffect, useState } from 'react'
import './App.css'
import UserComponent from '../components/userComponent'

function App() {
  const api = "https://randomuser.me/api"
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({})

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();     
      setUser(data.results);
      setIsLoading(false)
    } catch (error) {
      console.error(error);
    }
    };

  useEffect(() => {
    fetchData(`${api}/?results=100`);
    }, [])

 

  function LoadingComponent () {
    return (<p>Loading ...</p>)
  }

  return (
  <>  
  {isLoading ? <LoadingComponent/> : <UserComponent data={user}/>}  
  </>
  )
}
export default App
