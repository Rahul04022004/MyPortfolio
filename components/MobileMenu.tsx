import React from 'react';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import type { NavLink, SocialLink } from '../types';
import { CloseIcon } from './Icons';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
    return (
        <div className={`fixed inset-0 z-50 bg-[#111111] md:hidden transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex justify-end items-center h-20">
                    <button
                        onClick={onClose}
                        className="text-neutral-300 hover:text-white"
                        aria-label="Close menu"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>
                <nav className="flex flex-col items-center justify-center h-[calc(100%-80px)] -mt-20">
                    <ul className="text-center space-y-8">
                        {NAV_LINKS.map((link: NavLink) => (
                            <li key={link.name}>
                                <a href={link.href} onClick={onClose} className="text-2xl font-semibold text-neutral-300 hover:text-white transition-colors">
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="flex space-x-6 mt-12">
                        {SOCIAL_LINKS.map((link: SocialLink) => (
                            <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" className="text-neutral-400 transition-colors hover:text-white" onClick={onClose}>
                                <link.icon className="w-6 h-6" />
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default MobileMenu;
