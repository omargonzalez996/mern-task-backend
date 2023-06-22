import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

function ProtectedRoute() {
    const { loading, isAuthenticated } = useAuth()
    //console.log(`loading:${loading} || auth:${isAuthenticated}`);

    if (loading) return <h1>Loading...</h1>;
    if (!isAuthenticated && !loading) return <Navigate to='/login' replace />;
    return <Outlet />;
}

export default ProtectedRoute 