import { createContext } from "react";

export const GlobalContext = createContext({
    tasks: [
    {
        title: 'hola one',
        id: 1
    },
    {
        title: 'hola two',
        id: 2
    }
    ]
})