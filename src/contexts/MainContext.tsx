import React, {createContext, useContext, useState} from 'react'

// @ts-ignore
const MainContext = createContext()
export const useMainContext = () => useContext(MainContext)

// eslint-disable-next-line react/display-name
export default function ({ children }) {
  const [selectedSeats, setSelectedSeats] = useState()
  return <MainContext.Provider value={{selectedSeats, setSelectedSeats}}>{children}</MainContext.Provider>
}
