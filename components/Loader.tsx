import React from 'react'

function Loader() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-green-500 border-solid" />
        </div>
    )
}

export default Loader