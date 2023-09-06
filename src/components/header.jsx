 function Header(props) { 
    const {userList, setUserList, initial_User_List, setActiveRowColor, activeRowColor} = props;
    function tableColorShow() {
        setActiveRowColor(!activeRowColor)        
    }
    function sortbyCountry() {  
        const _userList = [...userList]    
        const sortedList = _userList.sort((a, b) =>
        a.location.country.localeCompare(b.location.country));       
        setUserList(sortedList)              
    }  
    function resetRow() {   
        const _userList = [...initial_User_List]  
        const sortedList = _userList.sort((a, b) =>
        a.location.country.localeCompare(b.location.country));         
        setUserList(sortedList)
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