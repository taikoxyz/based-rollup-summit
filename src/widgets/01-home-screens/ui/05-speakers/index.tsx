import React, { useEffect, useState } from "react";
import { HOME_PAG } from "widgets/01-home-screens/lib";
import { Button } from "shared/components/@buttons/button";
import css from "./speakers.module.scss";

interface ProfileCardProps {
    image: string;
    name: string;
    title: string;
    company: string;
}

interface Speaker {
    image: string;
    name: string;
    title: string;
    company: string;
}

const speakers: Speaker[] = [
    {
        image: "/img/speakers/justin-drake.jpeg",
        name: "Justin Drake",
        title: "Researcher",
        company: "Ethereum",
    },
    {
        image: "/img/speakers/daniel-wang.webp",
        name: "Daniel Wang",
        title: "CEO and Co-founder",
        company: "Taiko",
    },
    {
        image: "/img/speakers/joaquin.png",
        name: "Joaquin Mendes",
        title: "Chief Operating Officer",
        company: "Taiko",
    },
    {
        image: "/img/speakers/tomasz.png",
        name: "Tomasz K. Stanczak",
        title: "Co-Executive Director, Ethereum Foundation",
        company: "Founder, Nethermind",
    },
    {
        image: "/img/speakers/kevin-lepsoe.png",
        name: "Kevin Lepsoe",
        title: "Founder & CEO",
        company: "ETHGas",
    },
    {
        image: "/img/speakers/kubi-mensah.jpeg",
        name: "Kubi Mensah",
        title: "CEO and Co-founder",
        company: "Gattaca",
    },
    {
        image: "/img/speakers/gustavo-gonzales.png",
        name: "Gustavo Gonzales",
        title: "Libraries & Tooling, Senior Manager",
        company: "OpenZeppelin",
    },
    {
        image: "/img/speakers/kyle-rojas.jpg",
        name: "Kyle Rojas",
        title: "Global Business Lead",
        company: "Avail",
    },
    {
        image: "/img/speakers/drew.jpeg",
        name: "Drew Van Der Werff",
        title: "Shepherding Commit",
        company: "Boost and Fabric",
    },
    {
        image: "/img/speakers/brecht.png",
        name: "Brecht Devos",
        title: "Co-founder and CTO",
        company: "Taiko",
    },
    {
        image: "/img/speakers/conor.jpg",
        name: "Conor McMenamin",
        title: "Protocol Researcher",
        company: "Nethermind",
    },
    {
        image: "/img/speakers/harry-gao.jpeg",
        name: "Harry Gao",
        title: "Co-founder",
        company: "Luban",
    },
    {
        image: "/img/speakers/alon-muroch.jpg",
        name: "Alon Muroch",
        title: "Founder and CEO",
        company: "SSV Labs",
    },
    {
        image: "/img/speakers/shiv-sankar.jpeg",
        name: "Shiv Sankar",
        title: "CEO",
        company: "Boundless Foundation",
    },
    {
        image: "/img/speakers/gink-chen.png",
        name: "Gink Chen",
        title: "CMO",
        company: "Zerobase",
    },
];

const ProfileCard: React.FC<ProfileCardProps> = ({ image, name, title, company }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={css.profileCard}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={css.profileCard__image}
                style={{
                    borderColor: isHovered ? "#e81899" : "transparent",
                }}
            >
                <img src={image} alt={name} />
            </div>
            <h3 className={css.profileCard__name}>{name}</h3>
            <p className={css.profileCard__title}>{title}</p>
            <p className={css.profileCard__title}>{company}</p>
        </div>
    );
};

export const Speakers: React.FC = () => {
    const [isDesktop, setIDesktop] = useState<boolean>(false);

    useEffect(() => {
        // Initial viewport setup
        const handleResize = () => {
            setIDesktop(window.innerWidth >= 1440);
        };

        // Set initial values
        handleResize();

        // Add resize listener
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const initialVisibleElements = 12;
    const [maxVisibleElements, setMaxVisibleElements] = useState<number>(initialVisibleElements);
    function handleViewMoreClick() {
        console.log("setting more viewable elements", speakers.length);
        setMaxVisibleElements(
            maxVisibleElements === initialVisibleElements ? speakers.length : initialVisibleElements
        );
    }

    return (
        <section className={css.speakers} id={HOME_PAG.SPEAKERS}>
            <div className={css.speakers_entry_row}>
                <div className={css.title}>SPEAKERS</div>
                <div className={css.body}>
                    <div>
                        <div className={css.left_title}>Now Accepting Speaker Applications</div>
                    </div>
                    {isDesktop && <div></div>}

                    <div>
                        <div className={css.right_title}>
                            Our Cannes summit will feature leading voices in Ethereum scaling and L2
                            development, stay tuned.
                        </div>
                        <Button
                            noArrow
                            onClick={() =>
                                window.open(
                                    "https://docs.google.com/forms/d/1i0CKZpvVgtPXwGcrI9w4xBgyduGuCZLPHxRSRZLd5KA/edit",
                                    "_blank"
                                )
                            }
                            className={css.button}
                            text="Apply as Speaker"
                        />
                    </div>
                </div>
            </div>
            <div className={css.speakers_text}>SPEAKERS</div>
            <div className={css.speakers_wrapper}>
                {speakers.slice(0, maxVisibleElements).map((speaker, index) => (
                    <ProfileCard key={index} {...speaker} />
                ))}
            </div>
            <div className={css.speakers_more_wrapper}>
                {speakers.length > maxVisibleElements && (
                    <Button
                        noArrow
                        className={css.speakers_more}
                        onClick={() => handleViewMoreClick()}
                        text={
                            maxVisibleElements === initialVisibleElements
                                ? "View more"
                                : "View less"
                        }
                    />
                )}
            </div>
        </section>
    );
};
