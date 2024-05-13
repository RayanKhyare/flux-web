import React from 'react';
import './header.scss';
import Image from 'next/image'
const logo = "/images/flux_logo.svg";

const Header: React.FC = () => {
    return (
        <header>
            <Image width={200} height={200} alt="logo" src={logo} />
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;