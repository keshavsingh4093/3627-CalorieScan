// import axios from "axios";
// import { createContext, useState } from "react";

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [isLoggedin, setIsLoggedin] = useState(flase);
//   const [userData, setUserData] = useState(flase);

//   const getUserData = async () => {
//     try {
//       const { data } = await axios.get((backendUrl = +"/api/data"));
//       data.success ? setUserData(data.userData) : toast.error(data, message);
//     } catch (error) {
//       toast.error(data, message);
//     }
//   };
//   const value = {
//     backendUrl,
//     isLoggedin,
//     setIsLoggedin,
//     userData,
//     setUserData,
//     getUserData,
//   };

//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };
