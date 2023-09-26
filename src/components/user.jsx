import { useMemo } from "react";
import SORT_USERS_LIST from '../utils/sortList'
function User(props) { 
  const {userList, setUserList, activeRowColor, filterByCountry} = props;
  const filteredCountry = useMemo(() => SORT_USERS_LIST(userList, filterByCountry), [userList, filterByCountry]);
  const deleteRow = (userId) => {
    const updatedRows = [...userList.filter((row) => row.login.uuid !== userId)];
    setUserList(updatedRows);
  };  
    return (
    <>  
    <table width="100%"> 
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>SurName</th>
          <th>Country</th>          
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="tableColor" className={activeRowColor ? 'activeRowColor' : ''}>
        {filteredCountry && filteredCountry.map((item, index) => {
          return(
          <tr key={index}>           
            <td><img src={item.picture.thumbnail}/></td>
            <td>{item.name.first}</td>
            <td>{item.name.last}</td>
            <td>{item.location.country}</td> 
            <td><button onClick={() => deleteRow(item.login.uuid)}>Delete</button></td>                  
          </tr>
          )
        })}
      </tbody>
    </table>
    </>
    )
}
export default User;

