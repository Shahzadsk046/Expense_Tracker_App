import React, { useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {

    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.transactionAmount > 0 ? '+' : '-';
    const transactionType = transaction.transactionAmount > 0 ? "plus" : "minus";

    return (
        <li className={transactionType}>
            {transaction.description}
            <span>{sign}${Math.abs(transaction.transactionAmount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                X
            </button>
        </li>
    )
}
