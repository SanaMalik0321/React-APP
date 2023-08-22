function UserComponent(user) { 
  const userData = user.data;      
    return (
    <>  
    <table width="100%"> 
      <thead>
        <tr>
          <th>Photo</th>
          <th>Name</th>
          <th>SurName</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody id="colorShow">
        {userData.map((item, index) => {
          return(
          <tr key={index}>           
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
export default UserComponent;