import React, { useState, useContext } from 'react'

// Import the Global State
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        setDescription("");
        setTransactionAmount(0);

        addTransaction(newTransaction);
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form className="form-control" onSubmit = {onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Details of Transaction" />
                </div>

                <div className="form-control">
                    <label htmlFor="transactionamount">
                        Transaction Amount<br />
                        <span className="tiny">(for expense(enter value with (-) sign))</span>
                    </label>
                    <input
                        type="number"
                        id="transactionamount"
                        value={transactionAmount}
                        onChange={(e) => setTransactionAmount(e.target.value)}
                        placeholder="Dollar Value of Transaction" />
                </div>
                <button className="btn" onSubmit={() => addTransaction()}>Add Transaction</button>
            </form>
        </div>
    )
}
