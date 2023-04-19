import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TestPage() {
    const location = useLocation();
    return (
        <div>
            <h2>This is test page</h2>
            <p>{location.state.data}</p>
        </div>
    );
}