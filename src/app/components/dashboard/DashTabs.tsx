"use client";
import { useState, useEffect } from 'react';
// import "flowbite/dist/flowbite.min.js";


interface NetworkCardProps {
    tabs: any;
    setActiveTab: any;
    activeTab: any;
    headinNav: any;
}

export default function DashTabs({ tabs, setActiveTab, activeTab, headinNav }: NetworkCardProps) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        setShowContent(false);
        const timeout = setTimeout(() => {
            setShowContent(true);
        }, 200);
        return () => clearTimeout(timeout);
    }, [activeTab]);

    return (
        <div className="w-full">
            <div className="flex gap-3 mainNav">
                {tabs.map((tab: any) => (
                    <button
                        key={tab.id}
                        className={`py-2 px-4 ${
                            activeTab === tab.id
                                ? 'border-b-2 border-blue-500 text-blue-500 activeNav'
                                : 'text-gray-600 nonActiveNav'
                        } focus:outline-none`}
                        onClick={(): any => setActiveTab(tab.id)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className="p-4">
                <h1 className="trendingHeading my-3">{headinNav}</h1>
                <div
                    className={`mt-3 navContent transition-opacity duration-300 ${
                        showContent ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {tabs[activeTab].content}
                </div>
            </div>
        </div>
    );
}
