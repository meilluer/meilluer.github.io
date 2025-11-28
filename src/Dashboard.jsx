import React from 'react';
import { donations } from './data';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
  const totalDonations = donations.reduce((acc, donation) => acc + donation.amount, 0);
  const totalNumberOfDonations = donations.length;

  const data = donations.map(donation => ({
    date: donation.date,
    amount: donation.amount,
  }));

  return (
    <div>
      <h1>Donation Dashboard</h1>
      <div>
        <h2>Total Donations: ₹{totalDonations}</h2>
        <h2>Total Number of Donations: {totalNumberOfDonations}</h2>
      </div>
      <div>
        <h2>Donation Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
