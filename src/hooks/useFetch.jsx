import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const [userList, setUserList] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  const initial_User_List = useRef()

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setUserList(data.results)
        initial_User_List.current = data = data.results
        setIsLoading(false)
      })
      .catch((err) => console.log(err));
  }, [url]);

  return { userList, setUserList, isLoading, setIsLoading, initial_User_List };
 
};

export default useFetch;