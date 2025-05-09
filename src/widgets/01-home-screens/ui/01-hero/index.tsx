import React, { useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";
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
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const canvas = document.getElementById("spline") as HTMLCanvasElement;
        if (!canvas) return;
        const app = new Application(canvas);
        app.load("/spline/scene.splinecode");
    }, []);

    useEffect(() => {
        // Initial viewport setup
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        // Set initial values
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const titleParts = ["BASED", "ROLLUP", "SUMMIT"];

    return (
        <section className={css.hero}>
            <div className={css.hero_content}>
                {/* Main heading and details */}
                <div className={css.content_wrapper}>
                    <div className={css.spline}>
                        <canvas id="spline"></canvas>
                    </div>
                    <div className={css.main_content}>
                        <div className={css.heading_wrapper}>
                            <div className={css.main_heading}>
                                {isMobile
                                    ? // Mobile version with line breaks
                                      titleParts.map((part, index) => <div key={index}>{part}</div>)
                                    : // Desktop version with spaces
                                      titleParts.join(" ")}
                            </div>
                            <div className={css.date_location}>
                                <div className={css.date}>JULY 1, 2025</div>
                                <div className={css.location}>CANNES, FRANCE</div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons section */}
                    <div className={css.button_container}>
                        <div className={css.register_button_wrapper}>
                            <Button
                                href="https://lu.ma/mvkcbx5k"
                                text="Register now"
                                className={css.register_button}
                            />
                        </div>
                        <div className={css.sponsor_button_wrapper}>
                            <Button
                                href="https://docsend.com/view/hmzw3drdr5tf3n3k"
                                text="Apply as Sponsor"
                                className={css.sponsor_button}
                            />
                        </div>
                        <div className={css.sponsor_button_wrapper}>
                            <Button
                                href="https://docs.google.com/forms/d/1i0CKZpvVgtPXwGcrI9w4xBgyduGuCZLPHxRSRZLd5KA/edit"
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
