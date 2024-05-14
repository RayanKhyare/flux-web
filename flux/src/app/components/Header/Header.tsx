"use client";

import React , {useState} from 'react';
import './header.scss';

import Image from 'next/image'

import { Input } from '@headlessui/react'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems , 
        Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const logo = "/images/flux_logo.svg";
const footballIcon = "/images/football_icon.svg";
const newsIcon = "/images/news_icon.svg";
const bellIcon = "/images/bell_icon.svg";

const Header: React.FC = () => {
    const [isLogged, setIsLoggen] = useState(false);
    return (
        <header>

            <Link href="/">
            <Image width={80} height={80} alt="logo" src={logo} />
            </Link>

            <input
                className="rounded-full p-2"
                placeholder="Search"
            />

            <nav>
                    <Menu>
                        <MenuButton><Image width={40} height={40} alt="logo" src={footballIcon} /></MenuButton>
                        {/* <MenuItems anchor="bottom">
                            <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/settings">
                                Settings
                            </a>
                            </MenuItem>
                        </MenuItems> */}
                    </Menu>

                    <Image width={40} height={40} alt="logo" src={newsIcon} />
                    <Image width={40} height={40} alt="logo" src={bellIcon} />

                    {isLogged && 
                        <Popover className="relative">
                            <PopoverButton>Solutions</PopoverButton>
                            <PopoverPanel anchor="bottom" className="flex flex-col">
                                <a href="/analytics">Analytics</a>
                                <a href="/engagement">Engagement</a>
                                <a href="/security">Security</a>
                                <a href="/integrations">Integrations</a>
                            </PopoverPanel>
                        </Popover>
                    }

                    {!isLogged && 
                        <Link href="/login">
                            <h3 className="">Log in</h3>
                        </Link>
                    }

                    {!isLogged && 
                    <Link href="/signup">
                        <button className="">Join us</button>
                    </Link>
                    }
            </nav>


        </header>
    );
};

export default Header;