import Navbar from './Navbar';
import '../components/dashboard.css';
import React, { useState } from 'react';
import AddTransaction from './addTransaction';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('all');
    const [isPopupOpen, setIsPopupOpen] = useState(false); // State for popup visibility

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    return (
        <div className={`Dashboard ${isPopupOpen ? 'blur-background' : ''}`}>
            <Navbar></Navbar>
            <div className="money">
                <div className="card">
                    <h1 className='label'>current balance</h1>
                </div>
                <div className="card">
                    <h1 className='label'>money spent</h1>
                </div>
                <div className="card">
                    <h1 className='label'>yearly spent</h1>
                </div>
            </div>
            <div className="progress-container">
                <p className="goal-label">monthly expenditure goal</p>
                <div className="progress-bar">
                    <div className="progress"></div>
                    <div className="progress-info">
                        <span className='exp'> </span>
                        <span></span>
                    </div>
                </div>
            </div>
            <button className="add-transaction-button" onClick={togglePopup}>
                Add Transaction
            </button>
            <div className="container">
                <div className="tabs">
                    <button
                        className={activeTab === 'all' ? 'active' : ''}
                        onClick={() => switchTab('all')}
                    >
                        All
                    </button>
                    <button
                        className={activeTab === 'credited' ? 'active' : ''}
                        onClick={() => switchTab('credited')}
                    >
                        Credited
                    </button>
                    <button
                        className={activeTab === 'debited' ? 'active' : ''}
                        onClick={() => switchTab('debited')}
                    >
                        Debited
                    </button>
                </div>

                <div className="list">
                    {activeTab === 'all' && <p>All transactions will appear here.</p>}
                    {activeTab === 'credited' && <p>Credited transactions will appear here.</p>}
                    {activeTab === 'debited' && <p>Debited transactions will appear here.</p>}
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-container">
                        <AddTransaction onClose={togglePopup} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
