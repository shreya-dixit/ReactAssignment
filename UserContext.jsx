import { createContext } from "react";
const AppContext=createContext();
const AppProvider=({children})=>{
    const userData={
        name:"Blogger,Context API is used",
        message:"Welcome"
    }
    return <AppContext.Provider value={userData}>{children}
    </AppContext.Provider>
}
export {AppContext,AppProvider}