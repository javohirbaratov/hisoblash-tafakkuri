
import { createContext,useContext, useState } from "react";

export const StateContext = createContext();


export const StateProvider = ({value, children}) => {
    const [ball, setBall] = useState([])

    return(
        <StateContext.Provider value={[ball, setBall]}>
            {children}
        </StateContext.Provider>
    )
}

