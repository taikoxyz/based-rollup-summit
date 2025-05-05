import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import css from "./future.module.scss";
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

// todo: rename to picture-gallery
export const Future: React.FC = () => {
    const futureRef = React.useRef<HTMLDivElement>(null);
    const { t } = useTranslation("footer");

    // Add animation class on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (futureRef.current) {
                const rect = futureRef.current.getBoundingClientRect();
                if (rect.top < window.innerHeight * 0.75) {
                    futureRef.current.classList.add(css._animated);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Check once on mount
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle button click to redirect
    const handleButtonClick = () => {
        window.open("https://lu.ma/37ykg387", "_blank", "noopener,noreferrer");
    };

    const gallery = [
        {
            src: '/img/gallery/1.png',
            colSpan: 2
        },
        {
            src: '/img/gallery/2.png',
            colSpan:1
        },
        {
            src: '/img/gallery/3.png',
            colSpan: 3
        },
        {
            src: '/img/gallery/4.png',
            colSpan: 2
        },
        {
            src: '/img/gallery/5.png',
            colSpan: 1
        },
        {
            src: '/img/gallery/6.png',
            colSpan: 1
        },
        {
            src: '/img/gallery/7.png',
            colSpan: 2
        },
        {
            src: '/img/gallery/8.png',
            colSpan: 3
        },
        {
            src: '/img/gallery/9.png',
            colSpan: 2
        },
        {
            src: '/img/gallery/10.png',
            colSpan: 1
        },
    ]
    return (
        <section className={css.gallery} ref={futureRef} id={HOME_PAG.FUTURE}>
            <div className={css.gallery_wrapper}>

            {gallery.map((item, index) => (
                <div key={index} className={css.gallery_item}
                    style={{
                        backgroundImage: `url(${item.src})`,
                        gridColumn: `span ${item.colSpan} / span ${item.colSpan}` }}
                >
                </div>

            ))}
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
        </section>
    );
};
