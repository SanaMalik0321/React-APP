 function Header(props) { 
    const {userData, setUserData, initialData, setActiveRowColor} = props;
    function tableColorShow() {
        setActiveRowColor(true)       
    }
    function sortbyCountry() {  
        const _userList = [...userData]    
        const sortedList = _userList.sort((a, b) =>
        a.location.country.localeCompare(b.location.country));       
        setUserData(sortedList)              
    }  
    function resetRow() {   
        const _userList = [...initialData]  
        const sortedList = _userList.sort((a, b) =>
        a.location.country.localeCompare(b.location.country));         
        setUserData(sortedList)
    }
   return(
    <>
    <h1>Technical Proof</h1>    
    <header>    
    <div className='header_buttons'>
    <button onClick={tableColorShow}>Rows Color</button>
    <button onClick={sortbyCountry}>Order Country</button>
    <button onClick={resetRow}>Reset State</button>
    <input placeholder="Filter by country"></input>
    </div>
  </header>
  </>
   )
}
export default Header;