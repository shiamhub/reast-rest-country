import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <h2>start</h2>
            <nav className='h-nav'>
                <a href="/home">Home</a>
                <a href="/home">Blogs</a>
                <a href="/home">About</a>
                <a href="/home">Us</a>
            </nav>
        </div>
    );
};

export default Header;