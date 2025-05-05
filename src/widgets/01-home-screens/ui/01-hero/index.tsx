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
            <div className={css.hero_content}>
                {/* Main heading and details */}
                <div className={css.content_wrapper}>
                    <div className={css.main_content}>
                        <div className={css.heading_wrapper}>
                            <div className={css.main_heading}>BASED ROLLUP SUMMIT</div>

                            <div className={css.date_location}>
                                <div className={css.date}>JULY 1, 2025</div>
                                <div className={css.location}>CANNES, FRANCE</div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons section */}
                    <div className={css.button_container}>
                        <Button
                            href="https://docsend.com/view/hmzw3drdr5tf3n3k"
                            text="Register now"
                            className={css.register_button}
                        />
                            <Button
                                href="https://docsend.com/view/hmzw3drdr5tf3n3k"
                                text="Apply as Sponsor"
                                className={css.sponsor_button}
                            />
                            <Button
                                href="https://docsend.com/view/hmzw3drdr5tf3n3k"
                                text="Apply as Speaker"
                                className={css.sponsor_button}
                            />
                    </div>
                </div>
            </div>
        </section>
    );
};
