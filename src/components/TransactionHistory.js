import React, { useContext } from 'react'

// import Transaction Component
import { Transaction } from './Transaction';

// import the Global State
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {

    const { transactions } = useContext(GlobalContext);

    console.log(transactions)

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>
        </div>
    )
}
