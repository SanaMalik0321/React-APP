
const SORT_USERS_LIST = (userList, filterByCountry) => {
  let _users = [...userList];
  console.log("Sort list running");
   if (filterByCountry.length >= 1) {
     _users = _users.filter((user) =>
       user.location.country.toLowerCase().includes(filterByCountry.toLowerCase())
     );
   }
   return _users   
}

export default SORT_USERS_LIST
