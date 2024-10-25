import React from 'react'
import Tabletop from './Tabletop'
import { orderData } from './data'

function Table() {
    return (
        <div className="bg-gray-800 px-5 pt-4 pb-3 rounded-lg grid gap-4">
            <Tabletop />
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-400">
                    <thead className="text-sm font-semibold uppercase text-gray-500 bg-gray-700">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Order ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Transaction ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Refund Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-right">
                                Order Amount
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((order) => (
                            <tr key={order.id} className="border-b border-gray-700 hover:bg-gray-600 transition-colors">
                                <th scope="row" className="px-6 py-4 font-medium text-blue-400 whitespace-nowrap">
                                    #{order.id}
                                </th>
                                <td className="px-6 py-4 flex items-center gap-2">
                                    {order.status === "Successful" && <div className="h-2.5 w-2.5 rounded-full bg-green-500"/>}
                                    {order.status === "Processing" && <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"/>}
                                    {order.status === "Failed" && <div className="h-2.5 w-2.5 rounded-full bg-red-500"/>}
                                    <span className="text-gray-300">{order.status}</span>
                                </td>
                                <td className="px-6 py-4 text-gray-400">
                                    {order.transactionID}
                                </td>
                                <td className="px-6 py-4 text-gray-400">
                                    {order.refundDate}
                                </td>
                                <td className="px-6 py-4 text-right text-gray-300">
                                    {order.amount}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table
