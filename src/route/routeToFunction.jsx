import React from 'react';
import { useLocation } from 'react-router-dom';

export default function RouteToFunction() {
    const location = useLocation();
    return (
        <div>
            <h2>This is a page of Function Component</h2>
            <p>{location.state.data}</p>
        </div>
    );
}