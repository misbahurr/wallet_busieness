import React from "react";

function RevenueCard({ title, orderCount, amount }) {
  return (
    <div className="rounded-lg shadow-lg p-6 bg-gray-800 text-gray-100 space-y-4 border border-gray-700">
      <div className="flex items-center text-blue-400 text-lg font-medium">
        {title}
        <div className="pl-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
          </svg>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="font-semibold text-3xl text-white">₹ {amount}</div>

        {orderCount && (
          <div className="flex items-center text-blue-400 hover:text-blue-300 cursor-pointer">
            <div className="underline mr-2">
              {orderCount} orders 
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default RevenueCard;
