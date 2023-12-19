'use client';
import React, { useState, useEffect } from 'react';
import { Link } from "@nextui-org/react";
import { getLocalStorage, setLocalStorage } from '@/lib/storageHelper';

export default function CookieBanner() {
    // Initialize the state based on the value in local storage
    const [bannerVisible, setBannerVisible] = useState(getLocalStorage("cookie_consent",null) !== 'true');

    useEffect(() => {
        // If bannerVisible is false, update the local storage and analytics
        if (!bannerVisible) {
            const consentValue = getLocalStorage("cookie_consent",null);
            const newValue = consentValue === 'true' ? 'granted' : 'denied';
            // Assuming window.gtag is initialized and set up correctly
            window.gtag && window.gtag("consent", 'update', {
                'analytics_storage': newValue
            });
        }
    }, [bannerVisible]);

    const handleAllowCookies = () => {
        setLocalStorage("cookie_consent", 'true');
        setBannerVisible(false);
    };

    const handleDeclineCookies = () => {
        setLocalStorage("cookie_consent", 'false');
        setBannerVisible(false);
    };

    if (!bannerVisible) {
        return null;
    }

    return (
        <div className={`fixed bottom-0 left-0 right-0 my-10 mx-auto max-w-max md:max-w-screen-sm flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4 bg-gray-700 rounded-lg shadow`}>
            <div className='text-center'>
                <p>We use cookies on our site. By accepting, you agree to our <Link href="/PrivacyPolicy" color="primary">Privacy Policy</Link>.</p>
            </div>
            <div className='flex gap-2'>
                <button className='px-5 py-2 text-gray-300 rounded-md border-gray-900' onClick={handleDeclineCookies}>Decline</button>
                <button className='bg-gray-900 px-5 py-2 text-white rounded-lg' onClick={handleAllowCookies}>Allow Cookies</button>
            </div>   
        </div>
    );
}
