import React from 'react';
import { useLocation } from 'react-router-dom';

export default function RoutePage2() {
    const location = useLocation();
    return (
        <div>
            <h2>This is Second page</h2>
            <p>{location.state.data}</p>
        </div>
    );
}