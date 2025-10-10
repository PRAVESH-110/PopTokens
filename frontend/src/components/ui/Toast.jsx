// src/components/common/Toast.jsx
import React from 'react'
import { Flip, ToastContainer, toast } from 'react-toastify'

// Flexible toast dispatcher
export const showToast = (message, type = 'default') => {
    switch (type) {
        case 'success':
            toast.success(message)
            break
        case 'error':
            toast.error(message)
            break
        case 'info':
            toast.info(message, {
                style: {
                    background: '#581c87', // Dark purple
                    color: '#ffffff', // White text
                }
            })
            break
        case 'warning':
            toast.warning(message)
            break
        default:
            toast(message)
    }
}

export default function Toast() {
    return (
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Flip}
        />
    )
}
