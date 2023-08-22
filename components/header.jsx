 function Header(props) { 
    const userData = props.data;  
    const setUserData = props.setData;    
    function colorShow() {
        var divColorShow = document.getElementById("colorShow");
        divColorShow.classList.add("colorShow");
    }
    function sortbyCountry() {       
        const sortedList = userData.sort((a, b) =>
        a.location.country.localeCompare(b.location.country));       
        setUserData({results: sortedList} )                  
       }   
   return(
    <>
    <h1>Technical Proof</h1>    
    <header>    
    <div className='header_buttons'>
    <button onClick={colorShow}>Rows Color</button>
    <button onClick={sortbyCountry}>Order Country</button>
    <button>Reset State</button>
    <input placeholder="Filter by country"></input>
    </div>
  </header>
  </>
   )
}
export default Header;