import { createContext, useReducer } from "react";
import appReducer from "./AppReducer";
import { v4 as uuid } from 'uuid';

const initialState = {
    tasks: [
        {
            title: "hola one",
            id: '1',
            description: "some description",
            done: false,
        },
        {
            title: "hola two",
            id: '2',
            description: "some description",
            done: false,
        },
    ],
};


export const GlobalContext = createContext(initialState);


export const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(appReducer, initialState)

    const addTask = task => dispatch({ type: 'ADD_TASK', payload: {...task, id: uuid(), done: false} })

    const deleteTask = id => dispatch({ type: 'DELETE_TASK', payload: id})

    const updateTask = task => dispatch({ type: 'UPDATE_TASK', payload: task})

    const toggleTask = id => dispatch({ type: 'TOGGLE_TASK', payload: id})

    return (
        <GlobalContext.Provider value={{...state, addTask, deleteTask, updateTask, toggleTask}}>
            {children}
        </GlobalContext.Provider>
    );
};
