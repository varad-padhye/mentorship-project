import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/addTransaction.css';

const AddTransaction = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Add a Transaction</h2>
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="number" placeholder="Amount" />
                    <div>
                        <label>
                            <input type="radio" name="transactionType" value="credit" /> Credit
                        </label>
                        <label>
                            <input type="radio" name="transactionType" value="debit" /> Debit
                        </label>
                    </div>
                    <div>
                        <Calendar onChange={handleDateChange} value={selectedDate} />
                    </div>
                    <select>
                        <option value="food">Food</option>
                        <option value="travel">Travel</option>
                        <option value="shopping">Shopping</option>
                        <option value="utilities">Utilities</option>
                        <option value="leisure">Leisure</option>
                        <option value="health">Health</option>
                        <option value="education">Education</option>
                        <option value="gift">Gift</option>
                        <option value="others">Others</option>
                    </select>
                    <textarea placeholder="Description"></textarea>
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};

export default AddTransaction;
