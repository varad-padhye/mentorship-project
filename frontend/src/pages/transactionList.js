import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../components/transactionList.css';

const TransactionList = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [transactionType, setTransactionType] = useState('Credit');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAccount, setSelectedAccount] = useState('main account');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const categories = ['income', 'gift', 'others'];
  const accounts = ['main account', 'savings', 'business'];

  return (
    <div className="container2">
      <p>Date of Transaction</p>
      <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'row' }}>
        <Calendar onChange={handleDateChange} value={selectedDate} />
      </div>
      {selectedDate && <p className="mt-4"> Date: {selectedDate.toDateString()}</p>}
      
      <div className="type2">
        <p>Type of Transaction</p>
        <div className="buttons2">
          <button className={transactionType === 'All' ? 'active' : ''} onClick={() => setTransactionType('All')}>All</button>
          <button className={transactionType === 'Credit' ? 'active' : ''} onClick={() => setTransactionType('Credit')}>Credit</button>
          <button className={transactionType === 'Debit' ? 'active' : ''} onClick={() => setTransactionType('Debit')}>Debit</button>
        </div>
      </div>
      
      <div className="dropdown">
        <label>
          <input type="checkbox" checked={showCategoryDropdown} onChange={() => setShowCategoryDropdown(!showCategoryDropdown)} />
          Category
        </label>
        {showCategoryDropdown && (
          <div className="dropdown-menu">
            {categories.map((category) => (
              <div key={category} onClick={() => setSelectedCategory(category)}>
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
      <p>Selected Category: {selectedCategory}</p>
      
      <div className="dropdown">
        <label>Account</label>
        <select value={selectedAccount} onChange={(e) => setSelectedAccount(e.target.value)}>
          {accounts.map((account) => (
            <option key={account} value={account}>{account}</option>
          ))}
        </select>
      </div>
      <p>Selected Account: {selectedAccount}</p>
    </div>
  );
};

export default TransactionList;
