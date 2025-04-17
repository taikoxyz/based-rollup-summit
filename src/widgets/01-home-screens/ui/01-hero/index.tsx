import React, { useEffect, useState } from "react";
import css from "./hero.module.scss";

// Define type for Button props
interface ButtonProps {
    href: string;
    text: string;
    className: string;
}

// Button component
const Button: React.FC<ButtonProps> = ({ href, text, className }) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {text}
        </a>
    );
};

export const Hero: React.FC = () => {
    const [viewportWidth, setViewportWidth] = useState<number>(0);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        // Initial viewport setup
        const handleResize = () => {
            const width = window.innerWidth;
            setViewportWidth(width);
            setIsMobile(width <= 768);
        };

        // Set initial values
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={css.hero}>
            {/* Background with grid and blob */}
            <div className={css.hero_background}>
                <img src="/img/herosection/glassmorph.png" alt="" className={css.hero_bg_image} />
            </div>

            <div className={css.hero_content}>
                {/* Main heading and details */}
                <div className={css.content_wrapper}>
                    <div className={css.main_content}>
                        <div className={css.heading_wrapper}>
                            <h1 className={css.main_heading}>BASED ROLLUP SUMMIT</h1>

                            <div className={css.date_location}>
                                <p className={css.date}>JULY 1, 2025</p>
                                <p className={css.location}>CANNES, FRANCE</p>
                            </div>
                        </div>
                    </div>

                    {/* Buttons section */}
                    <div className={css.button_container}>
                        <Button
                            href="https://lu.ma/37ykg387"
                            text="Register now"
                            className={css.register_button}
                        />
                        <div className={css.secondary_buttons}>
                            <Button
                                href="https://docsend.com/view/hmzw3drdr5tf3n3k"
                                text="Apply as Sponsor"
                                className={css.sponsor_button}
                            />
                            <Button
                                href="https://docs.google.com/forms/d/1g-FnXyQ2qAsWpJ0cPY_2BGE-1mwkxTP0N-RXDV4YZfg/"
                                text="Apply as Speaker"
                                className={css.sponsor_button}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};