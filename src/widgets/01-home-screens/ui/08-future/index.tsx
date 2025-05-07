import React, { useEffect } from "react";
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
    const [isMobile, setIsMobile] = React.useState(false);
    const [isTablet, setIsTablet] = React.useState(false);
    const [isDesktop, setIsDesktop] = React.useState(false);

    useEffect(() => {
        // Initial viewport setup
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
            setIsDesktop(window.innerWidth >= 1024);
        };

        // Set initial values
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

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

    const gallery = [
        {
            src: "/img/gallery/1.png",
            colSpan: {
                desktop: 2,
                tablet: 4,
                mobile: 4,
            },
        },
        {
            src: "/img/gallery/2.png",
            colSpan: {
                desktop: 1,
                tablet: 2,
                mobile: 2,
            },
        },
        {
            src: "/img/gallery/3.png",
            colSpan: {
                desktop: 3,
                tablet: 6,
                mobile: 6,
            },
        },
        {
            src: "/img/gallery/4.png",
            colSpan: {
                desktop: 2,
                tablet: 4,
                mobile: 6,
            },
        },
        {
            src: "/img/gallery/5.png",
            colSpan: {
                desktop: 1,
                tablet: 2,
                mobile: 3,
            },
        },
        {
            src: "/img/gallery/6.png",
            colSpan: {
                desktop: 1,
                tablet: 2,
                mobile: 3,
            },
        },
        {
            src: "/img/gallery/7.png",
            colSpan: {
                desktop: 2,
                tablet: 4,
                mobile: 6,
            },
        },
        {
            src: "/img/gallery/8.png",
            colSpan: {
                desktop: 3,
                tablet: 3,
                mobile: 6,
            },
        },
        {
            src: "/img/gallery/9.png",
            colSpan: {
                desktop: 2,
                tablet: 2,
                mobile: 6,
            },
        },
        {
            src: "/img/gallery/10.png",
            colSpan: {
                desktop: 1,
                tablet: 1,
                mobile: 6,
            },
        },
    ];

    function getItemColSpan(index: number) {
        if (isDesktop) {
            return gallery[index].colSpan.desktop;
        } else if (isTablet) {
            return gallery[index].colSpan.tablet;
        } else if (isMobile) {
            return gallery[index].colSpan.mobile;
        }
        return 1; // Default value
    }
    return (
        <section className={css.gallery} ref={futureRef} id={HOME_PAG.FUTURE}>
            <div className={css.gallery_wrapper}>
                {gallery.map((item, index) => (
                    <div
                        key={index}
                        className={css.gallery_item}
                        style={{
                            backgroundImage: `url(${item.src})`,
                            gridColumn: `span ${getItemColSpan(index)} / span ${getItemColSpan(index)}`,
                        }}
                    ></div>
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
