import Navbar from './Navbar';
import '../components/dashboard.css';
import React, { useState, useEffect } from 'react';
import AddTransaction from './addTransaction';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('http://your-backend-api/transactions')
            .then(response => response.json())
            .then(data => setTransactions(data))
            .catch(error => console.error('Error fetching transactions:', error));
    }, []);

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const togglePopup = () => {
        console.log("Toggling popup:", !isPopupOpen);
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={`Dashboard ${isPopupOpen ? 'blur-background' : ''}`}>
            <Navbar />
            <div className="money">
                <div className="card"><h1 className='label'>Current Balance</h1></div>
                <div className="card"><h1 className='label'>Money Spent</h1></div>
                <div className="card"><h1 className='label'>Yearly Spent</h1></div>
            </div>
            <div className="progress-container">
                <p className="goal-label">Monthly Expenditure Goal</p>
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>
            </div>
            <button className="add-transaction-button" onClick={togglePopup}>+</button>
            <div className="container">
                <div className="tabs">
                    <button className={activeTab === 'all' ? 'active' : ''} onClick={() => switchTab('all')}>All</button>
                    <button className={activeTab === 'credited' ? 'active' : ''} onClick={() => switchTab('credited')}>Credited</button>
                    <button className={activeTab === 'debited' ? 'active' : ''} onClick={() => switchTab('debited')}>Debited</button>
                </div>

                <div className="list">
                    {activeTab === 'all' && (
                        <div>
                            {transactions.length > 0 ? (
                                transactions.map((transaction, index) => (
                                    <div key={index} className="transaction-card">
                                        <div className="transaction-icon"></div>
                                        <div className="transaction-info">
                                            <p className="transaction-name">{transaction.name}</p>
                                            <p className="transaction-category">{transaction.category} | {transaction.account}</p>
                                        </div>
                                        <p className="transaction-amount">₹ {transaction.amount}</p>
                                    </div>
                                ))
                            ) : (
                                <p>No transactions found.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <AddTransaction isOpen={isPopupOpen} onClose={togglePopup} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
