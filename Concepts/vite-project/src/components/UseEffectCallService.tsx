import React, { useEffect, useState } from "react";
import DisplayUser from "./DisplayUser";
import SearchBox from "./SearchBox";
import axios from "axios";

const UseEffectCallService = () => {
  const [filterData, setFilterData] = useState(""); // Ensure filterData is initialized as a string

  const [userData, setuserData] = useState([]);

  useEffect(() => {
    console.log("Called useEffect");

    const fetchUsers = async () => {
      try {
        //const res = await fetch("https://dummyjson.com/users");
        //const data = await res.json();

        const { data } = await axios.get("https://dummyjson.com/users");
        console.log(data);
        const allUsers = data.users;
        if (filterData) {
          const filteredUsers = allUsers.filter((user) => {
            const filterDataUpper = filterData.toUpperCase();
            return (
              user.firstName.toUpperCase().includes(filterDataUpper) ||
              user.lastName.toUpperCase().includes(filterDataUpper)
            );
          });
          console.log("Filtered Data : " + filteredUsers.length);
          setuserData(filteredUsers);
        } else {
          setuserData(allUsers);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (typeof filterData === "string") {
      fetchUsers();
    }
  }, [filterData]);
  console.log(userData.length);
  return (
    <>
      {userData.length > 0 && (
        <div>
          <SearchBox filterData={setFilterData} />
          <DisplayUser userdetail={userData} />
        </div>
      )}
    </>
  );
};

export default UseEffectCallService;
