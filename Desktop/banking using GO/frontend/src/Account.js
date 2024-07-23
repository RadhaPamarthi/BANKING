import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Account() {
    const [account, setAccount] = useState(null);

    useEffect(() => {
        const fetchAccount = async () => {
            try {
                const response = await axios.get('http://localhost:8000/account');
                setAccount(response.data);
            } catch (error) {
                alert('Error fetching account details');
            }
        };
        fetchAccount();
    }, []);

    return (
        <div>
            <h2>Account Details</h2>
            {account ? (
                <div>
                    <p>Account Number: {account.accountNumber}</p>
                    <p>Balance: {account.balance}</p>
                </div>
            ) : (
                <p>No account details available.</p>
            )}
        </div>
    );
}

export default Account;
