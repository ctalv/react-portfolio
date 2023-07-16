// A single Header component that appears on multiple pages

// parent of Navigation

import React from 'react';
import Navigation from './Navigation';

export default function Header() {
    return (
        <div>
            <h1>Claire Alverson</h1>
            <Navigation/>
        </div>
    );
}