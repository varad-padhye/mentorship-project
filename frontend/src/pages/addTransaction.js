import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/addTransaction.css';

const AddTransaction = ({ isOpen, onClose }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedCategory, setSelectedCategory] = useState(null);

    

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    const categories = [
        "Food",
        "Travel",
        "Shopping",
        "Utilities",
        "Leisure",
        "Health",
        "Education",
        "Gift",
        "Others",
    ];

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
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
                        <div className='type'>
                        <p>type of transaction</p>
                        <button>
                            Credit
                            </button>
                        <button>
                             Debit
                            </button>
                            </div>
                    </div>
                    <div style={{ display: 'flex',  alignItems: 'flex-start', flexDirection:'row' }}>
                        <Calendar onChange={handleDateChange} value={selectedDate} />
                        <textarea placeholder="Description"></textarea>
                        
                    </div>
                    
                    {selectedDate && (
                        <p className="mt-4"> Date: {selectedDate.toDateString()}</p>
                    )}
                    
                    <button onClick={onClose}>Close</button>
                </div>
            </div>
            <div className="category-list">
                <div className="list">
                    <p>select a category</p>
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
