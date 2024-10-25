import React from 'react';

function Transactions() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-xl font-medium text-gray-100">Transactions | This Month</p>
      </div>
      <div className="flex gap-3 text-sm">
        <span className="bg-gray-700 rounded-2xl text-gray-300 py-1.5 px-4">Payouts (22)</span>
        <span className="bg-blue-600 rounded-2xl text-gray-100 py-1.5 px-4">Refunds (6)</span>
      </div>
    </div>
  );
}

export default Transactions;
