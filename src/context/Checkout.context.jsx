//
//
//
//



import checkoutContext from "./createContext/CreateContext"

export default function CategoryContextProvider({ children }) {

    return (
      <checkoutContext.Provider value={{}}>{children}</checkoutContext.Provider>
    );
}