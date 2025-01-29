import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/addTransaction.css';

const AddTransaction = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [transactionType, setTransactionType] = useState('Credit');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    
    const categories = [
        "Food", "Travel", "Shopping", "Utilities", "Leisure",
        "Health", "Education", "Gift", "Others"
    ];

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleAddTransaction = () => {
        const transactionData = {
            name,
            amount: parseFloat(amount),
            category: selectedCategory,
            date: selectedDate.toISOString(),
            description,
            transactionType,
        };

        fetch('http://your-backend-api/transactions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(transactionData),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add transaction');
            }
            return response.json();
        })
        .then(data => {
            console.log('Transaction added successfully', data);
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                onClose();
            }, 2000);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    };

    if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Add a Transaction</h2>
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                    <div className='type'>
                        <p>Type of transaction</p>
                        <button className={transactionType === 'Credit' ? 'active' : ''} onClick={() => setTransactionType('Credit')}>Credit</button>
                        <button className={transactionType === 'Debit' ? 'active' : ''} onClick={() => setTransactionType('Debit')}>Debit</button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
                        <Calendar onChange={handleDateChange} value={selectedDate} />
                        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                    </div>
                    {selectedDate && <p className="mt-4"> Date: {selectedDate.toDateString()}</p>}
                    <button onClick={onClose}>Close</button>
                    <button onClick={handleAddTransaction}>Add</button>
                </div>
            </div>
            {showSuccessMessage && (
                <div className="success-popup">
                    <p>Transaction added successfully!</p>
                </div>
            )}
            <div className="category-list">
                <div className="list">
                    <p>Select a category</p>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={selectedCategory === category ? 'active' : ''}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AddTransaction;
