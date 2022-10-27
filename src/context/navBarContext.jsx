import React, { useState } from 'react'
import { createContext, useRef } from 'react'
//conexto para mostrar en el navbar que section esta activa
export const navbarContex = createContext();

export function NavBarContextProvider({ children }) {
    const [inicio, setInicio] = useState(0)
    const [about, setAbout] = useState(0)
    const [portfolio, setPortfolio] = useState(0)
    const [contact, setContact] = useState(0)

    const setPositions = (position, from) => {
        switch (from) {
            case 'inicio':
                setInicio(position);
                break;
            case 'about':
                setAbout(position);
                break;
            case 'portfolio':
                setPortfolio(position);
                break;
            case 'contact':
                setContact(position);
                break;
            default:
                console.log('error');
        }
    }

    return (
        <navbarContex.Provider value={{setPositions,inicio,about,portfolio,contact}}>
            {children}
        </navbarContex.Provider>
    )
}