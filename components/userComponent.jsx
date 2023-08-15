function UserComponent(props) { 
  let userData = props.data; 
    function colorShow() {
      var element = document.getElementById("colorShow");
      element.classList.add("colorShow");
    }    
    return (
    <>
    <h1>Technical Proof</h1>
    <header>
      <div className='header_buttons'>
      <button onClick={colorShow}>Rows Color</button>
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