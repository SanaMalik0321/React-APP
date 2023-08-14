import { useEffect, useState } from 'react'
import './App.css'

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

  function UserComponent() {
    
    console.log("Mount here the user component")
    console.log(user)  
    return (
    <>
    <h1>Technical Proof</h1>
    <header>
      <div className='header_buttons'>
      <button>Rows Color</button>
      <button>Order Country</button>
      <button>Reset State</button>
      <input placeholder="Filter by country"></input>
      </div>
    </header>
      
    <table width="100%"> 
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>SurName</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {user.map((item) => {
          return(
          <tr>           
            <td><img src={item.picture.thumbnail}/></td>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.location.country}</td>
          </tr>
          )
        })}
      </tbody>
    </table>
    </>
    )
    }

  function LoadingComponent () {
    return (<p>Loading ...</p>)
  }

  return (
  <>  
  {isLoading ? <LoadingComponent/> : <UserComponent/>}  
  </>
  )
}
export default App
