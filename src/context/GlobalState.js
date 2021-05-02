import React, { createContext, useReducer } from 'react'

// import the Reducer
import AppReducer from './AppReducer'

// Create the initial state
const initialState = {
    transactions: []
}

// Create the Global Context
export const GlobalContext = createContext(initialState);

// Create the provider for the global context
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions for Transactions

    // Delete Existing Transaction Action
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE TRANSACTION',
            payload: id
        });
    }

    // Add New Transaction Action
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD TRANSACTION',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    );
}