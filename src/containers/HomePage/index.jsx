import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers, makeSelectTests } from "./selectors";
import { setUsers } from "./actions";
import Axios from 'axios';



const userSelector = createSelector(makeSelectUsers, (users) => ({
    users,
  }));

  
const testSelector = createSelector(makeSelectTests, (tests) => ({
    tests,
  }));

const actionDispatch=(dispatch)=>({
  setUsers: (users)=>dispatch(setUsers(users))
})


export default function HomePage(){
    const { users } = useSelector(userSelector);
    const { tests } = useSelector(testSelector);
    const {setUsers}=actionDispatch(useDispatch());
   
    console.log(tests);

    const fetchUsers=async () =>{
      const response = await Axios.get("https://reqres.in/api/users").catch(
        (err) => {
          console.log("Err: ", err);
        }
      );
      //console.log(response.data.data);
      setUsers(response.data.data);
    }

    useEffect(() => {
      fetchUsers();
    }, [])

    console.log(users);

    return (
        <div>
            Hello from HomePage
        </div>
    )
}
