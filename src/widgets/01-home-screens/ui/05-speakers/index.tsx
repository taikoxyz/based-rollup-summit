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
        image: "/img/speakers/vitalik.png",
        name: "Vitalik Buterin",
        title: "Co-founder",
        company: "Ethereum Foundation",
    },
    {
        image: "/img/speakers/dan-boneh.png",
        name: "Professor Dan Boneh",
        title: "Co-director",
        company: "Stanford Blockchain Research",
    },
    {
        image: "/img/speakers/joaquin.png",
        name: "Joaquin Mendes",
        title: "Chief Operating Officer",
        company: "Taiko",
    },
    {
        image: "/img/speakers/brecht.png",
        name: "Brecht Devos",
        title: "Co-founder and CTO",
        company: "Taiko",
    },
    {
        image: "/img/speakers/tomasz.png",
        name: "Tomasz Stanczak",
        title: "CEO",
        company: "Nethermind & incoming EF Co-Executive Director",
    },
    {
        image: "/img/speakers/uma.png",
        name: "Uma Roy",
        title: "Co-founder & CEO",
        company: "Succinct",
    },
    {
        image: "/img/speakers/drew.png",
        name: "Drew Van Der Werff",
        title: "Shepherding Commit",
        company: "Boost and Fabric",
    },
    {
        image: "/img/speakers/harry.png",
        name: "Harry Gao",
        title: "Co-founder",
        company: "Luban",
    },
    {
        image: "/img/speakers/irfan.png",
        name: "Irfan Shaik",
        title: "Founder",
        company: "Interstate.so",
    },
    {
        image: "/img/speakers/keyao.png",
        name: "Keyao Shen",
        title: "Senior Lead Software Engineer",
        company: "Espresso Systems",
    },
    {
        image: "/img/speakers/cecilia.png",
        name: "Cecilia Zhang",
        title: "Engineer",
        company: "Taiko",
    },
    {
        image: "/img/speakers/jay.png",
        name: "Jay Yu",
        title: "President",
        company: "Stanford Blockchain Club & Associate at Pantera",
    },
    {
        image: "/img/speakers/jeff.png",
        name: "Jeff Walsh",
        title: "Engineer",
        company: "Taiko",
    },
    {
        image: "/img/speakers/alex.png",
        name: "Alex Skidanov",
        title: "Co-founder",
        company: "Near",
    },
    {
        image: "/img/speakers/Ram.png",
        name: "Ramkumar",
        title: "Core Contributor",
        company: "Openledger",
    },

    {
        image: "/img/speakers/faction.png",
        name: "Tim Khoury",
        title: "Partner",
        company: "Faction VC",
    },
    {
        image: "/img/speakers/dan.png",
        name: "Dan Park",
        title: "Research Associate",
        company: "Hashed",
    },
    {
        image: "/img/speakers/nick.png",
        name: "Nick Shaheen",
        title: "Director of BD",
        company: "BanklessHQ",
    },
    {
        image: "/img/speakers/keith.png",
        name: "Keith Chen",
        title: "Managing Partner",
        company: "SNZ Holding",
    },
    {
        image: "/img/speakers/kevin.png",
        name: "Kevin Lee",
        title: "Founder",
        company: "L2IV",
    },
    {
        image: "/img/speakers/kun.png",
        name: "Kun Peng",
        title: "Founder",
        company: "Stanford Blockchain Accelerator",
    },
    {
        image: "/img/speakers/apoorv.png",
        name: "Apoorv Anand",
        title: "Researcher/Advisor",
        company: "RISE Labs",
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

    return (
        <section className={css.speakers} id={HOME_PAG.SPEAKERS}>
            <div className={css.speakers_entry_row}>
                <div className={css.title}>SPEAKERS</div>
                <div className={css.body}>
                    <div>
                        <div className={css.left_title}>Now Accepting Speaker Applications</div>
                        <div className={css.left_body}>
                            Speakers will be announced starting May 15th, 2025
                        </div>
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
            <div className={css.speakers_text}>PREVIOUS SPEAKERS</div>
            <div className={css.speakers_wrapper}>
                {speakers.map((speaker, index) => (
                    <ProfileCard key={index} {...speaker} />
                ))}
            </div>
        </section>
    );
};
