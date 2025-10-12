import React, { useEffect, useState } from 'react'

const CoinTransactionTable = () => {
    const [transactions, setTransactions] = useState([])

    const formatCompactNumber = (num) => {
        if (num >= 1e9) return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B'
        if (num >= 1e6) return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
        if (num >= 1e3) return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K'
        return num.toString()
    }

    useEffect(() => {
        // Simulate API call with sample data
        const sampleData = [
            {
                id: 1,
                userId: 101,
                type: 'buy',
                quantity: 0.005,
                price: 3000000,
                timestamp: '2025-04-15T12:30:00Z',
            },
            {
                id: 2,
                userId: 102,
                type: 'sell',
                quantity: 0.1,
                price: 180000,
                timestamp: '2025-04-14T09:15:00Z',
            },
            {
                id: 3,
                userId: 103,
                type: 'buy',
                quantity: 50,
                price: 8000,
                timestamp: '2025-04-13T16:45:00Z',
            },
            {
                id: 4,
                userId: 104,
                type: 'sell',
                quantity: 0.05,
                price: 250000,
                timestamp: '2025-04-12T11:10:00Z',
            },
            {
                id: 5,
                userId: 105,
                type: 'buy',
                quantity: 10,
                price: 50000,
                timestamp: '2025-04-11T14:20:00Z',
            },
            {
                id: 6,
                userId: 106,
                type: 'sell',
                quantity: 1.5,
                price: 350000,
                timestamp: '2025-04-10T10:05:00Z',
            },
            {
                id: 7,
                userId: 107,
                type: 'buy',
                quantity: 0.02,
                price: 2900000,
                timestamp: '2025-04-09T17:40:00Z',
            },
            {
                id: 8,
                userId: 108,
                type: 'sell',
                quantity: 200,
                price: 7500,
                timestamp: '2025-04-08T13:25:00Z',
            },
            {
                id: 9,
                userId: 109,
                type: 'buy',
                quantity: 0.07,
                price: 3100000,
                timestamp: '2025-04-07T08:55:00Z',
            },
            {
                id: 10,
                userId: 110,
                type: 'sell',
                quantity: 100,
                price: 9000,
                timestamp: '2025-04-06T19:30:00Z',
            },
            {
                id: 11,
                userId: 111,
                type: 'buy',
                quantity: 75,
                price: 8500,
                timestamp: '2025-04-05T15:10:00Z',
            },
            {
                id: 12,
                userId: 112,
                type: 'sell',
                quantity: 0.3,
                price: 2800000,
                timestamp: '2025-04-04T12:00:00Z',
            },
            {
                id: 13,
                userId: 113,
                type: 'buy',
                quantity: 5,
                price: 120000,
                timestamp: '2025-04-03T10:45:00Z',
            },
        ]
        setTransactions(sampleData)
    }, [])

    return (
        <div className="max-w-[1200px] mx-auto p-4 min-h-screen  ">
            <h2 className="text-2xl  tracking-wider text-center font-bold mb-2 text-white">
                Transaction History
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
                No transaction to show
            </p>
            
        </div>
    )
}

export default CoinTransactionTable
