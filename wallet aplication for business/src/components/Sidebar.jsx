import React from 'react';
import avatar from '../assets/avatar.png';

function Sidebar() {
    return (
        <div>
            <button 
                data-drawer-target="default-sidebar" 
                data-drawer-toggle="default-sidebar" 
                aria-controls="default-sidebar" 
                type="button" 
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-300 rounded-lg sm:hidden hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-300"
            >
                <span className="sr-only">Open sidebar</span>
                <svg 
                    className="w-6 h-6" 
                    aria-hidden="true" 
                    fill="currentColor" 
                    viewBox="0 0 20 20" 
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path 
                        clipRule="evenodd" 
                        fillRule="evenodd" 
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                    ></path>
                </svg>
            </button>

            <aside 
                id="default-sidebar" 
                className="fixed top-0 left-0 z-40 w-[15rem] h-screen transition-transform -translate-x-full sm:translate-x-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-700 shadow-lg text-gray-100"
                aria-label="Sidebar"
            >
                <div className="h-full px-4 py-6 overflow-y-auto flex flex-col gap-6">
                    {/* User Info */}
                    <div className="flex items-center gap-4 px-4 py-2 rounded-lg bg-gray-800">
                        <img src={avatar} alt="" className="w-12 h-12 rounded-full border-2 border-gray-600 shadow-md" />
                        <div>
                            <p className="text-lg font-semibold">Misbahur</p>
                            <a href="#" className="text-sm font-medium text-gray-400 hover:text-gray-300 underline">Profile</a>
                        </div>
                        <div className="ml-auto text-gray-500">
                            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                    d="M0.846847 1.22185C1.26727 0.801426 1.92516 0.763206 2.38876 1.10719L2.52157 1.22185L8 6.69974L13.4784 1.22185C13.8988 0.801426 14.5567 0.763206 15.0203 1.10719L15.1532 1.22185C15.5736 1.64227 15.6118 2.30016 15.2678 2.76376L15.1532 2.89657L8.83736 9.21236C8.41694 9.63278 7.75905 9.671 7.29545 9.32702L7.16264 9.21236L0.846847 2.89657C0.384384 2.43411 0.384384 1.68431 0.846847 1.22185Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav>
                        <ul className="space-y-2">
                            {[
                                { name: 'Home', iconPath: '...' }, // Add SVG path here
                                { name: 'Orders', iconPath: '...' },
                                { name: 'Products', iconPath: '...' },
                                { name: 'Delivery', iconPath: '...' },
                                { name: 'Marketing', iconPath: '...' },
                                { name: 'Analytics', iconPath: '...' },
                                { name: 'Payouts', iconPath: '...' },
                                { name: 'Audience', iconPath: '...' },
                                { name: 'Appearance', iconPath: '...' },
                                { name: 'Plugins', iconPath: '...' },
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <a href="#" className="flex items-center p-3 rounded-lg text-gray-300 hover:bg-gray-600 hover:text-white transition-all duration-200">
                                        <svg className="w-5 h-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                                            <path d={item.iconPath}></path>
                                        </svg>
                                        <span className="font-medium">{item.name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Credits Section */}
                   
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;
