import React, { useEffect } from "react";

// Declare the gtag function and dataLayer globally
declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

export const GoogleAnalytics: React.FC = () => {
    useEffect(() => {
        // Load Google Analytics script
        const script = document.createElement("script");
        script.src = "https://www.googletagmanager.com/gtag/js?id=G-K0GQVSTT0J";
        script.async = true;
        document.head.appendChild(script);

        // Initialize Google Analytics
        window.dataLayer = window.dataLayer || [];

        // Define the gtag function
        function gtag(...args: any[]): void {
            window.dataLayer.push(args);
        }

        // Assign gtag to window
        window.gtag = gtag;

        // Call initial gtag functions
        window.gtag("js", new Date());
        window.gtag("config", "G-K0GQVSTT0J");

        return () => {
            // Cleanup on unmount
            if (script.parentNode) {
                document.head.removeChild(script);
            }
        };
    }, []);

    return null;
};

export default GoogleAnalytics;
