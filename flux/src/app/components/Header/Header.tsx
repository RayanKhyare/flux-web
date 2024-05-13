import React from 'react';
import './header.scss';

import Image from 'next/image'

import { Input } from '@headlessui/react'
import Link from 'next/link'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const logo = "/images/flux_logo.svg";
const footballIcon = "/images/football_icon.svg";

const Header: React.FC = () => {
    return (
        <header>

            <Link href="/">
            <Image width={100} height={100} alt="logo" src={logo} />
            </Link>

            <Input name="full_name" type="text" />

            <nav>
                    <Menu>
                        <MenuButton><Image width={40} height={40} alt="logo" src={footballIcon} /></MenuButton>
                        <MenuItems anchor="bottom">
                            <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/settings">
                                Settings
                            </a>
                            </MenuItem>
                            <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/support">
                                Support
                            </a>
                            </MenuItem>
                            <MenuItem>
                            <a className="block data-[focus]:bg-blue-100" href="/license">
                                License
                            </a>
                            </MenuItem>
                        </MenuItems>
                    </Menu>
            </nav>
        </header>
    );
};

export default Header;